"use server";

import { z } from "zod";
import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { leads } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";

// Zod schema for lead input
export const leadSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  source: z.string().optional(),
  status: z.string().optional(),
  notes: z.string().optional(),
});

// Create new lead
export async function createLeadAction(input: z.infer<typeof leadSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");

  // Fetch the user's current team from team_members
  const userTeam = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, session.userId),
    columns: { teamId: true },
  });
  if (!userTeam) throw new Error("User has no team assigned");

  const res = await db
    .insert(leads)
    .values({
      teamId: userTeam.teamId,
      ownerId: session.userId,
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone ?? "",
      company: input.company ?? "",
      source: input.source ?? "",
      status: input.status ?? "new",
      notes: input.notes ?? "",
    })
    .returning();

  return { status: "success", lead: res[0] };
}

// List leads for current user's team
export async function listLeadsAction() {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");

  // Get team
  const userTeam = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, session.userId),
    columns: { teamId: true },
  });
  if (!userTeam) throw new Error("User has no team assigned");

  // Query all leads associated to this team
  const rows = await db
    .select()
    .from(leads)
    .where(eq(leads.teamId, userTeam.teamId))
    .orderBy(leads.createdAt);

  return rows;
}

// Update an existing lead
export async function updateLeadAction(id: string, input: z.infer<typeof leadSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!id) throw new Error("Lead ID required");

  // Make sure the lead belongs to the user's team
  const userTeam = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, session.userId),
    columns: { teamId: true },
  });
  if (!userTeam) throw new Error("User has no team assigned");

  const result = await db
    .update(leads)
    .set({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone ?? "",
      company: input.company ?? "",
      source: input.source ?? "",
      status: input.status ?? "new",
      notes: input.notes ?? "",
      updatedAt: new Date(),
    })
    .where(and(eq(leads.id, id), eq(leads.teamId, userTeam.teamId)))
    .returning();

  if (!result[0]) throw new Error("Not found or permission denied");
  return { status: "success", lead: result[0] };
}

// Delete a lead
export async function deleteLeadAction(id: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!id) throw new Error("Lead ID required");

  // Make sure user can only delete leads from their own team
  const userTeam = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, session.userId),
    columns: { teamId: true },
  });
  if (!userTeam) throw new Error("User has no team assigned");

  const deleted = await db
    .delete(leads)
    .where(and(eq(leads.id, id), eq(leads.teamId, userTeam.teamId)))
    .returning();

  if (!deleted[0]) throw new Error("Not found or permission denied");
  return { status: "success", deletedId: id };
}
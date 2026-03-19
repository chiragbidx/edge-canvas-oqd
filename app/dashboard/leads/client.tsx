"use client";

import { useEffect, useState } from "react";
import {
  listLeadsAction,
  createLeadAction,
  updateLeadAction,
  deleteLeadAction,
  leadSchema,
} from "./actions";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  status: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export default function LeadsClient() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [editLead, setEditLead] = useState<Lead | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    status: "new",
    notes: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  async function fetchLeads() {
    setLoading(true);
    setError(null);
    try {
      const rows = await listLeadsAction();
      setLeads(rows);
    } catch (err: any) {
      setError(err?.message || "Error loading leads.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  function openAddDialog() {
    setEditLead(null);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      source: "",
      status: "new",
      notes: "",
    });
    setOpen(true);
  }

  function openEditDialog(lead: Lead) {
    setEditLead(lead);
    setForm({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      company: lead.company,
      source: lead.source,
      status: lead.status,
      notes: lead.notes,
    });
    setOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setProcessing(true);
    setFormError(null);

    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      setFormError("Please fill all required fields and use a valid email address.");
      setProcessing(false);
      return;
    }
    try {
      if (editLead) {
        await updateLeadAction(editLead.id, form);
      } else {
        await createLeadAction(form);
      }
      await fetchLeads();
      setOpen(false);
    } catch (err: any) {
      setFormError(err?.message || "An error occurred");
    } finally {
      setProcessing(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this lead? You can't undo this.")) return;
    setProcessing(true);
    try {
      await deleteLeadAction(id);
      await fetchLeads();
    } catch (err: any) {
      setError(err?.message || "Failed to delete lead.");
    } finally {
      setProcessing(false);
    }
  }

  return (
    <section className="px-4 py-10 mx-auto max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Leads</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog}>Add Lead</Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <DialogHeader>
                <DialogTitle>{editLead ? "Edit Lead" : "Add Lead"}</DialogTitle>
                <DialogDescription>
                  {editLead
                    ? "Modify information and update the lead."
                    : "Fill the form to add a new lead."}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name *</label>
                  <Input
                    value={form.firstName}
                    required
                    onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name *</label>
                  <Input
                    value={form.lastName}
                    required
                    onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <Input
                    value={form.email}
                    type="email"
                    required
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <Input
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Source</label>
                  <Input
                    value={form.source}
                    onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <Input
                    value={form.status}
                    onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">Notes</label>
                  <Input
                    value={form.notes}
                    onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  />
                </div>
              </div>
              {formError && (
                <div className="text-sm text-destructive font-medium">{formError}</div>
              )}
              <DialogFooter>
                <Button type="submit" disabled={processing}>
                  {processing ? "Saving..." : editLead ? "Update Lead" : "Add Lead"}
                </Button>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    disabled={processing}
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {loading ? (
        <div>Loading leads…</div>
      ) : error ? (
        <div className="text-destructive">{error}</div>
      ) : leads.length === 0 ? (
        <div className="text-muted-foreground">No leads yet.</div>
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Company</Th>
              <Th>Source</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {leads.map((lead) => (
              <Tr key={lead.id}>
                <Td>{lead.firstName}</Td>
                <Td>{lead.lastName}</Td>
                <Td>{lead.email}</Td>
                <Td>{lead.phone}</Td>
                <Td>{lead.company}</Td>
                <Td>{lead.source}</Td>
                <Td>{lead.status}</Td>
                <Td>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => openEditDialog(lead)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(lead.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </section>
  );
}
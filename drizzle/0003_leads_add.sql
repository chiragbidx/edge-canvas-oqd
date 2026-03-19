CREATE TABLE IF NOT EXISTS "leads" (
  "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "team_id" text NOT NULL REFERENCES "teams" ("id") ON DELETE CASCADE,
  "owner_id" text NOT NULL REFERENCES "users" ("id") ON DELETE SET NULL,
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "email" text NOT NULL,
  "phone" text NOT NULL DEFAULT '',
  "company" text NOT NULL DEFAULT '',
  "source" text NOT NULL DEFAULT '',
  "status" text NOT NULL DEFAULT 'new',
  "notes" text NOT NULL DEFAULT '',
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);
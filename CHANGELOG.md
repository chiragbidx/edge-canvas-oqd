# Changelog

## [LeadNest CRM Initial Brand & Dashboard Foundation] - 2024-06-08

### Added
- Dashboard pages for core CRM workflow:
  - `/dashboard/leads`: Heading "Leads", empty state message, and "Add Lead" CTA
  - `/dashboard/contacts`: Heading "Contacts", empty state message, and "Add Contact" CTA
  - `/dashboard/deals`: Heading "Deals", empty state message, and "Add Deal" CTA

### Changed
- All homepage/landing page content in `content/home.ts` updated to LeadNest branding, features, positioning.
- Navbar branding updated to "LeadNest" across mobile/desktop (`components/layout/navbar.tsx` pulls value from new homepage content).
- All auth client UI headings, subheadings, CTA buttons, and helper text now refer to "LeadNest" (Sign In/Sign Up + helper text, onboarding copy, and CTA).
- Dashboard shell (`app/dashboard/layout.tsx`) sidebar and logo section now use "LeadNest" (with "L" mark), consistent with LeadNest visual brand.
- Dashboard sidebar navigation (`components/dashboard/sidebar-nav.tsx`) replaced with new workspace nav: "Dashboard", "Leads", "Contacts", "Deals", "Settings".
- Dashboard welcome page content: heading "Welcome to LeadNest", CRM workflow subheading, empty state messaging (“No data yet. Start by adding a new lead, contact, or deal.”) with CTAs.
- All new routes/pages use shadcn/ui button and styling conventions.

### Branding
- Owner info and demo contact updated for: Chirag Dodiya (chirag@bidx.ai)

---
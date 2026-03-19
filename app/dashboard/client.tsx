"use client";

type ClientProps = {
  greeting: string;
  firstName: string;
  subheading: string;
};

export default function Client({ greeting, firstName, subheading }: ClientProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[360px] py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-3">{greeting}, {firstName}!</h1>
      <p className="text-muted-foreground mb-8 text-lg text-center">{subheading}</p>
      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="rounded-lg bg-muted p-8 flex flex-col items-center max-w-lg">
          <p className="text-base font-medium mb-4">
            No data yet. Start by adding a new lead, contact, or deal.
          </p>
          <div className="flex gap-4">
            <a href="/dashboard/leads" className="inline-block">
              <button className="inline-flex items-center rounded-md bg-primary text-background px-5 py-2 font-semibold shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Add Lead
              </button>
            </a>
            <a href="/dashboard/contacts" className="inline-block">
              <button className="inline-flex items-center rounded-md bg-muted-foreground text-background px-5 py-2 font-semibold shadow hover:bg-muted-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Add Contact
              </button>
            </a>
            <a href="/dashboard/deals" className="inline-block">
              <button className="inline-flex items-center rounded-md bg-muted-foreground text-background px-5 py-2 font-semibold shadow hover:bg-muted-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Add Deal
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
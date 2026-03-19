import React from "react";

export default function ContactsPage() {
  return (
    <section className="px-4 py-10 flex flex-col items-center min-h-[320px]">
      <h1 className="text-3xl font-bold mb-2">Contacts</h1>
      <p className="text-muted-foreground mb-6">No contacts yet.</p>
      <a href="#" className="inline-block">
        <button className="inline-flex items-center rounded-md bg-primary text-background px-6 py-2 font-semibold shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Add Contact
        </button>
      </a>
    </section>
  );
}
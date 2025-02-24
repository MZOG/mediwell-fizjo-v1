"use client";
import Cal from "@calcom/embed-react";

export default function Contact() {
  return (
    <section className="px-5 max-w-7xl mx-auto">
      <Cal
        calLink="marcin-zogrodnik-pqovrp/pierwsza-wizyta"
        config={{ theme: "light" }}
      ></Cal>
    </section>
  );
}

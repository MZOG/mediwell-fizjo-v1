"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Consultation() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "pierwsza-wizyta" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#00527E" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section className="px-5 max-w-7xl mx-auto">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl md:text-center mb-10 text-primary">
        Umów się na konsultację
      </h1>
      <div className="max-w-lg mx-auto mb-12 text-center">
        <p>Wizyta odbywa się w gabinecie.</p>
        <p className="font-medium">Ul. Fizjoterapeuty 2, 44-212 Wrocław</p>
      </div>
      <Cal
        namespace="pierwsza-wizyta"
        calLink="marcin-zogrodnik-pqovrp/pierwsza-wizyta"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </section>
  );
}

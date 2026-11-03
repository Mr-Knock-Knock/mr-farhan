"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function CalInit({ namespace }: { namespace: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#cdeb45" },
          dark: { "cal-brand": "#cdeb45" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, [namespace]);

  return null;
}
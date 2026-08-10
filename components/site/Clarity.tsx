"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityAnalytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
    if (!id) return;
    Clarity.init(id);
  }, []);

  return null;
}

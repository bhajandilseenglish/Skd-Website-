import type { Metadata } from "next";
import CorporateTrainingClient from "./CorporateTrainingClient";

export const metadata: Metadata = {
  title: "Corporate Training & Professional Skills | SKD Group Chandigarh",
  description:
    "Upskill with Data Analytics, Microsoft Power BI, Advanced Excel, and IFRS corporate workshops at SKD Group Chandigarh. ₹999 launch offer. Expert faculty, certificates, flexible modes.",
  alternates: { canonical: "/corporate-training" },
  openGraph: {
    title: "Corporate Training & Professional Skills | SKD Group Chandigarh",
    description:
      "Data Analytics, Power BI, Advanced Excel & IFRS corporate training. ₹999 launch offer. Industry-expert faculty in Chandigarh.",
    url: "https://skdgroupofinstitutions.com/corporate-training",
  },
};

export default function CorporateTrainingPage() {
  return <CorporateTrainingClient />;
}

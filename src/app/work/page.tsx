import type { Metadata } from "next";
import { Header } from "@/components/header";
import WorkIndex from "./work-index";
import { WorkExperience } from "./experience";

export const metadata: Metadata = {
  title: "Work · Andrew Jones",
  description: "Selected product and design work.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <div className="pt-8">
        <WorkExperience />
        <WorkIndex />
      </div>
    </>
  );
}

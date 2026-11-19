import type { Metadata } from "next";
import { professionalCoursesData } from "@/data/professionalCourses";
import ProfessionalCourseTemplate from "@/components/ProfessionalCourseTemplate";
import { notFound } from "next/navigation";

const course = professionalCoursesData.find((c) => c.slug === "advanced-excel")!;

export const metadata: Metadata = {
  title: course.metaTitle,
  description: course.metaDescription,
  alternates: { canonical: course.canonicalUrl },
  openGraph: {
    title: course.metaTitle,
    description: course.metaDescription,
    url: `https://skdgroupofinstitutions.com${course.canonicalUrl}`,
  },
};

export default function AdvancedExcelPage() {
  if (!course) return notFound();
  return <ProfessionalCourseTemplate course={course} />;
}

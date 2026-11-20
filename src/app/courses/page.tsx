import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { coursesData } from "@/data/courses";
import { professionalCoursesData } from "@/data/professionalCourses";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, Clock, Compass, ArrowRight, Award, BarChart3, PieChart, Table2, Phone, Tag } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Professional Accounting & Finance Courses in Chandigarh | SKD Group",
  description:
    "Explore professional finance qualifications at SKD Group of Institutions: ACCA, CA Foundation, CA Intermediate, CA Final, US CMA, US CPA, Data Analytics, Power BI, and Advanced Excel.",
  alternates: {
    canonical: "/courses",
  },
};

// All main qualification courses except Corporate Training
const qualificationCourses = coursesData.filter((c) => c.slug !== "corporate-training");

const proCardIcons: Record<string, React.ElementType> = {
  "data-analytics": BarChart3,
  "power-bi": PieChart,
  "advanced-excel": Table2,
};

const proCardThemes: Record<string, { heroBg: string; iconBg: string; iconColor: string; priceCls: string; btnCls: string }> = {
  "data-analytics": { heroBg: "from-[#1E3A8A] to-[#1D4ED8]", iconBg: "bg-blue-100", iconColor: "text-blue-600", priceCls: "text-blue-700", btnCls: "bg-[#1D4ED8] hover:bg-[#1E3A8A]" },
  "power-bi":       { heroBg: "from-[#92400E] to-[#D97706]", iconBg: "bg-amber-100", iconColor: "text-amber-600", priceCls: "text-amber-700", btnCls: "bg-[#D97706] hover:bg-[#92400E]" },
  "advanced-excel": { heroBg: "from-[#064E3B] to-[#059669]", iconBg: "bg-emerald-100", iconColor: "text-emerald-600", priceCls: "text-emerald-700", btnCls: "bg-[#059669] hover:bg-[#064E3B]" },
};

export default function CoursesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "All Programs" }]} />

      <div className="space-y-16 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#F8FAFF] via-[#EFF6FF]/60 to-white py-12 border-b border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-semibold mb-3 border border-[#2855E8]/20">
              <Award className="w-3.5 h-3.5 text-[#2855E8]" />
              <span>International & National Qualifications</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              All Programs
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              Professional qualifications and skill courses for finance, accounting, and analytics careers.
            </p>
          </div>
        </section>

        {/* ── QUALIFICATION COURSES (excluding Corporate Training) ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#101F3D] mb-6 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-[#2855E8]" /> Professional Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualificationCourses.map((course) => (
              <div
                key={course.slug}
                className="bg-white rounded-2xl border border-[#E2E8F5] overflow-hidden shadow-card-blue hover:border-[#2855E8]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={course.cardImage}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#101F3D]/95 backdrop-blur-md text-white text-[11px] font-bold rounded-lg border border-white/20 shadow-sm">
                        {course.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-lg font-bold text-[#101F3D] leading-snug">{course.title}</h2>
                    <p className="text-xs sm:text-sm text-[#66758C] line-clamp-3 leading-relaxed">{course.overview}</p>
                    <div className="pt-2 border-t border-[#E2E8F5] space-y-1.5 text-xs text-[#14243D]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#66758C] flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1.5 text-[#2855E8]" /> Duration:
                        </span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#66758C] flex items-center">
                          <Compass className="w-3.5 h-3.5 mr-1.5 text-[#DCA43A]" /> Mode:
                        </span>
                        <span className="font-semibold">{course.modes.split("&")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/${course.slug}`}
                    className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl bg-gradient-to-r from-[#2855E8] to-[#467FFF] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md transition-all group"
                  >
                    <span>View Complete Syllabus & Exam Pattern</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CORPORATE TRAINING & PROFESSIONAL SKILL COURSES ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#101F3D] flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-[#2855E8]" /> Corporate Training & Professional Skills
            </h2>
            <p className="text-sm text-[#66758C] mt-1">Practical, job-ready skill courses at ₹999 launch price.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalCoursesData.map((course) => {
              const Icon = proCardIcons[course.slug] ?? BarChart3;
              const theme = proCardThemes[course.slug] ?? proCardThemes["data-analytics"];
              return (
                <div
                  key={course.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className={`bg-gradient-to-br ${theme.heroBg} p-6 relative`}>
                    <div className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center mb-3 shadow-sm`}>
                      <Icon className={`w-6 h-6 ${theme.iconColor}`} />
                    </div>
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-red-500 text-white text-[10px] font-bold">
                      LIMITED OFFER
                    </span>
                    <h3 className="text-lg font-extrabold text-white">{course.title}</h3>
                    <p className="text-white/75 text-xs mt-1">{course.tagline}</p>
                  </div>
                  <div className="p-5 flex flex-col flex-1 space-y-3">
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{course.shortDesc}</p>
                    <div className="flex items-center text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 mr-1.5" /> {course.duration}
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-slate-400 line-through text-sm">₹{course.originalPrice.toLocaleString("en-IN")}</span>
                      <span className={`text-2xl font-extrabold ${theme.priceCls}`}>₹{course.offerPrice}</span>
                      <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                        Save ₹{course.savings.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">Upcoming Batch: {course.batchInfo}</div>
                    <div className="flex gap-2 pt-1 mt-auto">
                      <Link
                        href={course.route}
                        className="flex-1 flex items-center justify-center py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-[#101F3D] hover:bg-slate-50 transition-colors"
                      >
                        View Course <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <a
                        href="tel:+918054811313"
                        className={`flex-1 flex items-center justify-center py-2.5 rounded-xl text-white text-sm font-bold ${theme.btnCls} transition-colors`}
                      >
                        <Phone className="w-3.5 h-3.5 mr-1.5" /> Enroll
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/corporate-training"
              className="inline-flex items-center px-6 py-3 bg-[#101F3D] text-white rounded-xl font-bold text-sm hover:bg-[#1D3766] transition-colors"
            >
              <Tag className="w-4 h-4 mr-2" /> View All Corporate Training Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Courses Directory Page" />
        </section>
      </div>
    </>
  );
}


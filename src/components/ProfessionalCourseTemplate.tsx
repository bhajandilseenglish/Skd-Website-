"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Tag,
  Users,
  BookOpen,
  Award,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { ProfessionalCourse, professionalCoursesData } from "@/data/professionalCourses";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/data/siteData";

interface Props {
  course: ProfessionalCourse;
}

const themeMap: Record<string, {
  heroBg: string; tag: string; accent: string;
  btn: string; accordionBorder: string; accentHex: string;
}> = {
  "#1D4ED8": {
    heroBg: "from-[#1E3A8A] to-[#1D4ED8]",
    tag: "bg-blue-50 text-blue-700 border border-blue-200",
    accent: "text-blue-600",
    btn: "bg-[#1D4ED8] hover:bg-[#1E3A8A]",
    accordionBorder: "border-blue-200",
    accentHex: "#1D4ED8",
  },
  "#D97706": {
    heroBg: "from-[#92400E] to-[#D97706]",
    tag: "bg-amber-50 text-amber-700 border border-amber-200",
    accent: "text-amber-600",
    btn: "bg-[#D97706] hover:bg-[#92400E]",
    accordionBorder: "border-amber-200",
    accentHex: "#D97706",
  },
  "#059669": {
    heroBg: "from-[#064E3B] to-[#059669]",
    tag: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    accent: "text-emerald-600",
    btn: "bg-[#059669] hover:bg-[#064E3B]",
    accordionBorder: "border-emerald-200",
    accentHex: "#059669",
  },
};

export default function ProfessionalCourseTemplate({ course }: Props) {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const related = professionalCoursesData.filter((c) => c.slug !== course.slug);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I'm interested in the ${course.title} course (₹999 offer). Please share details.`
  )}`;
  const callUrl = `tel:+918054811313`;
  const t = themeMap[course.theme.primary] ?? themeMap["#1D4ED8"];

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <nav className="bg-slate-50 border-b border-slate-200 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center space-x-1.5 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#2855E8]">Home</Link>
          <span>/</span>
          <Link href="/corporate-training" className="hover:text-[#2855E8]">Corporate Training</Link>
          <span>/</span>
          <span className="text-[#101F3D] font-semibold">{course.title}</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={`bg-gradient-to-br ${t.heroBg} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold border border-white/25">
                  <Award className="w-3 h-3 mr-1.5" /> Professional Certificate
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/90 text-white text-xs font-bold">
                  <Tag className="w-3 h-3 mr-1.5" /> Limited Offer — ₹999
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{course.title}</h1>
              <p className="text-lg sm:text-xl text-white/85 font-medium">{course.tagline}</p>
              <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">{course.shortDesc}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { icon: Clock, label: course.duration },
                  { icon: Users, label: "Expert Faculty" },
                  { icon: BookOpen, label: `${course.modules.length} Modules` },
                  { icon: Award, label: "Certificate" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center space-x-1.5 text-sm text-white/80">
                    <Icon className="w-4 h-4 text-white/60" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={callUrl} className="inline-flex items-center px-6 py-3 bg-white text-[#101F3D] rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all hover:bg-slate-50">
                  <Phone className="w-4 h-4 mr-2" /> Enroll Now — ₹999
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm shadow-lg hover:bg-[#20BA5A] transition-all">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Right — Pricing card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-[#101F3D] space-y-4">
              <div className="text-center space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Special Launch Price</p>
                <p className="text-sm line-through text-slate-400">₹{course.originalPrice.toLocaleString("en-IN")}</p>
                <p className="text-5xl font-extrabold text-[#101F3D]">₹{course.offerPrice}</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                  You Save ₹{course.savings.toLocaleString("en-IN")} 🎉
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4 space-y-2 text-sm text-slate-600">
                {["45 Hours of training", "45-Day course schedule", "Professional certificate", "Expert industry faculty", "Real-world projects"].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 pt-3 text-xs text-slate-500 text-center">
                <span className="font-semibold text-slate-700">Upcoming Batch:</span> {course.batchInfo}
              </div>
              <a href={callUrl} className={`w-full flex items-center justify-center py-3 rounded-xl text-white font-bold text-sm ${t.btn} transition-colors shadow-md`}>
                <Phone className="w-4 h-4 mr-2" /> Call: 80548 11313
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20BA5A] transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + WHO SHOULD ENROLL ── */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#101F3D] mb-4">Course Overview</h2>
            <p className="text-slate-600 leading-relaxed">{course.overview}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#101F3D] mb-4">Who Should Enroll</h2>
            <ul className="space-y-3">
              {course.whoShouldEnroll.map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${t.accent}`} />
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SYLLABUS ACCORDION ── */}
      <section className="py-14 border-b border-slate-100" style={{ backgroundColor: course.theme.bg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101F3D]">Complete Syllabus</h2>
            <p className="text-slate-500 mt-2 text-sm">{course.modules.length} modules · {course.duration}</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {course.modules.map((mod, i) => (
              <div key={i} className={`bg-white rounded-2xl border ${t.accordionBorder} overflow-hidden shadow-sm`}>
                <button
                  type="button"
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: course.theme.primary }}>
                      {i + 1}
                    </span>
                    <span className="font-semibold text-[#101F3D] text-sm sm:text-base">{mod.title}</span>
                  </div>
                  {openModule === i ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openModule === i ? "600px" : "0px" }}>
                  <ul className="px-6 pb-4 space-y-2 border-t border-slate-100 pt-3">
                    {mod.topics.map((topic) => (
                      <li key={topic} className="flex items-start space-x-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: course.theme.accent }} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101F3D]">Skills You Will Learn</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {course.skills.map((skill) => (
              <span key={skill} className={`px-4 py-2 rounded-full text-sm font-semibold ${t.tag}`}>{skill}</span>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="flex items-start space-x-3">
              <TrendingUp className={`w-5 h-5 mt-0.5 flex-shrink-0 ${t.accent}`} />
              <div>
                <h3 className="font-bold text-[#101F3D] mb-2">Learning Outcomes</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{course.outcomes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENROLLMENT FORM ── */}
      <section className="py-14 bg-[#101F3D]" id="enroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-bold border border-white/20 mb-4">
                  <Sparkles className="w-3 h-3 mr-1.5" /> Enroll Today
                </span>
                <h2 className="text-3xl font-bold">Start Your {course.title} Journey</h2>
                <p className="text-white/70 mt-3 text-sm leading-relaxed">
                  Fill in your details and our counsellor will get in touch within 24 hours to confirm your enrollment.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Clock, label: "Duration", sub: course.duration },
                  { icon: Star, label: "Special Offer", sub: `₹999 (was ₹25,000) — Limited seats` },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white/80" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{label}</p>
                      <p className="text-white/60 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Call / WhatsApp</p>
                    <a href={callUrl} className="text-[#25D366] text-sm font-bold hover:underline">80548 11313</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <EnquiryForm defaultCourse={course.title} source={`${course.title} Course Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#101F3D] text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {course.faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-sm text-[#101F3D] pr-4">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "400px" : "0px" }}>
                  <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED COURSES ── */}
      {related.length > 0 && (
        <section className="py-14 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#101F3D] mb-8 text-center">Related Professional Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c) => (
                <Link key={c.slug} href={c.route} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group">
                  <h3 className="font-bold text-[#101F3D] group-hover:text-[#2855E8] transition-colors mb-1">{c.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{c.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold" style={{ color: c.theme.primary }}>₹{c.offerPrice}</span>
                    <span className="text-xs text-slate-400">{c.duration}</span>
                  </div>
                  <div className="mt-4 flex items-center text-xs font-bold" style={{ color: c.theme.primary }}>
                    View Course <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
              <Link href="/corporate-training" className="bg-[#101F3D] rounded-2xl p-6 border border-slate-700 hover:border-slate-500 hover:shadow-md transition-all group">
                <h3 className="font-bold text-white group-hover:text-[#DCA43A] transition-colors mb-1">Corporate IFRS Training</h3>
                <p className="text-xs text-slate-400 mb-3">Customized financial workshops for teams</p>
                <div className="mt-4 flex items-center text-xs font-bold text-[#DCA43A]">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

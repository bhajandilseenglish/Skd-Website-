"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  PieChart,
  Table2,
  Building2,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Tag,
  Users,
  Award,
  Sparkles,
  Send,
  Loader2,
  TrendingUp,
} from "lucide-react";
import { professionalCoursesData } from "@/data/professionalCourses";
import { siteConfig } from "@/data/siteData";

const proCards = [
  {
    slug: "data-analytics",
    title: "Data Analytics",
    subtitle: "Turn Raw Data into Business Insights",
    desc: "Master the full analytics workflow — cleaning, EDA, KPI analysis, and executive dashboards using Excel and BI tools.",
    icon: BarChart3,
    tags: ["EDA", "Visualization", "KPI Analysis", "Reporting"],
    heroBg: "from-[#1E3A8A] to-[#1D4ED8]",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    tagCls: "bg-blue-50 text-blue-700 border border-blue-200",
    btnCls: "bg-[#1D4ED8] hover:bg-[#1E3A8A]",
    priceCls: "text-blue-700",
    href: "/corporate-training/data-analytics",
  },
  {
    slug: "power-bi",
    title: "Microsoft Power BI",
    subtitle: "Build Interactive Reports & Dashboards",
    desc: "Connect data sources, transform with Power Query, write DAX measures, and publish stunning dashboards to Power BI Service.",
    icon: PieChart,
    tags: ["DAX", "Power Query", "Dashboards", "BI Service"],
    heroBg: "from-[#92400E] to-[#D97706]",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    tagCls: "bg-amber-50 text-amber-700 border border-amber-200",
    btnCls: "bg-[#D97706] hover:bg-[#92400E]",
    priceCls: "text-amber-700",
    href: "/corporate-training/power-bi",
  },
  {
    slug: "advanced-excel",
    title: "Advanced Excel",
    subtitle: "Master Excel from Basics to Dashboards",
    desc: "XLOOKUP, INDEX-MATCH, Pivot Tables, Power Query, and professional dashboard design — the complete Excel skillset.",
    icon: Table2,
    tags: ["XLOOKUP", "Pivot Tables", "Power Query", "Dashboards"],
    heroBg: "from-[#064E3B] to-[#059669]",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    tagCls: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    btnCls: "bg-[#059669] hover:bg-[#064E3B]",
    priceCls: "text-emerald-700",
    href: "/corporate-training/advanced-excel",
  },
];

const ifrsModules = [
  { code: "CORP-101", name: "IFRS & Ind AS Practical Implementation", desc: "Revenue recognition (IFRS 15), leases (IFRS 16), and financial instruments (IFRS 9)." },
  { code: "CORP-102", name: "Advanced Financial Modelling & Valuation in Excel", desc: "Dynamic 3-statement models, DCF valuation, sensitivity analysis, and dashboard building." },
  { code: "CORP-103", name: "Statutory Audit, Internal Controls & Forensic Screening", desc: "COSO frameworks, fraud risk indicators, and computer-assisted audit techniques (CAATs)." },
  { code: "CORP-104", name: "Corporate Tax, GST & Transfer Pricing", desc: "Direct tax assessments, transfer pricing documentation, and GST audit readiness." },
];

type FormState = {
  name: string; company: string; email: string; phone: string;
  course: string; participants: string; mode: string; message: string;
};

export default function CorporateTrainingClient() {
  const [form, setForm] = useState<FormState>({
    name: "", company: "", email: "", phone: "",
    course: "", participants: "", mode: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callUrl = `tel:+918054811313`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to inquire about Corporate Training programs at SKD Group.")}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          mobile: form.phone,
          email: form.email,
          course: form.course || "Corporate Training Inquiry",
          message: `Company: ${form.company} | Participants: ${form.participants} | Mode: ${form.mode} | ${form.message}`,
          source: "Corporate Training Inquiry Form",
        }),
      });
      if (!res.ok) throw new Error("Submission failed. Please try again.");
      setSuccess(true);
      setForm({ name: "", company: "", email: "", phone: "", course: "", participants: "", mode: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#070E1A] to-[#101F3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white/80 mb-6">
            <Building2 className="w-3.5 h-3.5 mr-1.5" /> Enterprise &amp; Professional Training
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
            Corporate Training &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCA43A] to-[#F59E0B]">
              Professional Skills
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Upskill your career and empower your workforce with practical, industry-focused training in
            Data Analytics, Power BI, Advanced Excel, and customized corporate financial workshops.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { icon: Clock, label: "45 Hours Per Course" },
              { icon: Tag, label: "₹999 Launch Offer" },
              { icon: Users, label: "Industry Expert Faculty" },
              { icon: Award, label: "Certificate Provided" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white/80">
                <Icon className="w-3.5 h-3.5 mr-1.5 text-[#DCA43A]" /> {label}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="#courses" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2855E8] to-[#467FFF] text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all">
              <Sparkles className="w-4 h-4 mr-2 text-[#DCA43A]" /> Explore Courses
            </a>
            <a href="#corporate-inquiry" className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/25 text-white rounded-xl font-bold text-sm hover:bg-white/15 transition-all">
              <Building2 className="w-4 h-4 mr-2" /> Corporate Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* ── 3 PROFESSIONAL COURSE CARDS ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101F3D]">Professional Skill Courses</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Practical, job-ready courses designed for finance professionals, business analysts, and career changers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proCards.map((card) => {
              const Icon = card.icon;
              const course = professionalCoursesData.find((c) => c.slug === card.slug);
              return (
                <div key={card.slug} className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className={`bg-gradient-to-br ${card.heroBg} p-6 relative`}>
                    <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-red-500 text-white text-[10px] font-bold tracking-wide">
                      LIMITED OFFER
                    </span>
                    <h3 className="text-xl font-extrabold text-white">{card.title}</h3>
                    <p className="text-white/75 text-sm mt-1">{card.subtitle}</p>
                  </div>
                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span key={tag} className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${card.tagCls}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 mr-1.5" /> {course?.duration ?? "45 Hours | 45 Days"}
                    </div>
                    <div className="flex items-baseline space-x-2 pt-1">
                      <span className="text-slate-400 line-through text-sm">₹25,000</span>
                      <span className={`text-3xl font-extrabold ${card.priceCls}`}>₹999</span>
                      <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full border border-green-200">Save ₹24,001</span>
                    </div>
                    <div className="text-xs text-slate-400">Upcoming Batch: Contact for Schedule</div>
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 mt-auto">
                      <Link href={card.href} className="flex-1 flex items-center justify-center py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-[#101F3D] hover:bg-slate-50 transition-colors">
                        View Course <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <a href={callUrl} className={`flex-1 flex items-center justify-center py-2.5 rounded-xl text-white text-sm font-bold ${card.btnCls} transition-colors`}>
                        <Phone className="w-3.5 h-3.5 mr-1.5" /> Enroll Now
                      </a>
                    </div>
                    <a href="#corporate-inquiry" className="text-xs text-center text-slate-400 hover:text-slate-600 transition-colors underline underline-offset-2">
                      Corporate / Group Inquiry
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IFRS CORPORATE TRAINING ── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20 mb-4">
                <Building2 className="w-3 h-3 mr-1.5" /> Enterprise Program
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F3D] mb-4">
                Customized IFRS &amp; Financial Workshops
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Bespoke, outcome-focused learning programs for corporations, auditing firms, and financial institutions.
                Our Corporate Learning division delivers workshops tailored to your team&apos;s real balance sheets and ERP data.
              </p>
              <div className="space-y-3">
                {["Customized curriculum for your industry", "On-site or live virtual delivery", "Post-training efficacy evaluations", "Diagnostic skill-gap assessments"].map((item) => (
                  <div key={item} className="flex items-center space-x-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2855E8] flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#corporate-inquiry" className="inline-flex items-center px-5 py-2.5 bg-[#101F3D] text-white rounded-xl font-bold text-sm hover:bg-[#1D3766] transition-colors">
                  <Building2 className="w-4 h-4 mr-2" /> Request Corporate Training
                </a>
                <a href={callUrl} className="inline-flex items-center px-5 py-2.5 border border-[#2855E8]/30 text-[#2855E8] rounded-xl font-bold text-sm hover:bg-[#EFF6FF] transition-colors">
                  <Phone className="w-4 h-4 mr-2" /> Call: 80548 11313
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Core Enterprise Modules</h3>
              {ifrsModules.map((mod) => (
                <div key={mod.code} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-start space-x-3">
                    <span className="px-2 py-0.5 rounded-md bg-[#101F3D] text-white text-[10px] font-bold flex-shrink-0 mt-0.5">{mod.code}</span>
                    <div>
                      <p className="font-semibold text-sm text-[#101F3D]">{mod.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{mod.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORPORATE INQUIRY FORM ── */}
      <section className="py-16 bg-[#070E1A]" id="corporate-inquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 text-white space-y-6">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-bold border border-white/20 mb-4">
                  <Building2 className="w-3 h-3 mr-1.5" /> For Organizations &amp; Teams
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold">Empower Your Team with Industry-Ready Skills</h2>
                <p className="text-white/60 mt-3 text-sm leading-relaxed">
                  Customized professional training programs designed for organizations looking to strengthen analytics,
                  reporting, Excel, and business intelligence capabilities.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Users, label: "Group Training", sub: "Customized for 5 to 300+ participants" },
                  { icon: Building2, label: "On-Site Delivery", sub: "We come to your corporate office" },
                  { icon: Award, label: "Certification", sub: "SKD-issued certificates on completion" },
                  { icon: TrendingUp, label: "ROI-Focused", sub: "Measurable skills uplift for your teams" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{label}</p>
                      <p className="text-white/50 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <p className="text-xs text-white/40 mb-2">Or contact us directly:</p>
                <a href={callUrl} className="flex items-center text-[#25D366] font-bold hover:underline text-sm">
                  <Phone className="w-4 h-4 mr-1.5" /> 80548 11313
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#25D366] font-bold hover:underline text-sm mt-2">
                  <MessageCircle className="w-4 h-4 mr-1.5" /> WhatsApp Inquiry
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              {success ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101F3D]">Inquiry Received!</h3>
                  <p className="text-slate-500 text-sm">Our corporate training team will contact you within 24 business hours.</p>
                  <button onClick={() => setSuccess(false)} className="mt-4 text-sm text-[#2855E8] hover:underline font-semibold">
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#101F3D] mb-2">Request Corporate Training</h3>
                  {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#101F3D] focus:outline-none focus:ring-2 focus:ring-[#2855E8]/30 focus:border-[#2855E8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Company / Organization *</label>
                      <input name="company" value={form.company} onChange={handleChange} required placeholder="Company name" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#101F3D] focus:outline-none focus:ring-2 focus:ring-[#2855E8]/30 focus:border-[#2855E8]" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Business Email *</label>
                      <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@company.com" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#101F3D] focus:outline-none focus:ring-2 focus:ring-[#2855E8]/30 focus:border-[#2855E8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Mobile Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#101F3D] focus:outline-none focus:ring-2 focus:ring-[#2855E8]/30 focus:border-[#2855E8]" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Interested Course</label>
                      <select name="course" value={form.course} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#101F3D] focus:outline-none focus:ring-2 focus:ring-[#2855E8]/30 focus:border-[#2855E8] bg-white">
                        <option value="">Select a course</option>
                        <option>Data Analytics</option>
                        <option>Microsoft Power BI</option>
                        <option>Advanced Excel</option>
                        <option>Customized IFRS &amp; Financial Workshops</option>
                        <option>Multiple Courses</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Number of Participants</label>
                      <select name="participants" value={form.participants} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#101F3D] focus:outline-none focus:ring-2 focus:ring-[#2855E8]/30 focus:border-[#2855E8] bg-white">
                        <option value="">Select range</option>
                        <option>1–5</option>
                        <option>6–15</option>
                        <option>16–30</option>
                        <option>30+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Preferred Training Mode</label>
                    <select name="mode" value={form.mode} onChange={handleChange} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#101F3D] focus:outline-none focus:ring-2 focus:ring-[#2855E8]/30 focus:border-[#2855E8] bg-white">
                      <option value="">Select mode</option>
                      <option>Online</option>
                      <option>Offline / On-Site</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Requirements / Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your training needs, timeline, or specific topics..." className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#101F3D] focus:outline-none focus:ring-2 focus:ring-[#2855E8]/30 focus:border-[#2855E8] resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-[#2855E8] to-[#467FFF] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-70">
                    {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                    {loading ? "Sending..." : "Submit Corporate Inquiry"}
                  </button>
                  <p className="text-xs text-slate-400 text-center">We respond to all corporate inquiries within 24 business hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SKD ── */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101F3D]">Why Train with SKD Group</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Expert Faculty", desc: "Learn from ACCA-qualified and industry-certified trainers with real corporate experience.", color: "text-[#2855E8]", bg: "bg-[#EFF6FF]" },
              { icon: Sparkles, title: "Practical Curriculum", desc: "Every module uses real business datasets, live tools, and hands-on projects.", color: "text-emerald-600", bg: "bg-emerald-50" },
              { icon: Building2, title: "Flexible Delivery", desc: "Classroom, live online, hybrid, or on-site at your corporate office — we adapt to your schedule.", color: "text-amber-600", bg: "bg-amber-50" },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-bold text-[#101F3D] mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-2xl">
        <a href={callUrl} className="flex-1 flex items-center justify-center py-3 bg-[#101F3D] text-white rounded-xl font-bold text-sm">
          <Phone className="w-4 h-4 mr-1.5" /> Call Now
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm">
          <MessageCircle className="w-4 h-4 mr-1.5" /> WhatsApp
        </a>
      </div>
    </>
  );
}

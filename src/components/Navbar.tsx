"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const courseLinks = [
  {
    name: "ACCA",
    href: "/acca-coaching-chandigarh",
    badge: "Silver ALP",
    desc: "Global Chartered Accountant",
  },
  {
    name: "CA Foundation",
    href: "/ca-foundation-coaching-chandigarh",
    badge: "ICAI",
    desc: "4-subject entry foundation",
  },
  {
    name: "CA Intermediate",
    href: "/ca-intermediate-coaching-chandigarh",
    badge: "Both Groups",
    desc: "Corporate accounting & taxation",
  },
  {
    name: "CA Final",
    href: "/ca-final-coaching-chandigarh",
    badge: "Advanced",
    desc: "Final frontier mastery",
  },
  {
    name: "US CMA",
    href: "/us-cma-coaching",
    badge: "6-9 Months",
    desc: "Global FP&A credential",
  },
  {
    name: "US CPA",
    href: "/us-cpa-coaching",
    badge: "AICPA USA",
    desc: "Gold standard US accounting",
  },
];

const corporateTrainingTracks = [
  {
    name: "Data Analytics",
    href: "/corporate-training/data-analytics",
    badge: "₹999",
    desc: "Raw data to business insights",
  },
  {
    name: "Microsoft Power BI",
    href: "/corporate-training/power-bi",
    badge: "₹999",
    desc: "Interactive reports & dashboards",
  },
  {
    name: "Advanced Excel",
    href: "/corporate-training/advanced-excel",
    badge: "₹999",
    desc: "Excel from basics to dashboards",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Results", href: "/results" },
  { label: "Placements", href: "/placements" },
  { label: "Faculty", href: "/faculty" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isCoursesActive =
    pathname.includes("coaching") ||
    pathname === "/courses" ||
    pathname.includes("corporate-training");

  return (
    <>
      {/* ── Top contact bar ─────────────────────────────────────────── */}
      <div className="hidden md:block bg-[#172238] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6 text-[12px] text-white/55">
            <span className="flex items-center gap-1.5 text-[#D8C6AA] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8C6AA] animate-pulse" />
              Approved ACCA Silver Learning Partner
            </span>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              <a
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                className="hover:text-white/90 transition-colors"
              >
                {siteConfig.contact.primaryPhone}
              </a>
              <span className="text-white/25">/</span>
              <a
                href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                className="hover:text-white/90 transition-colors"
              >
                {siteConfig.contact.secondaryPhone}
              </a>
            </div>
            <span className="text-white/20">|</span>
            <span className="text-white/40">Godrej Eternia, Phase 1, Chandigarh</span>
          </div>
          <Link
            href="/admin"
            className="text-white/30 hover:text-white/60 text-[11px] transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>

      {/* ── Main navigation ─────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.07)] py-2.5"
            : "bg-[#F6F4EF]/95 backdrop-blur-md py-3.5"
        } border-b border-black/6`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 sm:gap-3">
            <div className="relative w-28 h-10 sm:w-36 sm:h-12">
              <Image
                src="/assets/brand/logo.png"
                alt="SKD Group of Institutions"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 112px, 144px"
              />
            </div>
            {/* ACCA accreditation logos */}
            <div className="flex items-center gap-2 pl-2.5 sm:pl-3 border-l border-black/10">
              <div className="relative w-24 h-8 sm:w-28 sm:h-9 lg:w-32 lg:h-10">
                <Image
                  src="/assets/images/acca-silver-learning-partner.png"
                  alt="ACCA Silver Learning Partner"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                />
              </div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11">
                <Image
                  src="/assets/images/acca-cbe-centre.png"
                  alt="ACCA Licensed CBE Centre"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 36px, 44px"
                />
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-[13.5px] font-medium text-[#172238]/75">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 ${
                  isActive(link.href)
                    ? "text-[#3659D9] font-semibold bg-[#3659D9]/8"
                    : "hover:text-[#172238] hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Courses dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                className={`px-3 py-1.5 rounded-lg inline-flex items-center gap-1 transition-all duration-150 ${
                  isCoursesActive
                    ? "text-[#3659D9] font-semibold bg-[#3659D9]/8"
                    : "hover:text-[#172238] hover:bg-black/5"
                }`}
              >
                Courses
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown panel */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[560px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/6 p-5 z-50">
                  <p className="text-[10px] font-bold text-[#767C88] uppercase tracking-widest mb-3">
                    Professional Qualifications
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {courseLinks.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#F6F4EF] transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-[13px] font-semibold text-[#172238] group-hover:text-[#3659D9] transition-colors">
                              {c.name}
                            </span>
                            <span className="text-[10px] font-bold text-[#3659D9] bg-[#3659D9]/8 px-1.5 py-0.5 rounded-full ml-1 flex-shrink-0">
                              {c.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#767C88] mt-0.5 truncate">{c.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Corporate Training Section with nested skill tracks */}
                  <div className="mt-4 p-3.5 rounded-xl bg-[#F6F4EF]/80 border border-black/6">
                    <Link
                      href="/corporate-training"
                      className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-black/8 group"
                    >
                      <div>
                        <span className="text-[13px] font-bold text-[#172238] group-hover:text-[#3659D9] transition-colors">
                          Corporate Training
                        </span>
                        <p className="text-[11px] text-[#767C88]">Customized IFRS &amp; practical skill workshops</p>
                      </div>
                      <span className="text-[10px] font-bold text-[#3659D9] bg-[#3659D9]/10 px-2 py-0.5 rounded-full">
                        Enterprise
                      </span>
                    </Link>
                    <div className="grid grid-cols-3 gap-1.5">
                      {corporateTrainingTracks.map((track) => (
                        <Link
                          key={track.href}
                          href={track.href}
                          className="p-2 rounded-lg bg-white hover:bg-[#EEF2FF] border border-black/5 transition-colors group"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[12px] font-semibold text-[#172238] group-hover:text-[#3659D9] truncate">
                              {track.name}
                            </span>
                            <span className="text-[9.5px] font-bold text-[#3659D9] bg-[#3659D9]/8 px-1.5 py-0.5 rounded-full shrink-0">
                              {track.badge}
                            </span>
                          </div>
                          <p className="text-[10.5px] text-[#767C88] mt-0.5 truncate">{track.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-black/6">
                    <Link
                      href="/courses"
                      className="text-[12px] font-semibold text-[#3659D9] flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      View All Programs <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="text-[13px] font-medium text-[#172238]/60 hover:text-[#172238] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteConfig.contact.primaryPhone}
            </a>
            <Link
              href="/admissions"
              className="px-5 py-2.5 bg-[#172238] hover:bg-[#3659D9] text-white text-[13px] font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(54,89,217,0.3)]"
            >
              Free Counselling
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#172238]/70 hover:bg-black/6 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── Mobile menu ─────────────────────────────────────────────── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-black/6 bg-white max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[#3659D9]/8 text-[#3659D9] font-semibold"
                      : "text-[#172238]/75 hover:bg-[#F6F4EF] hover:text-[#172238]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile courses */}
              <div className="pt-2 border-t border-black/6">
                <p className="text-[10px] font-bold text-[#767C88] uppercase tracking-widest px-4 py-2">
                  Qualifications
                </p>
                {courseLinks.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-[#172238]/75 hover:bg-[#F6F4EF] hover:text-[#172238] transition-colors"
                  >
                    <span className="font-medium">{c.name}</span>
                    <span className="text-[10px] font-bold text-[#3659D9] bg-[#3659D9]/8 px-2 py-0.5 rounded-full">
                      {c.badge}
                    </span>
                  </Link>
                ))}

                {/* Mobile Corporate Training + nested tracks */}
                <div className="mt-2 mx-2 p-3 rounded-xl bg-[#F6F4EF]/80 border border-black/6 space-y-1">
                  <Link
                    href="/corporate-training"
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg text-sm font-bold text-[#172238]"
                  >
                    <span>Corporate Training</span>
                    <span className="text-[10px] font-bold text-[#3659D9] bg-[#3659D9]/10 px-2 py-0.5 rounded-full">
                      Enterprise
                    </span>
                  </Link>
                  {corporateTrainingTracks.map((track) => (
                    <Link
                      key={track.href}
                      href={track.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-[#172238]/80 bg-white hover:bg-[#EEF2FF] transition-colors"
                    >
                      <span className="font-medium">{track.name}</span>
                      <span className="text-[10px] font-bold text-[#3659D9] bg-[#3659D9]/8 px-2 py-0.5 rounded-full">
                        {track.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTAs */}
              <div className="pt-3 border-t border-black/6 space-y-2">
                <Link
                  href="/admissions"
                  className="block w-full text-center py-3 bg-[#172238] text-white font-semibold text-sm rounded-xl hover:bg-[#3659D9] transition-colors"
                >
                  Book Free Counselling
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-[#F6F4EF] text-[#172238] font-medium text-xs rounded-xl"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Us
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366] text-white font-medium text-xs rounded-xl"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

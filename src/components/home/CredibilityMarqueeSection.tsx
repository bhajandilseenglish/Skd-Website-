"use client";

import React from "react";
import { Award, TrendingUp, Users, Briefcase, ShieldCheck, Sparkles } from "lucide-react";
import CountUp from "@/components/motion/CountUp";
import MarqueePartners from "@/components/motion/MarqueePartners";

export default function CredibilityMarqueeSection() {
  const metrics = [
    {
      icon: Award,
      valueNumber: null,
      customValue: "Silver Partner",
      title: "Approved ACCA Status",
      desc: "Audited & officially certified learning institution",
      isAccreditation: true,
    },
    {
      icon: TrendingUp,
      valueNumber: 85,
      suffix: "%+",
      title: "Global Pass Rate",
      desc: "Consistently outperforms worldwide exam averages",
      isAccreditation: false,
    },
    {
      icon: Users,
      valueNumber: 100,
      suffix: "%",
      title: "Qualified Mentors",
      desc: "Direct guidance by practising CAs, ACCAs & CMAs",
      isAccreditation: false,
    },
    {
      icon: Briefcase,
      valueNumber: 100,
      suffix: "% Support",
      title: "Placement Assistance",
      desc: "Mock interviews, resume clinics & Big 4 drives",
      isAccreditation: false,
    },
  ];

  return (
    <section id="credibility-section" className="relative overflow-hidden">
      {/* ── PART 1: ACHIEVEMENT SHOWCASE (WARM IVORY) ───────────────────────── */}
      <div className="bg-[#F6F4EF] py-16 sm:py-22 border-b border-[#172238]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {metrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-[#172238]/10 shadow-[0_8px_30px_rgba(23,34,56,0.04)] hover:shadow-[0_20px_44px_rgba(23,34,56,0.09)] hover:border-[#3659D9]/35 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full group animate-fade-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div>
                    {/* Top row: Icon + Verified Badge */}
                    <div className="flex items-center justify-between mb-7">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                          item.isAccreditation
                            ? "bg-[#D8C6AA]/25 border border-[#D8C6AA]/60 text-[#9A7024]"
                            : "bg-[#3659D9]/8 border border-[#3659D9]/15 text-[#3659D9]"
                        }`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 text-[10.5px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                          item.isAccreditation
                            ? "bg-[#D8C6AA]/20 text-[#8A621E] border-[#D8C6AA]/50"
                            : "bg-[#172238]/5 text-[#172238]/70 border-[#172238]/10"
                        }`}
                      >
                        <ShieldCheck className="w-3 h-3" />
                        Verified
                      </span>
                    </div>

                    {/* Statistic */}
                    <div className="mb-5 font-[family-name:var(--font-heading)]">
                      {item.valueNumber !== null ? (
                        <div className="text-4xl sm:text-[42px] font-extrabold text-[#172238] tracking-tight leading-none">
                          <CountUp end={item.valueNumber} suffix={item.suffix} />
                        </div>
                      ) : (
                        <div className="text-3xl sm:text-[32px] font-extrabold text-[#9A7024] tracking-tight leading-tight">
                          {item.customValue}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title & Description separated by subtle rule */}
                  <div className="pt-5 border-t border-[#172238]/8">
                    <h3 className="text-[15px] font-bold text-[#172238] tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#767C88] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── PART 2: PLACEMENT SHOWCASE (DEEP NAVY) ──────────────────────────── */}
      <div className="bg-[#172238] py-16 sm:py-20 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/8 text-[#D8C6AA] rounded-full text-xs font-bold border border-[#D8C6AA]/25 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D8C6AA]" />
              <span>Big 4 &amp; Global Career Pathways</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-heading)] leading-tight">
              Our Students are Hired by Premier Financial Hubs
            </h2>

            <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed">
              Top multinational accounting firms and investment corporations actively recruit SKD-trained professionals.
            </p>
          </div>

          <MarqueePartners dark={true} />
        </div>
      </div>
    </section>
  );
}

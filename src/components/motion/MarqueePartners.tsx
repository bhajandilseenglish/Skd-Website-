"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";

interface MarqueePartnersProps {
  dark?: boolean;
}

export default function MarqueePartners({ dark = false }: MarqueePartnersProps) {
  const partners = siteConfig.hiringPartners;
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div
      tabIndex={0}
      aria-label="Hiring partner companies"
      className="relative w-full overflow-hidden py-4 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3659D9] rounded-2xl"
    >
      {/* Subtle edge fades matched cleanly to section background */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-10 sm:w-20 z-10 pointer-events-none ${
          dark
            ? "bg-gradient-to-r from-[#172238] to-transparent"
            : "bg-gradient-to-r from-[#F6F4EF] to-transparent"
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-10 sm:w-20 z-10 pointer-events-none ${
          dark
            ? "bg-gradient-to-l from-[#172238] to-transparent"
            : "bg-gradient-to-l from-[#F6F4EF] to-transparent"
        }`}
      />

      <div className="animate-marquee flex items-center gap-5 sm:gap-7 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className={`flex items-center justify-center gap-3.5 px-6 py-4 rounded-2xl border transition-all duration-300 shrink-0 ${
              dark
                ? "bg-white border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
                : "bg-white border-[#172238]/10 shadow-sm hover:-translate-y-0.5 hover:border-[#3659D9]/35 hover:shadow-md"
            }`}
          >
            <div className="relative w-24 h-8 sm:w-28 sm:h-9 shrink-0">
              <Image
                src={partner.logo}
                alt={`${partner.name} recruiter`}
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
            <span className="text-xs sm:text-[13px] font-semibold text-[#172238]/80 whitespace-nowrap border-l border-[#172238]/10 pl-3.5">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

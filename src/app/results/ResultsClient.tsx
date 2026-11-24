"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  Play,
  Pause,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ZoomIn,
  CheckCircle2,
  Trophy,
} from "lucide-react";

interface ResultsClientProps {
  resultsData: Array<{
    id: string;
    qualification: string;
    examSession: string;
    passPercentage: string;
    highlight: string;
    topScorers: Array<{ paper: string; score: string }>;
  }>;
}

const rankers = [
  {
    name: "Arshpreet Kaur",
    title: "ACCA Merit Ranker",
    paper: "Financial Accounting (FA/F3)",
    score: "78%",
    status: "Cleared in 1st Attempt",
    image: "/assets/results/Enhanced_Photo_06.jpg",
    quote: "Individual attention and continuous CBE mock practice at SKD helped me achieve 78% in Financial Accounting on my very first attempt.",
  },
  {
    name: "Hitesh Goyal",
    title: "ACCA Merit Ranker",
    paper: "Corporate and Business Law (LW/F4)",
    score: "76%",
    status: "Cleared in 1st Attempt",
    image: "/assets/results/Enhanced_Photo_09.jpg",
    quote: "Comprehensive case study discussions and faculty mentorship at Chandigarh campus made all the difference in cracking Corporate & Business Law.",
  },
];

const scorecards = [
  { src: "/assets/results/124f5707-11e4-41ed-9e3c-dfa29fae004e.png", title: "Official ACCA Exam Pass Confirmation — Applied Skills" },
  { src: "/assets/results/12d5089e-a65b-45a2-881c-3e7ab19cdccb.png", title: "ACCA Official Transcript & Result Notification" },
  { src: "/assets/results/187e7fbd-dbbf-4fb9-ad04-8b804b08cd4a.png", title: "Verified Student Examination Result Card" },
  { src: "/assets/results/21581df1-bbb3-4253-9c19-06955675ad67.png", title: "Official Examination Score Statement" },
  { src: "/assets/results/3ff74f5f-3433-46d9-803f-7c827451580a.png", title: "ACCA Applied Knowledge CBE Clearance Sheet" },
  { src: "/assets/results/42e1ca98-e30f-471e-beee-a9013f84468a.png", title: "Student Pass Certificate & Result Verification" },
  { src: "/assets/results/4560808a-676d-4f33-82b7-3d487998f1d1.png", title: "ACCA Global Examination Clearance Record" },
  { src: "/assets/results/6ce7a758-7957-4ae6-aafb-986a2b1848ef.png", title: "Official Pass Slip & Marks Breakdown" },
  { src: "/assets/results/9d05a731-69ed-4510-9791-8188adb436c0.png", title: "ACCA Professional Qualification Score Confirmation" },
  { src: "/assets/results/c67e9637-d098-402c-8453-71a55c6df85a.png", title: "Certified Student Pass Report & Scorecard" },
];

const celebrationVideos = [
  {
    src: "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM.mp4",
    title: "Batch Result Day Celebration — SKD Chandigarh",
    subtitle: "Students celebrating 100% batch clearance in ACCA CBE exams",
  },
  {
    src: "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM1.mp4",
    title: "Rankers Felicitation & Trophy Ceremony",
    subtitle: "Honoring merit holders and top scorers at Godrej Eternia campus",
  },
  {
    src: "/assets/videos/results/WhatsApp Video 2026-11-19 at 4.13.06 PM.mp4",
    title: "Faculty & Student Success Celebration",
    subtitle: "Recognizing high achievers in Corporate & Business Law and Financial Accounting",
  },
];

export default function ResultsClient({ resultsData }: ResultsClientProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoToggle = (src: string, index: number) => {
    if (playingVideo === src) {
      videoRefs.current[index]?.pause();
      setPlayingVideo(null);
    } else {
      videoRefs.current.forEach((vid, i) => {
        if (i !== index && vid) {
          vid.pause();
        }
      });
      videoRefs.current[index]?.play();
      setPlayingVideo(src);
    }
  };

  return (
    <div className="space-y-20">
      {/* 1. Merit Rankers Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#D8C6AA]/25 text-[#172238] border border-[#D8C6AA]/50 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#3659D9]" />
            <span>Merit Rankers & Top Achievers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172238] tracking-tight">
            Proof in Every Percentage
          </h2>
          <p className="text-sm sm:text-base text-[#767C88] mt-2">
            Meet the students who turned dedicated classroom preparation at SKD into nationwide standout marks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rankers.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-[#172238]/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row group"
            >
              <div className="relative md:w-5/12 h-72 md:h-auto min-h-[260px] bg-[#172238] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172238]/80 via-transparent to-transparent md:hidden" />
                <div className="absolute top-3 left-3 bg-[#3659D9] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Award className="w-3 h-3 text-[#D8C6AA]" />
                  <span>{r.score}</span>
                </div>
              </div>

              <div className="p-7 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#3659D9] uppercase tracking-wider bg-[#3659D9]/10 px-2.5 py-0.5 rounded-full">
                      {r.title}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      {r.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#172238]">{r.name}</h3>
                  <p className="text-xs font-semibold text-[#3659D9] mt-0.5 mb-3">{r.paper}</p>
                  <p className="text-xs text-[#767C88] leading-relaxed italic">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#172238]/10 flex items-center justify-between text-xs text-[#767C88]">
                  <span>Scorecard Verified</span>
                  <span className="font-extrabold text-2xl text-[#172238]">{r.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Official Student Scorecard Proofs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#172238] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3659D9]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#D8C6AA] mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Examination Records</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Official Examination Scorecards
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
                Click any official result document below to zoom in and verify paper marks, student names, and passing confirmations.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              10 Verified Scorecards
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 relative z-10">
            {scorecards.map((card, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 hover:border-[#3659D9] transition-all aspect-[3/4] flex flex-col text-left focus:outline-none focus:ring-2 focus:ring-[#3659D9]"
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all" />
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-[10px] text-white font-semibold line-clamp-2 leading-tight">
                    {card.title}
                  </p>
                  <span className="text-[9px] text-[#D8C6AA] font-mono mt-1 block">
                    Click to inspect
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Celebration & Felicitation Videos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#3659D9]/10 text-[#3659D9] rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3659D9]" />
            <span>Campus Celebrations</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#172238]">
            Celebrations Behind the Success
          </h2>
          <p className="text-sm text-[#767C88] mt-2">
            Watch real moments from our Chandigarh campus on result announcement days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {celebrationVideos.map((vid, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#172238]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-video bg-black">
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={vid.src}
                  className="w-full h-full object-cover"
                  controls={playingVideo === vid.src}
                  playsInline
                  onEnded={() => setPlayingVideo(null)}
                />
                {playingVideo !== vid.src && (
                  <button
                    type="button"
                    onClick={() => handleVideoToggle(vid.src, idx)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group"
                    aria-label={`Play celebration video: ${vid.title}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/95 text-[#3659D9] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </button>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#172238] mb-1">{vid.title}</h3>
                  <p className="text-xs text-[#767C88]">{vid.subtitle}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Real Campus Footage • Chandigarh</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Detailed Exam Session Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172238]">
            Batch-by-Batch Exam Records
          </h2>
          <p className="text-xs sm:text-sm text-[#767C88] mt-2">
            Clearance statistics from the most recent global testing windows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resultsData.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-3xl border border-[#172238]/10 p-8 shadow-sm hover:border-[#3659D9]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-[#3659D9] bg-[#3659D9]/10 px-3 py-1 rounded-full">
                    {res.examSession}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {res.passPercentage} Pass Rate
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#172238] mb-2">{res.qualification}</h3>
                <p className="text-xs sm:text-sm text-[#767C88] leading-relaxed mb-6">
                  {res.highlight}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#172238]/10">
                  <p className="text-xs font-bold text-[#172238] uppercase tracking-wider">
                    Top Paper Scorers:
                  </p>
                  {res.topScorers.map((scorer, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-xs py-1.5 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-[#172238] font-medium">{scorer.paper}</span>
                      <span className="font-bold text-[#3659D9]">{scorer.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#172238]/10 flex items-center text-[11px] text-[#767C88]">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600 shrink-0" />
                <span>Verified institutional examination record</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Scorecards */}
      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#D8C6AA] transition-colors focus:outline-none"
              aria-label="Close scorecard viewer"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="relative w-full max-h-[75vh] h-[75vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-white/20">
              <Image
                src={scorecards[lightboxIdx].src}
                alt={scorecards[lightboxIdx].title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-white text-sm font-semibold">{scorecards[lightboxIdx].title}</p>
              <p className="text-xs text-[#D8C6AA] mt-1 font-mono">
                Verified Document {lightboxIdx + 1} of {scorecards.length}
              </p>
            </div>

            {/* Prev / Next controls */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((lightboxIdx - 1 + scorecards.length) % scorecards.length);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#3659D9] transition-colors"
              aria-label="Previous scorecard"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((lightboxIdx + 1) % scorecards.length);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#3659D9] transition-colors"
              aria-label="Next scorecard"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

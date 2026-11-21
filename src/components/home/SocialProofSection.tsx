"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  TouchEvent,
} from "react";
import Image from "next/image";
import { Play, Pause, X, ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const accaVideos = [
  { src: "/assets/videos/acca-testimonials/Abhiraj Bakshi.mp4", name: "Abhiraj Bakshi", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Anahita Singh.mp4", name: "Anahita Singh", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Arshpreet Kaur.mp4", name: "Arshpreet Kaur", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Harsimar Kaur.mp4", name: "Harsimar Kaur", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Jasmine Kaur.mp4", name: "Jasmine Kaur", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/pranjal.mp4", name: "Pranjal", course: "ACCA Student" },
];

const reviewImages = [
  "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.23 PM (2).jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM (1).jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.33 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.23.54 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.32 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.33 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.34 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.36 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.00 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.01 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.33.43 PM.jpeg",
];

const resultImages = [
  "/assets/results/Enhanced_Photo_01.jpg",
  "/assets/results/Enhanced_Photo_02.jpg",
  "/assets/results/Enhanced_Photo_03.jpg",
  "/assets/results/Enhanced_Photo_04.jpg",
  "/assets/results/Enhanced_Photo_05.jpg",
  "/assets/results/Enhanced_Photo_06.jpg",
  "/assets/results/Enhanced_Photo_07.jpg",
  "/assets/results/Enhanced_Photo_08.jpg",
  "/assets/results/Enhanced_Photo_09.jpg",
  "/assets/results/Enhanced_Photo_10.jpg",
  "/assets/results/Enhanced_Photo_11.jpg",
  "/assets/results/Enhanced_Photo_12.jpg",
];

const classroomImages = [
  "/assets/classroom/1.png",
  "/assets/classroom/2.png",
  "/assets/classroom/3.png",
  "/assets/classroom/4.png",
  "/assets/classroom/5.png",
  "/assets/classroom/6.png",
  "/assets/seminar/Enhanced_Photo_01.jpg",
  "/assets/seminar/Enhanced_Photo_02.jpg",
  "/assets/seminar/Enhanced_Photo_03.jpg",
  "/assets/seminar/Enhanced_Photo_04.jpg",
  "/assets/seminar/Enhanced_Photo_05.jpg",
  "/assets/seminar/Enhanced_Photo_06.jpg",
];

const resultVideos = [
  "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM.mp4",
  "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM1.mp4",
  "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.45.11 PM.mp4",
];

// ─── Image Lightbox ───────────────────────────────────────────────────────────

function ImageLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const prev = useCallback(() => setIdx((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setIdx((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
        <X className="w-5 h-5" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="relative max-w-4xl max-h-[88vh] w-full" onClick={(e) => e.stopPropagation()}>
        <Image src={images[idx]} alt={`Image ${idx + 1}`} width={1200} height={900} className="rounded-2xl object-contain max-h-[88vh] w-auto mx-auto" unoptimized />
        <p className="text-center mt-3 text-white/40 text-xs">{idx + 1} / {images.length}</p>
      </div>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// ─── Inline Video Player Card ─────────────────────────────────────────────────
// Videos play directly inside the card — no navigation, no new tab.

interface VideoCardProps {
  video: { src: string; name: string; course: string };
  isActive: boolean;
  isSide: boolean;
  onActivate: () => void;
  playingId: string | null;
  setPlayingId: (id: string | null) => void;
}

function VideoCard({ video, isActive, isSide, onActivate, playingId, setPlayingId }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const videoId = video.src;

  // Pause when another video starts or this card becomes inactive
  useEffect(() => {
    if (playingId !== videoId && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [playingId, videoId, isPlaying]);

  useEffect(() => {
    if (!isActive && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  const handlePlay = useCallback(async () => {
    if (!isActive) { onActivate(); return; }
    if (!videoRef.current || error) return;
    try {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        setPlayingId(videoId);
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setError(true);
    }
  }, [isActive, isPlaying, error, onActivate, setPlayingId, videoId]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100 || 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pct * duration;
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) videoRef.current.requestFullscreen();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      onClick={!isActive ? onActivate : undefined}
      style={{
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        transform: isSide
          ? "perspective(1200px) rotateY(0deg) scale(0.9)"
          : "perspective(1200px) scale(1.02)",
        opacity: isSide ? 0.72 : 1,
        cursor: !isActive ? "pointer" : "default",
      }}
      className={`relative flex-shrink-0 rounded-2xl overflow-hidden bg-[#0d1724] ${
        isActive
          ? "ring-2 ring-[#2855E8]/60 shadow-[0_8px_48px_rgba(40,85,232,0.25)]"
          : "ring-1 ring-white/10 shadow-lg"
      }`}
    >
      {/* Video element — plays inline, stays on page */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {!error ? (
          <video
            ref={videoRef}
            src={video.src}
            className="w-full h-full object-cover"
            preload="metadata"
            playsInline
            onLoadedMetadata={() => { setLoaded(true); if (videoRef.current) setDuration(videoRef.current.duration); }}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0d1724]">
            <p className="text-white/40 text-sm">Video unavailable</p>
          </div>
        )}

        {/* Play / Pause overlay — only shows when not playing or on hover */}
        {!error && (
          <button
            onClick={handlePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
              isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
            } group`}
            style={{ background: isPlaying ? "transparent" : "rgba(0,0,0,0.25)" }}
          >
            <div className={`flex items-center justify-center rounded-full bg-white shadow-xl transition-all duration-200 group-hover:scale-110 ${
              isActive ? "w-14 h-14" : "w-10 h-10"
            }`}>
              {isPlaying
                ? <Pause className={`text-[#2855E8] fill-[#2855E8] ${isActive ? "w-6 h-6" : "w-4 h-4"}`} />
                : <Play className={`text-[#2855E8] fill-[#2855E8] ml-0.5 ${isActive ? "w-6 h-6" : "w-4 h-4"}`} />
              }
            </div>
          </button>
        )}

        {/* Loading spinner */}
        {!loaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Controls bar — only on active card */}
      {isActive && loaded && !error && (
        <div className="bg-[#0d1724]/95 px-4 py-2.5 flex flex-col gap-2">
          {/* Progress bar */}
          <div
            className="w-full h-1.5 bg-white/15 rounded-full cursor-pointer group"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-[#2855E8] rounded-full transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          {/* Time + controls */}
          <div className="flex items-center justify-between">
            <span className="text-white/50 text-[11px] tabular-nums">
              {formatTime(videoRef.current?.currentTime ?? 0)} / {formatTime(duration)}
            </span>
            <div className="flex items-center gap-2">
              <button onClick={toggleMute} aria-label="Toggle mute" className="text-white/60 hover:text-white transition-colors">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button onClick={handleFullscreen} aria-label="Fullscreen" className="text-white/60 hover:text-white transition-colors">
                <Maximize className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student info footer */}
      {isActive && (
        <div className="bg-[#0a1120] px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2855E8] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {video.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">{video.name}</p>
            <p className="text-[#DCA43A] text-xs font-medium">{video.course} · SKD Group</p>
          </div>
          <div className="ml-auto text-[10px] font-bold text-[#DCA43A] bg-[#DCA43A]/10 border border-[#DCA43A]/20 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            Verified
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Video Carousel ───────────────────────────────────────────────────────────

function VideoCarousel() {
  const [active, setActive] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const total = accaVideos.length;
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => {
    setPlayingId(null);
    setActive((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const next = useCallback(() => {
    setPlayingId(null);
    setActive((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  const goTo = (i: number) => {
    setPlayingId(null);
    setActive(i);
  };

  // Keyboard nav
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [prev, next]);

  // Touch swipe
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  return (
    <div
      className="relative w-full"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Cards row */}
      <div className="flex items-center justify-center gap-4 md:gap-6 px-4 py-6">
        {/* LEFT side card */}
        <div className="hidden sm:block flex-shrink-0 w-64 md:w-80">
          <VideoCard
            video={accaVideos[leftIdx]}
            isActive={false}
            isSide={true}
            onActivate={() => goTo(leftIdx)}
            playingId={playingId}
            setPlayingId={setPlayingId}
          />
        </div>

        {/* CENTER active card */}
        <div className="flex-shrink-0 w-full sm:w-80 md:w-[460px] max-w-[500px]">
          <VideoCard
            video={accaVideos[active]}
            isActive={true}
            isSide={false}
            onActivate={() => {}}
            playingId={playingId}
            setPlayingId={setPlayingId}
          />
        </div>

        {/* RIGHT side card */}
        <div className="hidden sm:block flex-shrink-0 w-64 md:w-80">
          <VideoCard
            video={accaVideos[rightIdx]}
            isActive={false}
            isSide={true}
            onActivate={() => goTo(rightIdx)}
            playingId={playingId}
            setPlayingId={setPlayingId}
          />
        </div>
      </div>

      {/* Nav row */}
      <div className="flex items-center justify-center gap-4 mt-1">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {accaVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-7 h-2.5 bg-[#2855E8]"
                    : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// ─── Review Grid ──────────────────────────────────────────────────────────────

function ReviewGrid() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {reviewImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-[#2855E8]/60 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Image
              src={src}
              alt={`Student review ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
          </button>
        ))}
      </div>
      {lightboxIdx !== null && (
        <ImageLightbox images={reviewImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </>
  );
}

// ─── Results Grid ─────────────────────────────────────────────────────────────

function ResultsGrid() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (src: string, idx: number) => {
    if (playingVideo === src) {
      videoRefs.current[idx]?.pause();
      setPlayingVideo(null);
    } else {
      videoRefs.current.forEach((v, i) => { if (i !== idx && v) v.pause(); });
      videoRefs.current[idx]?.play().catch(() => {});
      setPlayingVideo(src);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-5">
        {resultImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-[#DCA43A]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Image src={src} alt={`Result ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
          </button>
        ))}
      </div>

      {/* Result Videos — inline playback */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
        {resultVideos.map((src, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden bg-[#0d1724] ring-1 ring-white/10">
            <div className="relative" style={{ aspectRatio: "16/9" }}>
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={src}
                className="w-full h-full object-cover"
                playsInline
                preload="metadata"
                controls={playingVideo === src}
                onEnded={() => setPlayingVideo(null)}
              />
              {playingVideo !== src && (
                <button
                  onClick={() => handleVideoClick(src, i)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#DCA43A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </div>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <ImageLightbox images={resultImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </>
  );
}

// ─── Campus Grid ──────────────────────────────────────────────────────────────

function CampusGrid() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {classroomImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-video rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Image src={src} alt={`Campus ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
          </button>
        ))}
      </div>
      {lightboxIdx !== null && (
        <ImageLightbox images={classroomImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </>
  );
}

// ─── Tab types ────────────────────────────────────────────────────────────────

type TabId = "videos" | "reviews" | "results" | "campus";

const TABS: { id: TabId; label: string }[] = [
  { id: "videos", label: "Student Testimonials" },
  { id: "reviews", label: "Reviews" },
  { id: "results", label: "Exam Results" },
  { id: "campus", label: "Campus Life" },
];

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function SocialProofSection() {
  const [activeTab, setActiveTab] = useState<TabId>("videos");

  return (
    <section className="relative py-16 sm:py-24 bg-[#080f1e] overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2855E8]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#DCA43A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-10 h-px bg-[#2855E8]/60" />
            <span className="text-[#2855E8] text-[11px] font-bold tracking-[0.25em] uppercase">Real Stories</span>
            <span className="w-10 h-px bg-[#2855E8]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Student Reviews — Hear from
            <br />
            <em className="not-italic text-[#2855E8] font-bold">Our Alumni</em>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-lg mx-auto leading-relaxed">
            Real voices, real journeys. Watch how SKD students achieved their career milestones.
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#2855E8] border-[#2855E8] text-white shadow-lg shadow-[#2855E8]/20"
                  : "border-white/12 text-white/45 hover:text-white/80 hover:border-white/25 bg-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="min-h-[320px]">
          {activeTab === "videos" && <VideoCarousel />}
          {activeTab === "reviews" && <ReviewGrid />}
          {activeTab === "results" && <ResultsGrid />}
          {activeTab === "campus" && <CampusGrid />}
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/8 border border-white/8 rounded-2xl overflow-hidden">
          {[
            { value: "500+", label: "Students Enrolled" },
            { value: "95%", label: "First-Attempt Pass Rate" },
            { value: "4.9★", label: "Google Rating" },
            { value: "10+ Yrs", label: "Of Excellence" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors px-6 py-6 text-center">
              <div className="text-2xl font-extrabold text-[#2855E8]">{stat.value}</div>
              <div className="text-[11px] text-white/35 font-medium mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

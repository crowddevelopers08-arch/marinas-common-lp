"use client";

import { useEffect, useRef, useState } from "react";
import { cardShadow, cx } from "./styles";

const heroVideos = [
  "https://ik.imagekit.io/tpucbav8z/marinias1_squished.mp4",
  "https://ik.imagekit.io/tpucbav8z/output%201hernia_squished.mp4",
];

export function HeroVideoSlider({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mutedRef = useRef(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.muted = mutedRef.current;
    v.play().catch(() => {});
    setPaused(false);
    setProgress(0);
  }, [active]);

  const handleEnded = () => setActive((p) => (p + 1) % heroVideos.length);

  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPaused(false); }
    else { v.pause(); setPaused(true); }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    mutedRef.current = v.muted;
    setMuted(v.muted);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress(v.currentTime / v.duration);
  };

  return (
    <div className={cx("relative overflow-hidden rounded-[28px] border border-white/20 bg-[#1e3f44] ring-1 ring-[#50c0d0]/20", cardShadow, className)}>
      <video
        ref={videoRef}
        className="block aspect-video w-full cursor-pointer bg-[#1e3f44] object-cover"
        autoPlay
        muted={muted}
        playsInline
        preload="metadata"
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onClick={handleClick}
      >
        <source src={heroVideos[active]} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1f1b]/75 via-[#0d1f1b]/10 to-transparent" />

      {paused && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-[#14241f]/70 backdrop-blur-sm">
            <svg className="size-5 fill-white" viewBox="0 0 16 16">
              <rect x="2" y="1" width="5" height="14" rx="1.5" />
              <rect x="9" y="1" width="5" height="14" rx="1.5" />
            </svg>
          </span>
        </div>
      )}

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="rounded-full bg-[#14241f]/80 px-3.5 py-2 text-[11.5px] font-bold uppercase tracking-[.08em] text-[#f2fbfc] backdrop-blur-md">
          Meet the surgeon
        </span>
        <div className="flex items-center gap-2.5">
          {heroVideos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); setActive(i); }}
              aria-label={`Video ${i + 1}`}
              className="relative h-[4px] overflow-hidden rounded-full bg-white/30 transition-[width] duration-300"
              style={{ width: i === active ? 44 : 14 }}
            >
              {i === active && (
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-[#50c0d0]"
                  style={{ width: `${progress * 100}%` }}
                />
              )}
            </button>
          ))}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="flex size-7 items-center justify-center rounded-full bg-[#14241f]/70 text-white backdrop-blur-sm transition hover:bg-[#14241f]/90"
          >
            {muted ? (
              <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.586 5.707 7.879A1 1 0 0 1 5 8H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 .707.293L9 15.414V4.586ZM11 7l1.5 1.5L14 7l1 1-1.5 1.5L15 11l-1 1-1.5-1.5L11 12l-1-1 1.5-1.5L10 8l1-1Z"/>
              </svg>
            ) : (
              <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.586 5.707 7.879A1 1 0 0 1 5 8H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 .707.293L9 15.414V4.586ZM13.5 10a3.5 3.5 0 0 0-1.5-2.872v5.744A3.5 3.5 0 0 0 13.5 10Zm1.5 0a5 5 0 0 1-3 4.584V5.416A5 5 0 0 1 15 10Z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

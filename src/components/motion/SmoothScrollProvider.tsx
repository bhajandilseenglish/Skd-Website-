"use client";

import React from "react";

/**
 * Native hardware-accelerated scrolling wrapper.
 * Avoids JS wheel hijacking so trackpads, mice, and touchscreens
 * scroll smoothly at native 60/120fps without fighting CSS scroll-smooth.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

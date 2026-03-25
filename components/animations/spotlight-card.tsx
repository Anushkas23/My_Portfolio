"use client";

// Adapted from React Bits (MIT): https://github.com/DavidHDev/react-bits
import type {
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren
} from "react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

type SpotlightCardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    spotlightColor?: string;
  }
>;

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(41, 98, 255, 0.16)",
  ...props
}: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onFocus={() => setOpacity(1)}
      onBlur={() => setOpacity(0)}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/95 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.25)] backdrop-blur-xl",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(320px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

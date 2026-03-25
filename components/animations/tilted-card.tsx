"use client";

// Adapted from React Bits (MIT): https://github.com/DavidHDev/react-bits
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring
} from "motion/react";

import { cn } from "@/lib/utils";

type TiltedCardProps = {
  imageSrc: string;
  altText: string;
  captionText?: string;
  className?: string;
  imageClassName?: string;
  overlay?: ReactNode;
  priority?: boolean;
};

const springValues = {
  damping: 28,
  stiffness: 140,
  mass: 1.4
};

export function TiltedCard({
  imageSrc,
  altText,
  captionText,
  className,
  imageClassName,
  overlay,
  priority = false
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(24);
  const y = useMotionValue(24);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0, { damping: 30, stiffness: 220 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion || !ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -10);
    rotateY.set((offsetX / (rect.width / 2)) * 10);

    x.set(event.clientX - rect.left + 14);
    y.set(event.clientY - rect.top - 12);
  };

  const handleMouseEnter = () => {
    if (reduceMotion) {
      return;
    }

    scale.set(1.02);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <figure
      ref={ref}
      className="relative [perspective:900px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={cn(
          "relative overflow-hidden rounded-[1.9rem] border border-white/80 bg-white/90 shadow-[0_40px_100px_-55px_rgba(15,23,42,0.45)]",
          className
        )}
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                scale,
                transformStyle: "preserve-3d"
              }
        }
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 440px, 92vw"
            className={cn("object-cover", imageClassName)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/18 via-transparent to-white/20" />
          {overlay ? <div className="absolute inset-0">{overlay}</div> : null}
        </div>
      </motion.div>
      {captionText ? (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 hidden rounded-full border border-slate-300/80 bg-white/95 px-3 py-1 text-xs font-medium text-slate-700 shadow-lg sm:block"
          style={reduceMotion ? { opacity: 0 } : { x, y, opacity }}
        >
          {captionText}
        </motion.figcaption>
      ) : null}
    </figure>
  );
}

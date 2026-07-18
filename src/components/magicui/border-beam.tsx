"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}

export const BorderBeam = ({
    className,
    size = 200,
    duration = 15,
    borderWidth = 1.5,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    delay = 0,
}: BorderBeamProps) => {
    return (
        <div
            style={
                {
                    "--border-width": borderWidth,
                } as React.CSSProperties
            }
            className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
        >
            <motion.div
                className={cn(
                    "absolute aspect-square",
                    "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
                    className
                )}
                style={
                    {
                        width: size,
                        offsetPath: `rect(0 auto auto 0 round ${size}px)`,
                        "--color-from": colorFrom,
                        "--color-to": colorTo,
                    } as React.CSSProperties
                }
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration,
                    delay: -delay,
                }}
            />
        </div>
    );
};

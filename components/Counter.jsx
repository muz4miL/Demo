"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Counter({ from = 0, to, suffix = "", duration = 2 }) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(from);

    useEffect(() => {
        const controls = animate(count, to, {
            duration: duration,
            ease: "easeOut",
        });

        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayValue(latest);
        });

        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [count, to, duration, rounded]);

    return (
        <span>
            {displayValue}{suffix}
        </span>
    );
}

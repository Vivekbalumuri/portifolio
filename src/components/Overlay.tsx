"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Section 1: 0% scroll (fade out between 0.1 and 0.2)
  const o1 = useTransform(scrollProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.2], [0, -100]);

  // Section 2: 30% scroll (fade in 0.2 to 0.3, stay to 0.4, fade out to 0.5)
  const o2 = useTransform(scrollProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 60% scroll (fade in 0.5 to 0.6, stay to 0.8, fade out to 0.9)
  const o3 = useTransform(scrollProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollProgress, [0.5, 0.9], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-8 md:px-24 text-white">
      {/* Section 1 */}
      <motion.div style={{ opacity: o1, y: y1 }} className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-bold text-center tracking-tighter drop-shadow-2xl">
          Vivek Balumuri.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">AI & App Developer.</span>
        </h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div style={{ opacity: o2, y: y2 }} className="absolute inset-0 flex items-center justify-start px-8 md:px-32">
        <h2 className="text-4xl md:text-7xl font-semibold max-w-2xl drop-shadow-2xl text-left bg-black/20 backdrop-blur-sm p-4 md:p-8 rounded-3xl border border-white/5">
          Building intelligent apps that solve real-world problems.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div style={{ opacity: o3, y: y3 }} className="absolute inset-0 flex items-center justify-end px-8 md:px-32">
        <h2 className="text-4xl md:text-7xl font-semibold max-w-2xl drop-shadow-2xl text-right bg-black/20 backdrop-blur-sm p-4 md:p-8 rounded-3xl border border-white/5">
          Bridging AI, languages, and human learning.
        </h2>
      </motion.div>
    </div>
  );
}

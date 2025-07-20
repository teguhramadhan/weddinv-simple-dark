"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const weddingDate = new Date("2025-12-25T14:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
      const hours = Math.max(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        0
      );
      const minutes = Math.max(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        0
      );
      const seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="countdown"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-[#111] text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-light mb-12 tracking-wide uppercase font-italiana text-orange-400"
        >
          The Countdown to Forever
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-8"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="px-2 py-4 border border-orange-700/30"
            >
              <div className="lg:text-5xl font-light text-orange-400 mb-1">
                {value}
              </div>
              <div className="text-gray-500 font-italiana font-bold uppercase tracking-widest text-xs">
                {unit}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex mt-12"
        >
          <p className="text-white/60 text-xs italic max-w-3xl mx-auto leading-relaxed">
            a new chapter awaits — a promise to walk hand in hand under a
            thousand sunsets, for a thousand lifetimes more.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

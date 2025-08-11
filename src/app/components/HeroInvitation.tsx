"use client";

import { Guest } from "../types/guest";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroInvitation({ guest }: { guest: Guest }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-black relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="backdrop-blur-lg bg-white/5 border border-white/20 shadow-2xl p-10 sm:p-12 max-w-2xl w-full text-center"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <svg
            className="w-20 h-10 mx-auto text-orange-400 mb-6"
            fill="currentColor"
            viewBox="0 0 100 20"
          >
            <path d="M10 10 Q 25 0, 40 10 Q 55 20, 70 10 Q 85 0, 100 10 Q 85 20, 70 10 Q 55 0, 40 10 Q 25 20, 10 10" />
          </svg>
          <h1 className="font-italiana text-3xl md:text-5xl text-white mb-2 uppercase">
            Wedding Invitation
          </h1>
          <p className="font-inter text-sm text-white/60 tracking-widest">
            Sabtu, 30 November 2025
          </p>
          <div className="w-24 h-px bg-orange-400 mx-auto mt-4" />
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-inter text-sm tracking-widest text-white/70 mb-3 uppercase">
            Kepada Yth.
          </h2>
          <h3 className="font-italiana text-3xl md:text-4xl text-white mb-4">
            {guest.fullName}
          </h3>
          <h3 className="uppercase mb-6">Di {guest.address}</h3>
          <p className="font-inter text-white/90 text-base font-thin">
            Dengan penuh sukacita, kami mengundang Anda untuk hadir dalam
            perayaan pernikahan kami:
          </p>

          {/* Nama Mempelai */}
          <div className="mt-6 font-italiana text-2xl sm:text-3xl text-orange-300">
            Hafidz &amp; Salsabila
          </div>
        </motion.div>

        {/* Dekorasi bawah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center space-x-4 text-orange-400/60 mt-12"
        >
          <div className="w-12 h-px bg-current" />
          <div className="text-sm">♥</div>
          <div className="w-12 h-px bg-current" />
        </motion.div>
      </motion.div>
    </div>
  );
}

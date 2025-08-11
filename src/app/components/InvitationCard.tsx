"use client";

import { useState, useRef } from "react";
import { Guest } from "../types/guest";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface InvitationCardProps {
  guest: Guest;
  onOpen?: () => void;
}

export default function InvitationCard({ guest, onOpen }: InvitationCardProps) {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      onOpen?.();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="relative min-h-screen w-full overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Dashed Border Frame */}
          <div className="absolute inset-12 border-2 border-dashed border-orange-400 backdrop-blur-sm pointer-events-none z-[5]" />

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-orange-400/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 blur-2xl animate-pulse delay-700" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
            <motion.h1
              className="font-italiana text-5xl drop-shadow uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Wedding Invitation
            </motion.h1>

            <motion.p
              className="font-inter text-sm uppercase tracking-widest text-white/70 mb-1 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Kepada Yth.
            </motion.p>

            <motion.h2
              className="font-italiana text-3xl mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {guest.fullName}
            </motion.h2>

            <motion.p
              className="text-white/60 text-sm mb-6 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              DI <span className="uppercase">{guest.address}</span>
            </motion.p>

            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="w-16 h-px bg-white/40" />
              <span className="mx-4 text-white/60">♥</span>
              <div className="w-16 h-px bg-white/40" />
            </motion.div>

            {/* Button */}
            <div className="text-orange-400 font-inter text-md">
              <button
                onClick={handleOpen}
                ref={ref}
                className="border border-orange-400 px-4 py-2 flex items-center gap-2 transition hover:bg-orange-400/10"
              >
                <ArrowDown className="w-4 h-4 animate-bounce " />
                Buka Undangan
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

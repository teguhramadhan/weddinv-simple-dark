"use client";

import { ArrowRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeartPos {
  left: string;
  top: string;
  delay: string;
  duration: string;
}

export function Hero() {
  const [hearts, setHearts] = useState<HeartPos[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const newHearts = [...Array(6)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`,
    }));
    setHearts(newHearts);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 700); // Durasi sama dengan animasi exit
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="min-h-screen flex items-center justify-center relative overflow-hidden text-white"
        >
          {/* BG Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="text-center z-10 px-6 max-w-4xl mx-auto">
            <div className="mb-2">
              <h1 className="tracking-widest text-xs lg:text-5xl uppercase">
                Wedding Invitation
              </h1>
            </div>

            <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wide font-italiana">
              Sarah & James
            </h1>

            <div className="w-32 h-0.5 bg-orange-400 mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl font-light mb-2 text-gray-300">
              Hello!{" "}
              <span className="font-bold font-italiana">[guestname]</span>
            </p>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-400">
              You are cordially invited to celebrate our union
            </p>

            <p className="text-lg text-orange-400 font-semibold mb-6">
              December 27, 2024
            </p>

            <button
              onClick={handleOpen}
              className="relative px-6 md:px-8 py-3 border border-orange-500 text-sm md:text-base lg:text-lg font-medium text-orange-400 hover:text-white overflow-hidden transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-orange-600 before:transition-all before:duration-500 before:ease-out hover:before:w-full inline-block items-center gap-2 whitespace-nowrap"
            >
              <span className="relative z-10 uppercase flex items-center gap-2">
                Open Invitation
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </button>
          </div>

          {/* Floating hearts animation */}
          <div className="absolute inset-0 pointer-events-none">
            {hearts.map((pos, i) => (
              <Heart
                key={i}
                className="absolute text-rose-300 opacity-20 animate-bounce w-4 h-4"
                style={{
                  left: pos.left,
                  top: pos.top,
                  animationDelay: pos.delay,
                  animationDuration: pos.duration,
                }}
              />
            ))}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

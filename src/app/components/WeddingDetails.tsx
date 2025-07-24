"use client";

import { Calendar, Clock, MapPin, Navigation, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";

export default function WeddingDetails() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 md:py-32 px-4 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1673897847791-503a222307a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90"></div>

      {/* Floating Particles */}
      {windowWidth > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30"
              initial={{
                x: Math.random() * windowWidth,
                y: window.innerHeight + 100,
                opacity: 0,
              }}
              animate={{
                y: -100,
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      {/* Save the Date Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
        className="relative z-10 mb-16 md:mb-20"
      >
        <div className="relative">
          <Image
            src="/images/ornaments/savethedate_ic.png"
            alt="Save The Date Icon"
            width={120}
            height={120}
            className="object-contain md:w-[160px] md:h-[160px]"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative bg-black/5 backdrop-blur-sm border border-white/10 overflow-hidden"
        >
          {/* Shimmer Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]"></div>

          {/* Akad Nikah */}
          <div className="relative p-8 md:p-12 lg:p-20 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent to-orange-400"></div>
                <Sparkles className="mx-4 md:mx-6 w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                <div className="h-px w-16 md:w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
              </div>

              <h3 className="text-lg md:text-2xl lg:text-4xl font-italiana text-white mb-8 md:mb-12 tracking-[0.1em] uppercase">
                Akad Nikah
              </h3>

              {/* Date Display */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative mb-12 md:mb-16"
              >
                <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
                  <div className="relative">
                    <span className="text-3xl md:text-5xl lg:text-7xl font-extralight text-orange-400">
                      27
                    </span>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-px bg-orange-400"></div>
                  </div>
                  <div className="relative">
                    <span className="text-3xl md:text-5xl lg:text-7xl border-l-2 border-r-2 px-4 md:px-8 font-inter text-orange-400 uppercase">
                      Des
                    </span>
                  </div>
                  <div className="relative">
                    <span className="text-3xl md:text-5xl lg:text-7xl font-extralight text-orange-400">
                      25
                    </span>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-px bg-orange-400"></div>
                  </div>
                </div>
              </motion.div>

              {/* Event Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-5xl mx-auto">
                {/* Time */}
                <EventCard
                  icon={<Clock className="w-6 h-6 text-orange-400" />}
                  label="Time"
                  value="10:00 - 11:00"
                  sub="WIB"
                />
                {/* Venue */}
                <EventCard
                  icon={<MapPin className="w-6 h-6 text-orange-400" />}
                  label="Venue"
                  value="St. Mary Cathedral"
                  sub="123 Wedding Street, City Center"
                />
              </div>
            </motion.div>
          </div>

          {/* Resepsi Nikah */}
          <div className="relative p-8 md:p-12 lg:p-20 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent to-orange-400"></div>
                <Sparkles className="mx-4 md:mx-6 w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                <div className="h-px w-16 md:w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
              </div>

              <h3 className="text-lg md:text-2xl lg:text-4xl font-italiana text-white mb-8 md:mb-12 tracking-[0.1em] uppercase">
                Resepsi Pernikahan
              </h3>

              {/* Date Display */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative mb-12 md:mb-16"
              >
                <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
                  <div className="relative">
                    <span className="text-3xl md:text-5xl lg:text-7xl font-extralight text-orange-400">
                      27
                    </span>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-px bg-orange-400"></div>
                  </div>
                  <div className="relative">
                    <span className="text-3xl md:text-5xl lg:text-7xl border-l-2 border-r-2 px-4 md:px-8 font-inter text-orange-400 uppercase">
                      Des
                    </span>
                  </div>
                  <div className="relative">
                    <span className="text-3xl md:text-5xl lg:text-7xl font-extralight text-orange-400">
                      25
                    </span>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-px bg-orange-400"></div>
                  </div>
                </div>
              </motion.div>

              {/* Event Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-5xl mx-auto">
                {/* Time */}
                <EventCard
                  icon={<Clock className="w-6 h-6 text-orange-400" />}
                  label="Time"
                  value="11:30 - 13:30"
                  sub="WIB"
                />
                {/* Venue */}
                <EventCard
                  icon={<MapPin className="w-6 h-6 text-orange-400" />}
                  label="Venue"
                  value="St. Mary Cathedral"
                  sub="123 Wedding Street, City Center"
                />
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="relative p-8 md:p-12 lg:p-20">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <motion.a
                href="https://www.google.com/maps/place/St.+Mary's+Cathedral"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="relative group inline-flex items-center px-8 md:px-16 py-4 md:py-6 bg-black/50 border-2 border-orange-400 text-orange-400 overflow-hidden transition-all duration-700 hover:text-black hover:border-orange-500"
              >
                <div className="absolute inset-0 bg-orange-400 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
                <div className="absolute inset-0 border-2 border-orange-500/30 transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Navigation className="relative w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 text-sm md:text-xl font-light tracking-[0.2em] uppercase">
                  Get Directions
                </span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.8 }}
        className="relative z-10 mt-12 md:mt-20"
      >
        <div className="w-40 md:w-64 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rotate-45"></div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.section>
  );
}

function EventCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white/5 backdrop-blur-sm p-6 md:p-8 border border-white/10 hover:border-orange-400/30 transition-all duration-500"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <div className="flex items-start gap-4 md:gap-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-400/20 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-left">
          <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] mb-1 md:mb-3">
            {label}
          </p>
          <p className="text-xl md:text-2xl font-light text-white tracking-wide">
            {value}
          </p>
          <p className="text-xs md:text-sm text-orange-400 mt-1 md:mt-2">
            {sub}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

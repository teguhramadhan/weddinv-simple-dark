"use client";

import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function RSVP() {
  // Buat inView
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* ORNAMENT TOP LEFT */}
      <Image
        src="/images/ornaments/ornaments-side-left.png"
        alt="Ornament Top Left"
        width={48}
        height={48}
        className="absolute hidden md:block top-12 left-12 object-contain opacity-50 drop-shadow-lg"
      />

      {/* ORNAMENT BOTTOM RIGHT */}
      <Image
        src="/images/ornaments/ornaments-side-right.png"
        alt="Ornament Bottom Right"
        width={48}
        height={48}
        className="absolute bottom-12 right-12 object-contain opacity-50 drop-shadow-lg"
      />

      <div ref={ref} className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-900/40 px-8 pt-8 pb-14 shadow-lg backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]"
        >
          <div className="space-y-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/ornaments/ornaments-top.png"
                alt="Ornament Top"
                width={72}
                height={72}
                className="object-contain opacity-50 drop-shadow-lg"
              />
            </div>
            <h2 className="text-4xl md:text-5xl uppercase mb-4 tracking-widest text-white font-italiana font-bold">
              RSVP
            </h2>

            <p className="text-gray-400 mb-12 text-lg">
              Please confirm your attendance by November 25, 2024
            </p>
            <div>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Confirmation Number"
                className="w-full bg-transparent border border-gray-700  px-4 py-3 text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <select className="w-full bg-transparent border border-gray-700  px-4 py-3 text-white focus:border-orange-400 focus:outline-none transition-colors">
                <option value="" className="bg-gray-900 text-gray-700">
                  Will you attend?
                </option>
                <option value="yes" className="bg-gray-900 text-gray-700">
                  Yes, I will be there!
                </option>
                <option value="no" className="bg-gray-900 text-gray-700">
                  Sorry, can&apos;t make it
                </option>
              </select>
            </div>

            <div>
              <input
                type="number"
                placeholder="Number of guests"
                min="1"
                max="5"
                className="w-full bg-transparent border border-gray-700  px-4 py-3 text-white placeholder-gray-500 focus:border-orange-400 focus:outline-none transition-colors"
              />
            </div>

            <button
              className="w-full relative py-3 border border-orange-500 text-lg font-medium text-white overflow-hidden transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-orange-600 before:transition-all before:duration-500 before:ease-out hover:before:w-full inline-block"
              onClick={() =>
                alert("RSVP sent! Thank you for confirming your attendance.")
              }
            >
              <span className="relative z-10">Send RSVP</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

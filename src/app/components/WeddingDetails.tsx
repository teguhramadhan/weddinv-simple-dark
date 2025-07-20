"use client";

import { Calendar, Clock1, MapPin, MapIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WeddingDetails() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 px-4 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1673897847791-503a222307a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Save the Date Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mb-12 md:mb-20 lg:mb-28"
      >
        <Image
          src="/images/ornaments/savethedate_ic.png"
          alt="Save The Date Icon"
          width={140}
          height={140}
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-12 md:gap-20 lg:gap-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 md:p-12 lg:p-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex flex-col gap-12 lg:gap-20"
        >
          {/* Akad */}
          <div className="flex flex-col items-center text-center gap-8 lg:gap-12">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-italiana text-white">
              Akad Nikah
            </h3>

            <div className="flex items-center gap-6 md:gap-12 lg:gap-16 text-orange-400">
              <span className="text-xl md:text-4xl lg:text-5xl">27</span>
              <span className="text-xl md:text-5xl lg:text-6xl border-l-2 border-r-2 px-6 md:px-12 lg:px-16 font-bold font-italiana uppercase">
                Des
              </span>
              <span className="text-xl md:text-4xl lg:text-5xl">25</span>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 lg:gap-20 text-gray-400">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm md:text-base lg:text-lg">Start:</p>
                  <p className="font-medium text-lg md:text-xl lg:text-2xl text-gray-300">
                    10:00 - 11:00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-medium text-lg md:text-xl lg:text-2xl text-gray-300">
                    St. Mary Cathedral
                  </p>
                  <p className="text-sm md:text-base lg:text-lg">
                    123 Wedding Street, City Center
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resepsi */}
          <div className="flex flex-col items-center text-center gap-8 lg:gap-12">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-italiana text-white">
              Resepsi Pernikahan
            </h3>

            <div className="flex items-center gap-6 md:gap-12 lg:gap-16 text-orange-400">
              <span className="text-xl md:text-4xl lg:text-5xl">27</span>
              <span className="text-xl md:text-5xl lg:text-6xl border-l-2 border-r-2 px-6 md:px-12 lg:px-16 font-bold font-italiana uppercase">
                Des
              </span>
              <span className="text-xl md:text-4xl lg:text-5xl">25</span>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 lg:gap-20 text-gray-400">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm md:text-base lg:text-lg">Start:</p>
                  <p className="font-medium text-lg md:text-xl lg:text-2xl text-gray-300">
                    11:00 - 14:00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-medium text-lg md:text-xl lg:text-2xl text-gray-300">
                    St. Mary Cathedral
                  </p>
                  <p className="text-sm md:text-base lg:text-lg">
                    123 Wedding Street, City Center
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/St.+Mary's+Cathedral"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-fit inline-flex items-center px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 border border-orange-400 text-white overflow-hidden transition-colors duration-300 before:content-[''] before:absolute before:inset-0 before:bg-orange-500 before:scale-x-0 before:origin-left before:z-0 hover:before:scale-x-100 before:transition-transform before:duration-500 hover:text-white"
            >
              <span className="relative inline-flex items-center z-10 text-base md:text-lg lg:text-xl">
                <MapIcon className="w-5 h-5 mr-2" />
                Get Directions
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

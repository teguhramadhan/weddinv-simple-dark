"use client";

import { Calendar, Clock, Gift, MapPin, ArrowRight } from "lucide-react";
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
        className="relative z-10 mb-24"
      >
        <Image
          src="/images/ornaments/savethedate_ic.png"
          alt="Save The Date Icon"
          width={120}
          height={120}
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        {/* Akad */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900/5 p-8 md:p-16 border border-slate-600 hover:border-orange-400 transition-all duration-300"
        >
          <div className="flex items-center mb-8 md:mb-10">
            <Calendar className="w-10 h-10 md:w-12 md:h-12 text-orange-400 mr-4 md:mr-6" />
            <h3 className="text-3xl md:text-4xl font-medium font-italiana text-white">
              Akad
            </h3>
          </div>

          <div className="space-y-6 md:space-y-8 text-gray-400 mb-8 md:mb-10">
            <div className="flex items-center">
              <Clock className="w-6 h-6 md:w-7 md:h-7 mr-4 md:mr-5 text-gray-500" />
              <span className="text-lg md:text-xl">2:00 PM - 3:30 PM</span>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 mr-4 md:mr-5 text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-300 text-lg md:text-xl">
                  St. Mary Cathedral
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  123 Wedding Street, City Center
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/St.+Mary's+Cathedral"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-6 md:px-8 py-3 md:py-4 border border-orange-500 text-orange-500 overflow-hidden transition-colors duration-300 before:content-[''] before:absolute before:inset-0 before:bg-orange-500 before:scale-x-0 before:origin-left before:z-0 hover:before:scale-x-100 before:transition-transform before:duration-500 hover:text-white"
          >
            <span className="relative inline-flex items-center z-10 text-base md:text-lg">
              Get Directions
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </a>
        </motion.div>

        {/* Reception */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-900/5 p-8 md:p-16 border border-slate-600 hover:border-orange-400 transition-all duration-300"
        >
          <div className="flex items-center mb-8 md:mb-10">
            <Gift className="w-10 h-10 md:w-12 md:h-12 text-orange-400 mr-4 md:mr-6" />
            <h3 className="text-3xl md:text-4xl font-medium font-italiana text-white">
              Reception
            </h3>
          </div>

          <div className="space-y-6 md:space-y-8 text-gray-400 mb-8 md:mb-10">
            <div className="flex items-center">
              <Clock className="w-6 h-6 md:w-7 md:h-7 mr-4 md:mr-5 text-gray-500" />
              <span className="text-lg md:text-xl">6:00 PM - 11:00 PM</span>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 mr-4 md:mr-5 text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-300 text-lg md:text-xl">
                  Grand Ballroom Hotel
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  456 Celebration Ave, Downtown
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/Grand+Ballroom+Hotel"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-6 md:px-8 py-3 md:py-4 border border-orange-500 text-orange-500 overflow-hidden transition-colors duration-300 before:content-[''] before:absolute before:inset-0 before:bg-orange-500 before:scale-x-0 before:origin-left before:z-0 hover:before:scale-x-100 before:transition-transform before:duration-500 hover:text-white"
          >
            <span className="relative inline-flex items-center z-10 text-base md:text-lg">
              Get Directions
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

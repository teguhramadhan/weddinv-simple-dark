"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      aria-label="Wedding Footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative py-20 bg-fixed bg-center bg-cover text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative max-w-3xl mx-auto px-6 z-10">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Image
            src="/images/ornaments/ornaments-top2.png"
            alt="Wedding Ornament"
            width={500}
            height={220}
            className="object-contain opacity-50 drop-shadow-lg"
          />
        </motion.div>

        <motion.p
          className="text-gray-300 mb-6 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          With all humility, we thank you for your prayers. Your blessings and
          presence will add to our happiness. Your presence is an honor and a
          joy for our family.
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <Heart className="w-5 h-5 text-orange-400" />
          <p className="text-2xl text-orange-400 font-italiana">
            Sarah & James
          </p>
          <Heart className="w-5 h-5 text-orange-400" />
        </motion.div>
      </div>
    </motion.footer>
  );
}

"use client";

import { Gem } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Message {
  id: number;
  name: string;
  message: string;
  date: string;
}

export default function Message() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "Maria & John",
      message:
        "Selamat untuk kalian berdua! Semoga pernikahan kalian dipenuhi dengan kebahagiaan dan cinta yang abadi. ❤️",
      date: "2024-11-15",
    },
    {
      id: 2,
      name: "David & Lisa",
      message:
        "Congratulations on your special day! Wishing you both a lifetime of love and happiness together.",
      date: "2024-11-12",
    },
    {
      id: 3,
      name: "David & Lisa",
      message:
        "Congratulations on your special day! Wishing you both a lifetime of love and happiness together.",
      date: "2024-11-12",
    },
    // ... (dst)
  ]);

  const [newMessage, setNewMessage] = useState<{
    name: string;
    message: string;
  }>({
    name: "",
    message: "",
  });

  const addMessage = () => {
    if (newMessage.name && newMessage.message) {
      const message: Message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        date: new Date().toISOString().split("T")[0],
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: "", message: "" });
    }
  };

  // Setup animasi Framer Motion
  const ref = useRef(null);
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
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1513725673171-537abba17912?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Gem className="w-12 h-12 mx-auto text-orange-400 mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-light text-white font-italiana">
            Wedding Wishes
          </h2>
          <p className="text-gray-300 mt-4">
            Leave your heartfelt message for the couple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-lg p-8 border border-white/20 h-[300px] sticky top-24"
          >
            <h3 className="text-xl mb-6 text-orange-400 uppercase font-semibold">
              Send Your Wishes
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={newMessage.name}
                onChange={(e) =>
                  setNewMessage({ ...newMessage, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-gray-300 focus:border-orange-400 focus:outline-none transition-colors backdrop-blur"
              />
              <textarea
                placeholder="Write your message for the couple..."
                rows={4}
                value={newMessage.message}
                onChange={(e) =>
                  setNewMessage({ ...newMessage, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-gray-300 focus:border-orange-400 focus:outline-none transition-colors resize-none backdrop-blur"
              />
              <button
                onClick={addMessage}
                className="relative px-6 py-3 border border-orange-500 text-lg font-medium text-white overflow-hidden transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-orange-600 before:transition-all before:duration-500 before:ease-out hover:before:w-full inline-block"
              >
                <span className="relative z-10">Send Message</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-lg border border-white/20 p-6 max-h-[300px] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-white/10"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white/10 backdrop-blur-lg p-6 border border-white/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-orange-400">{msg.name}</h4>
                  <span className="text-sm text-gray-300">{msg.date}</span>
                </div>
                <p className="text-gray-100 leading-relaxed">{msg.message}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

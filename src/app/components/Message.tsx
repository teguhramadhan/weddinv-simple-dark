"use client";

import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
      name: "Sarah & Michael",
      message:
        "Sending lots of love to both of you on your wedding day. Congrats!",
      date: "2024-11-10",
    },
    {
      id: 4,
      name: "Jamal Tariq",
      message: "Congrats! Bro..",
      date: "2024-11-10",
    },
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

  return (
    <section
      className="relative py-20 md:py-28 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1513725673171-537abba17912?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-orange-400/20 backdrop-blur-sm border border-orange-400/30 mb-4 md:mb-6">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-white tracking-wide uppercase mb-3 md:mb-4 font-italiana">
            Wedding Wishes
          </h2>

          <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-4"></div>

          <p className="text-gray-300 text-base sm:text-lg tracking-wide">
            Leave your heartfelt message for the couple
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 lg:sticky lg:top-8">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-6 sm:w-8 h-px bg-orange-400"></div>
                <h3 className="text-base sm:text-lg md:text-xl text-orange-400 uppercase tracking-[0.2em] font-light">
                  Send Your Wishes
                </h3>
                <div className="flex-1 h-px bg-orange-400/30"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="group">
                  <label className="block text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={newMessage.name}
                    onChange={(e) =>
                      setNewMessage({ ...newMessage, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Write your heartfelt message..."
                    rows={4}
                    value={newMessage.message}
                    onChange={(e) =>
                      setNewMessage({ ...newMessage, message: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                  />
                </div>

                <button
                  onClick={addMessage}
                  className="group relative w-full bg-black/50 border border-orange-400 px-6 sm:px-8 py-3 sm:py-4 text-orange-400 overflow-hidden transition-all duration-500 hover:text-black"
                >
                  <div className="absolute inset-0 bg-orange-400 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base md:text-lg font-light tracking-wider uppercase">
                      Send Message
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Messages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-6 sm:w-8 h-px bg-orange-400"></div>
                <h3 className="text-base sm:text-lg md:text-xl text-orange-400 uppercase tracking-[0.2em] font-light">
                  Messages ({messages.length})
                </h3>
                <div className="flex-1 h-px bg-orange-400/30"></div>
              </div>

              <div className="max-h-[400px] md:max-h-[500px] overflow-y-auto space-y-4 sm:space-y-6 pr-2 scrollbar-thin scrollbar-thumb-orange-400/50 scrollbar-track-white/10">
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 hover:border-orange-400/30 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-orange-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-400"></div>
                        </div>
                        <h4 className="font-light text-orange-400 text-sm sm:text-base md:text-lg tracking-wide">
                          {msg.name}
                        </h4>
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                        {new Date(msg.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <p className="text-gray-100 leading-relaxed text-sm sm:text-base pl-8 sm:pl-11">
                      {msg.message}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

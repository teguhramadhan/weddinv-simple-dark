import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const WeddingDetails = () => {
  return (
    <div
      className="flex items-center justify-center p-12 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Floating Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Petals */}
        <div
          className="absolute top-20 left-10 w-3 h-3 bg-orange-300/40 transform rotate-45 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-32 right-20 w-2 h-2 bg-orange-400/50 rounded-full animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-40 left-1/4 w-1 h-6 bg-orange-200/30 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>

        {/* Floating Hearts */}
        <div className="absolute top-16 right-1/3 w-4 h-4 opacity-60 animate-float">
          <div className="text-orange-300/50 text-sm">♥</div>
        </div>
        <div className="absolute bottom-20 left-1/3 w-4 h-4 opacity-40 animate-float-delayed">
          <div className="text-orange-400/40 text-xs">♥</div>
        </div>

        {/* Glowing Particles */}
        <div className="absolute top-1/3 left-16 w-1 h-1 bg-orange-300/60 rounded-full animate-twinkle"></div>
        <div
          className="absolute top-2/3 right-24 w-1 h-1 bg-orange-400/50 rounded-full animate-twinkle"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-orange-200/60 rounded-full animate-twinkle"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Elegant Lines */}
        <div className="absolute top-24 right-32 w-12 h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-32 left-24 w-16 h-px bg-gradient-to-l from-transparent via-orange-400/30 to-transparent animate-slide-left"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Main Container */}
        <div className="p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto mb-6 animate-glow"></div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-2 font-italiana animate-fade-in">
              Save The Date
            </h2>
            <p className="text-white/80 font-light animate-fade-in-delayed">
              Thursday, November 6th, 2025
            </p>
            <p className="text-white lg:text-2xl max-w-full lg:max-w-lg mx-auto font-semibold mt-12 animate-fade-in-slow">
              Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia,
              Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia.
            </p>
          </div>

          {/* Map Button */}
          <div className="text-center mt-8">
            <button className="relative px-6 md:px-8 py-3 border border-orange-500 text-sm md:text-base lg:text-lg font-medium text-orange-400 hover:text-white overflow-hidden transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-orange-600 before:transition-all before:duration-500 before:ease-out hover:before:w-full inline-block items-center gap-2 whitespace-nowrap animate-gentle-pulse">
              <span className="relative z-10 uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                Open Invitation
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-orange-200/20 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-orange-300/15 blur-2xl animate-float-gentle"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-orange-400/10 blur-lg animate-twinkle-slow"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100px);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(251, 146, 60, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(251, 146, 60, 0.6);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-slow {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gentle-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes twinkle-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }
        .animate-slide-left {
          animation: slide-left 10s linear infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.5s ease-out;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 2s ease-out;
        }
        .animate-gentle-pulse {
          animation: gentle-pulse 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        .animate-twinkle-slow {
          animation: twinkle-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WeddingDetails;

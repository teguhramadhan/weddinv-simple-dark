import React from "react";

const Greeting = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1591700331354-f7eea65d1ce8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Floating Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing Particles */}
        <div className="absolute top-1/4 left-20 w-1 h-1 bg-orange-300/60 rounded-full animate-twinkle"></div>
        <div
          className="absolute top-2/3 right-32 w-1 h-1 bg-orange-400/50 rounded-full animate-twinkle"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-orange-200/60 rounded-full animate-twinkle"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Elegant Lines */}
        <div className="absolute top-32 right-40 w-20 h-px bg-gradient-to-r from-transparent via-orange-300/30 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-40 left-32 w-24 h-px bg-gradient-to-l from-transparent via-orange-400/25 to-transparent animate-slide-left"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Main Container */}
        <div className="backdrop-blur-sm bg-white/8 border border-white/15 p-8 md:p-16 shadow-2xl">
          {/* Couple Names */}
          <div className="text-center mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto animate-fade-in-delayed"></div>
          </div>

          {/* Blessing Message */}
          <div className="text-center mb-12 animate-fade-in-slow">
            <h3 className="text-xl md:text-2xl font-medium text-orange-300 mb-6 font-italiana">
              Allah&apos;s Blessing Message
            </h3>

            {/* Arabic Text */}
            <div className="mb-8">
              <p
                className="text-2xl md:text-3xl text-white/90 font-arabic leading-relaxed mb-4"
                dir="rtl"
              >
                يَتَفَكَّرُون
              </p>
            </div>
          </div>

          {/* Meaning Section */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 md:p-10 animate-fade-in-slower">
            <div className="text-center mb-6">
              <h4 className="text-lg font-medium text-orange-400 mb-4">
                Meaning:
              </h4>
            </div>

            <blockquote className="text-center">
              <p className="text-white/90 text-xs md:text-lg leading-relaxed italic mb-6 max-w-3xl mx-auto">
                &quot;And among the signs of His power is that He created for
                you wives of your own kind, so that you would be inclined and
                feel at ease with them, and He made among you a feeling of love
                and affection. Indeed, in that there are truly signs for a
                person who thinks.&quot;
              </p>

              <footer className="text-orange-300 font-medium">
                (QS. Ar-Rum: 21)
              </footer>
            </blockquote>
          </div>

          {/* Decorative Bottom Element */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-4 animate-fade-in-slowest">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
              <div className="w-3 h-3 border border-orange-400 transform rotate-45"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-1/6 left-8 w-16 h-16 bg-orange-200/15 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/6 right-8 w-24 h-24 bg-orange-300/10 blur-2xl animate-float-gentle"></div>
        <div className="absolute top-2/3 left-16 w-12 h-12 bg-orange-400/8 blur-lg animate-twinkle-slow"></div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&display=swap");

        .font-arabic {
          font-family: "Amiri", serif;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
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
            transform: scale(1.8);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-120px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(120px);
            opacity: 0;
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(120px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-120px);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 8px rgba(251, 146, 60, 0.4);
          }
          50% {
            box-shadow: 0 0 25px rgba(251, 146, 60, 0.7);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
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

        @keyframes fade-in-slower {
          0% {
            opacity: 0;
            transform: translateY(35px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-slowest {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes twinkle-slow {
          0%,
          100% {
            opacity: 0.08;
          }
          50% {
            opacity: 0.25;
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-slide-right {
          animation: slide-right 12s linear infinite;
        }
        .animate-slide-left {
          animation: slide-left 14s linear infinite;
        }
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.8s ease-out;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 2.4s ease-out;
        }
        .animate-fade-in-slower {
          animation: fade-in-slower 3s ease-out;
        }
        .animate-fade-in-slowest {
          animation: fade-in-slowest 3.6s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        .animate-float-gentle {
          animation: float-gentle 7s ease-in-out infinite;
        }
        .animate-twinkle-slow {
          animation: twinkle-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Greeting;

"use client";

import React from "react";

interface GreetingProps {
  guestName?: string;
}

const Greeting: React.FC<GreetingProps> = ({ guestName }) => {
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
          {/* Guest Welcome (if provided) */}
          {guestName && (
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-italiana text-orange-300 mb-4">
                Welcome, {guestName}
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
            </div>
          )}

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
    </div>
  );
};

// Default export
export default Greeting;

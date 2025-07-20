"use client";

import React from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import LoveStory from "./components/LoveStory";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Message from "./components/Message";
import Footer from "./components/Footer";
import WeddingDetails from "./components/WeddingDetails";
import GiftSection from "./components/Gift";
import BrideGroom from "./components/BrideGroom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Hero />
      <BrideGroom />
      <WeddingDetails />
      <Countdown />
      <LoveStory />
      <Gallery />
      <RSVP />
      <Message />
      <GiftSection />
      <Footer />
    </div>
  );
}

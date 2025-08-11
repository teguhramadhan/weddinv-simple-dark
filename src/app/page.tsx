"use client";

import React from "react";
import GuestPage from "./[guestname]/page";
import Countdown from "./components/Countdown";
import LoveStory from "./components/LoveStory";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Message from "./components/Message";
import Footer from "./components/Footer";
import WeddingDetails from "./components/WeddingDetails";
import GiftSection from "./components/Gift";
import BrideGroom from "./components/BrideGroom";
import Gretting from "./components/Greeting";
import { Guest } from "./types/guest";

interface HomePageProps {
  guest?: Guest | null; // Make guest optional
}

export default function HomePage({ guest }: HomePageProps) {
  return (
    <div className="min-h-screen bg-black font-inter">
      <GuestPage params={{ guestname: guest?.fullName ?? "default" }} />
      <Gretting />
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

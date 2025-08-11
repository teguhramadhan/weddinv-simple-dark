import { notFound } from "next/navigation";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import HeroInvitation from "../components/HeroInvitation";
import GiftSection from "../components/Gift";
import Footer from "../components/Footer";
import Message from "../components/Message";
import RSVP from "../components/RSVP";
import Gallery from "../components/Gallery";
import StorylineGallery from "../components/LoveStory";
import Countdown from "../components/Countdown";
import WeddingDetails from "../components/WeddingDetails";
import BrideGroom from "../components/BrideGroom";
import Greeting from "../components/Greeting";
import InvitationCard from "../components/InvitationCard";

// Helper function to convert Firestore data to plain objects
function convertFirestoreData(data: any): any {
  if (data === null || data === undefined) return data;

  if (data.toDate && typeof data.toDate === "function") {
    // Handle Firestore Timestamps
    return data.toDate().toISOString();
  }

  if (Array.isArray(data)) {
    return data.map(convertFirestoreData);
  }

  if (typeof data === "object") {
    const converted: any = {};
    for (const key in data) {
      converted[key] = convertFirestoreData(data[key]);
    }
    return converted;
  }

  return data;
}

// Helper function to generate URL slug from fullName (same as in Dashboard)
function generateUrlSlugFromName(fullName: string) {
  return (
    fullName
      .toLowerCase()
      .trim()
      // Replace multiple spaces with single space first
      .replace(/\s+/g, " ")
      // Replace spaces with hyphens
      .replace(/\s/g, "-")
      // Remove special characters except hyphens and alphanumeric
      .replace(/[^a-z0-9\-]/g, "")
      // Remove multiple consecutive hyphens
      .replace(/-+/g, "-")
      // Remove leading and trailing hyphens
      .replace(/^-|-$/g, "")
  );
}

interface Props {
  params: { guestname: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function GuestPage({ params }: Props) {
  // Decode URL slug
  const urlSlug = decodeURIComponent(params.guestname).toLowerCase();
  console.log("🔍 URL Slug from params:", urlSlug);

  const snapshot = await getDocs(collection(db, "guests"));
  console.log("📊 Total guests in Firebase:", snapshot.docs.length);

  // Find guest where slug (from Firestore) matches the URL slug
  const guestData = snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...convertFirestoreData(doc.data()),
    }))
    .find((guest) => {
      const firestoreSlug = generateUrlSlugFromName(guest.slug || "");
      const isMatch = firestoreSlug === urlSlug;
      console.log(
        `🔎 Slug in DB: ${firestoreSlug} === ${urlSlug} ? ${isMatch}`
      );
      return isMatch;
    });

  console.log("✅ Found guest data:", guestData);

  if (!guestData) {
    console.log("❌ Guest not found!");
    return notFound();
  }

  return (
    <div className="bg-black">
      <InvitationCard guest={guestData} />
      <HeroInvitation guest={guestData} />
      <Greeting />
      <BrideGroom />
      <WeddingDetails />
      <Countdown />
      <StorylineGallery />
      <Gallery />
      <Message />
      <GiftSection />
      <RSVP guest={guestData} />
      <Footer />
    </div>
  );
}

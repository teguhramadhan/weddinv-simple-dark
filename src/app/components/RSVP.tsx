"use client";

import { useEffect, useState } from "react";
import { Guest } from "../types/guest";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { CheckCircle2 } from "lucide-react";
import Swal from "sweetalert2";

export default function RSVPForm({ guest }: { guest: Guest }) {
  const [form, setForm] = useState({
    fullname: guest.fullName,
    address: guest.address || "", // ✅ address ditambahkan
    email: "",
    confirmationNumber: guest.confirmationNumber,
    attendance: "",
    guestCount: 1,
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isFormLocked, setIsFormLocked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const checkExistingRSVP = async () => {
    const rsvpDoc = await getDoc(doc(db, "rsvp", guest.confirmationNumber));
    if (rsvpDoc.exists()) {
      const existingRSVP = rsvpDoc.data();
      setForm({
        fullname: existingRSVP.fullname || guest.fullName,
        address: existingRSVP.address || guest.address || "", // ✅ ambil address juga
        email: existingRSVP.email || "",
        confirmationNumber: guest.confirmationNumber,
        attendance: existingRSVP.attendance || "",
        guestCount: existingRSVP.guestCount || 1,
      });
      setHasSubmitted(true);
      setIsFormLocked(true);
    }
  };

  useEffect(() => {
    checkExistingRSVP();
  }, []);

  const handleUnlockForm = () => {
    setIsFormLocked(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await setDoc(doc(db, "rsvp", guest.confirmationNumber), {
      ...form,
      updatedAt: new Date(),
    });

    setHasSubmitted(true);
    setIsFormLocked(true);

    Swal.fire({
      icon: "success",
      title: "RSVP submitted!",
      text: "Thank you for your response.",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        {isFormLocked && (
          <div className="bg-blue-900/20 border border-green-500 p-4 mb-6 mx-4 md:mx-12">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <p className="text-green-400 text-sm font-medium">
                Your RSVP has been confirmed and is now locked for security.
              </p>
            </div>
            <button
              onClick={handleUnlockForm}
              className="mt-2 text-xs text-white hover:text-green-200 underline"
            >
              Need to make changes? Click here to unlock
            </button>
          </div>
        )}

        {hasSubmitted && !isFormLocked && (
          <div className="bg-green-900/20 border border-green-500 p-3 mb-6 mx-4 md:mx-12">
            <p className="text-green-400 text-sm">
              ✓ You have already submitted your RSVP. You can update it below if
              needed.
            </p>
          </div>
        )}

        <div className="space-y-4 sm:space-y-6 mx-4 md:mx-12">
          <div className="group">
            <label className="block text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/20 px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              readOnly
            />
          </div>

          <div className="group">
            <label className="block text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
              Your Address
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Your Address"
              className="w-full bg-white/5 border border-white/20 px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              readOnly
            />
          </div>

          <div className="group">
            <label className="block text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/20 px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              required
            />
          </div>

          <div className="group">
            <label className="block text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
              Confirmation Number
            </label>
            <input
              type="text"
              name="confirmationNumber"
              value={form.confirmationNumber}
              onChange={handleChange}
              placeholder="Confirmation Number"
              className="w-full bg-white/5 border border-white/20 px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              readOnly
            />
          </div>

          <div className="group">
            <label className="block text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
              Will you attend?
            </label>
            <select
              name="attendance"
              value={form.attendance}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/20 px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              required
            >
              <option value="" disabled hidden>
                Will you attend?
              </option>
              <option value="yes" className="bg-black text-white">
                Yes, I will attend
              </option>
              <option value="no" className="bg-black text-white">
                Sorry, I can't attend
              </option>
            </select>
          </div>

          <div className="group">
            <label className="block text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              name="guestCount"
              value={form.guestCount}
              onChange={handleChange}
              min={1}
              max={5}
              placeholder="Number of Guests"
              className="w-full bg-white/5 border border-white/20 px-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          <button
            type="submit"
            className="group relative w-full bg-black/50 border border-orange-400 px-6 sm:px-8 py-3 sm:py-4 text-orange-400 overflow-hidden transition-all duration-500 hover:text-black disabled:opacity-50"
            disabled={isFormLocked}
          >
            <div className="absolute inset-0 bg-orange-400 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            <div className="relative flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-sm sm:text-base md:text-lg font-light tracking-wider uppercase">
                {hasSubmitted ? "Update RSVP" : "Submit RSVP"}
              </span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

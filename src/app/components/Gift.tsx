"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  CreditCard,
  Smartphone,
  QrCode,
  X,
  Gift,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GiftSection = () => {
  const [copiedText, setCopiedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      window.navigator.vibrate?.(50); // Haptic feedback di mobile
      setCopiedText(type);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const bankAccounts = [
    {
      bank: "BCA",
      accountNumber: "1234567890",
      accountName: "John Doe",
      logo: "/images/ic/bca-logo.png",
    },
    {
      bank: "Mandiri",
      accountNumber: "1470-0098-7654",
      accountName: "John Doe",
      logo: "/images/ic/mandiri-logo.png",
    },
  ];

  const ewallets = [
    {
      type: "GoPay",
      number: "081234567890",
      name: "John Doe",
      logo: "/images/ic/gopay-logo.png",
    },
    {
      type: "OVO",
      number: "081234567890",
      name: "John Doe",
      logo: "/images/ic/ovo-logo.png",
    },
  ];

  const address = {
    street: "Jl. Mawar No. 123",
    area: "RT 01/RW 05, Kelurahan Bunga",
    city: "Jakarta Selatan 12345",
    province: "DKI Jakarta",
  };

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-4xl lg:text-6xl font-light mb-4 font-italiana">
            Wedding Gift
          </h2>
          <p className="text-gray-500 lg:max-w-3xl mx-auto text-xs lg:text-lg mb-8">
            Your prayers and blessings are a truly meaningful gift to us.
            However, if giving is an expression of love, you can give a gift
            through various payment methods below.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="relative py-4 px-8 border border-orange-500 text-sm md:text-base lg:text-lg font-medium text-orange-400 hover:text-white overflow-hidden transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:w-0 before:bg-orange-600 before:transition-all before:duration-500 before:ease-out hover:before:w-full inline-block items-center gap-2 whitespace-nowrap"
          >
            <span className="relative inline-flex gap-4 z-10">
              <Gift className="w-4 h-4 md:w-5 md:h-5" />
              Open Gift Info
            </span>
          </button>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-2 p-8">
          <p className="text-gray-300 text-xs lg:text-lg lg:max-w-lg mx-auto leading-relaxed">
            Thank you for your presence and prayers. May it be a blessing for us
            both.
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            aria-modal="true"
            role="dialog"
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)} // Klik backdrop
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-black/20 border border-white/20 max-w-6xl w-full max-h-[90vh] overflow-y-auto my-12"
              onClick={(e) => e.stopPropagation()} // Stop bubble
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <h3 className="text-2xl font-semibold text-orange-400 font-italiana">
                  Gift Information
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Transfer Bank */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <CreditCard className="w-6 h-6 text-orange-400" />
                      <h4 className="text-xl font-semibold">Transfer Bank</h4>
                    </div>

                    <div className="space-y-6">
                      {bankAccounts.map((account, index) => (
                        <div
                          key={index}
                          className="bg-neutral-800 p-6 border border-white/10"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <Image
                              src={account.logo}
                              alt={`${account.bank} logo`}
                              width={64}
                              height={64}
                              className="w-16 h-16 object-contain"
                            />
                            <h5 className="text-lg font-bold text-orange-400">
                              {account.bank}
                            </h5>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-gray-400 mb-1">
                                Nomor Rekening
                              </p>
                              <div className="flex items-center justify-between bg-neutral-700 p-3">
                                <span className="font-mono text-sm">
                                  {account.accountNumber}
                                </span>
                                <button
                                  onClick={() =>
                                    copyToClipboard(
                                      account.accountNumber,
                                      `${account.bank}-number`
                                    )
                                  }
                                  className="text-orange-400 hover:text-orange-300 transition"
                                >
                                  {copiedText === `${account.bank}-number` ? (
                                    <Check className="w-4 h-4" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm text-gray-400 mb-1">
                                Atas Nama
                              </p>
                              <div className="flex items-center justify-between bg-neutral-700 p-3">
                                <span className="text-sm">
                                  {account.accountName}
                                </span>
                                <button
                                  onClick={() =>
                                    copyToClipboard(
                                      account.accountName,
                                      `${account.bank}-name`
                                    )
                                  }
                                  className="text-orange-400 hover:text-orange-300 transition"
                                >
                                  {copiedText === `${account.bank}-name` ? (
                                    <Check className="w-4 h-4" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* E-Wallet */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Smartphone className="w-6 h-6 text-orange-400" />
                      <h4 className="text-xl font-semibold">E-Wallet</h4>
                    </div>

                    <div className="space-y-6">
                      {ewallets.map((ewallet, index) => (
                        <div
                          key={index}
                          className="bg-neutral-800 p-6 border border-white/10"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <Image
                              src={ewallet.logo}
                              alt={`${ewallet.type} logo`}
                              width={64}
                              height={64}
                              className="w-16 h-16 object-contain"
                            />

                            <h5 className="text-lg font-bold text-orange-400">
                              {ewallet.type}
                            </h5>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-gray-400 mb-1">
                                Nomor
                              </p>
                              <div className="flex items-center justify-between bg-neutral-700 p-3">
                                <span className="font-mono text-sm">
                                  {ewallet.number}
                                </span>
                                <button
                                  onClick={() =>
                                    copyToClipboard(
                                      ewallet.number,
                                      `${ewallet.type}-number`
                                    )
                                  }
                                  className="text-orange-400 hover:text-orange-300 transition"
                                >
                                  {copiedText === `${ewallet.type}-number` ? (
                                    <Check className="w-4 h-4" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm text-gray-400 mb-1">
                                Atas Nama
                              </p>
                              <div className="flex items-center justify-between bg-neutral-700 p-3">
                                <span className="text-sm">{ewallet.name}</span>
                                <button
                                  onClick={() =>
                                    copyToClipboard(
                                      ewallet.name,
                                      `${ewallet.type}-name`
                                    )
                                  }
                                  className="text-orange-400 hover:text-orange-300 transition"
                                >
                                  {copiedText === `${ewallet.type}-name` ? (
                                    <Check className="w-4 h-4" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* QRIS & Address */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <QrCode className="w-6 h-6 text-orange-400" />
                        <h4 className="text-xl font-semibold">QRIS</h4>
                      </div>

                      <div className="text-center bg-neutral-800 p-6 border border-white/10">
                        <Image
                          src="/images/ic/qris.jpg"
                          alt="QRIS"
                          width={128}
                          height={128}
                          className="w-32 h-32 object-contain mx-auto mb-4"
                        />

                        <p className="text-gray-300 text-sm">
                          Scan QR Code untuk transfer melalui e-wallet atau
                          mobile banking.
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="bg-neutral-800 p-6 border border-white/10">
                        <div className="space-y-2 mb-4">
                          <p className="font-semibold">Sarah & James</p>
                          <p className="text-gray-300 text-sm">
                            {address.street}
                          </p>
                          <p className="text-gray-300 text-sm">
                            {address.area}
                          </p>
                          <p className="text-gray-300 text-sm">
                            {address.city}
                          </p>
                          <p className="text-gray-300 text-sm">
                            {address.province}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            copyToClipboard(
                              `${address.street}, ${address.area}, ${address.city}, ${address.province}`,
                              "address"
                            )
                          }
                          className="w-full bg-orange-400 hover:bg-orange-500 text-black font-semibold py-3 px-4 flex items-center justify-center gap-2 transition"
                        >
                          {copiedText === "address" ? (
                            <>
                              <Check className="w-4 h-4" />
                              Alamat Tersalin
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Salin Alamat
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftSection;

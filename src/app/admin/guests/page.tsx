"use client";

import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface RSVP {
  id: string;
  attendance: string;
  confirmationNumber: string;
  email: string;
  fullname: string;
  guestCount: number;
  updatedAt: any;
  address: string;
}

export default function GuestBookPage() {
  const [rsvpList, setRsvpList] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSVPs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "rsvp"));
        const rsvps: RSVP[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            attendance: data.attendance || "-",
            confirmationNumber: data.confirmationNumber || "-",
            email: data.email || "-",
            fullname: data.fullname || "-",
            guestCount: Number(data.guestCount) || 0,
            updatedAt: data.updatedAt || null,
            address: data.address || "-",
          };
        });
        setRsvpList(rsvps);
      } catch (error) {
        console.error("Error fetching RSVPs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRSVPs();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Buku Tamu</h2>
      <p className="text-gray-600 mb-4">Lihat dan moderasi ucapan dari tamu.</p>

      {loading ? (
        <p>Loading data...</p>
      ) : rsvpList.length === 0 ? (
        <p>Tidak ada data RSVP.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Alamat</th>
                <th className="p-2 border">Jumlah Tamu</th>
                <th className="p-2 border">Kehadiran</th>
                <th className="p-2 border">Kode Konfirmasi</th>
                <th className="p-2 border">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {rsvpList.map((rsvp, i) => (
                <tr key={rsvp.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">{rsvp.fullname}</td>
                  <td className="p-2 border">{rsvp.email}</td>
                  <td className="p-2 border">{rsvp.address}</td>
                  <td className="p-2 border">{rsvp.guestCount}</td>
                  <td className="p-2 border capitalize">{rsvp.attendance}</td>
                  <td className="p-2 border">{rsvp.confirmationNumber}</td>
                  <td className="p-2 border">
                    {rsvp.updatedAt?.seconds
                      ? new Date(rsvp.updatedAt.seconds * 1000).toLocaleString(
                          "id-ID"
                        )
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

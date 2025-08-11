"use client";

import { db, analytics } from "../../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
  DocumentData,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { logEvent } from "firebase/analytics";
import { Loader2, Upload, Download, Users, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";

interface Guest {
  id?: string;
  slug: string;
  fullName: string;
  address: string;
  confirmationNumber?: string;
}

function generateConfirmationNumber(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function Dashboard() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editGuest, setEditGuest] = useState<Guest | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchGuests();

    if (analytics) {
      logEvent(analytics, "admin_dashboard_opened");
    }
  }, []);

  function slugifyName(name: string) {
    return name
      .toLowerCase()
      .replace(/[^\w\s]/g, "") // Hapus tanda baca (, . dll)
      .trim()
      .replace(/\s+/g, "-"); // Ganti spasi dengan "-"
  }

  function generateConfirmationNumber(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const fetchGuests = async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "guests"));
      const data: Guest[] = [];
      querySnapshot.forEach((docItem) => {
        const guestData = docItem.data() as DocumentData;
        data.push({
          id: docItem.id,
          slug: guestData.slug,
          fullName: guestData.fullName,
          address: guestData.address,
          confirmationNumber: guestData.confirmationNumber ?? docItem.id, // << pake doc.id sebagai confirmationNumber
        });
      });
      setGuests(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Load",
        text: "Could not fetch guest data from Firebase.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const result = await Swal.fire({
      title: "Confirm Upload",
      text: "Are you sure you want to upload this file?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Upload",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) {
      e.target.value = "";
      return;
    }

    setIsUploading(true);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      let successCount = 0;
      let skipCount = 0;

      for (const item of jsonData) {
        const { slug, fullName, address } = item as Guest;

        if (!slug || !fullName || !address) {
          skipCount++;
          continue;
        }

        await addDoc(collection(db, "guests"), {
          slug,
          fullName,
          address,
          confirmationNumber: generateConfirmationNumber(8),
          createdAt: Timestamp.now(),
        });

        successCount++;
      }

      Swal.fire({
        icon: "success",
        title: "Upload Successful",
        html: `
          <p>Guest data uploaded successfully!</p>
          <p class="text-sm text-gray-600 mt-2">
            Successful: ${successCount}<br>
            Skipped: ${skipCount}
          </p>
        `,
      });

      await fetchGuests();
    } catch (error) {
      console.error("Upload error:", error);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "An error occurred during upload.",
      });
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  const handleDownload = () => {
    if (guests.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "No Data",
        text: "No guest data available for download.",
      });
      return;
    }

    setIsDownloading(true);

    try {
      const worksheet = XLSX.utils.json_to_sheet(guests);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Guests");

      const timestamp = new Date()
        .toISOString()
        .slice(0, 16)
        .replace(/:/g, "-");
      const filename = `guests-${timestamp}.xlsx`;

      XLSX.writeFile(workbook, filename);

      Swal.fire({
        icon: "success",
        title: "Download Successful",
        text: `File ${filename} downloaded successfully.`,
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Download Failed",
        text: "An error occurred while downloading.",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDelete = async (guest: Guest) => {
    const result = await Swal.fire({
      title: "Confirm Delete",
      text: `Are you sure you want to delete guest: ${guest.fullName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
    });

    if (!result.isConfirmed || !guest.id) return;

    try {
      await deleteDoc(doc(db, "guests", guest.id));
      Swal.fire("Deleted!", "Guest data has been removed.", "success");
      await fetchGuests();
    } catch (error) {
      Swal.fire("Failed", "An error occurred while deleting data.", "error");
    }
  };

  const handleEditSubmit = async () => {
    if (!editGuest?.id) return;
    try {
      await updateDoc(doc(db, "guests", editGuest.id), {
        slug: editGuest.slug,
        fullName: editGuest.fullName,
        address: editGuest.address,
      });
      setShowEditModal(false);
      Swal.fire("Success", "Guest data updated!", "success");
      await fetchGuests();
    } catch (error) {
      Swal.fire("Failed", "Could not save changes.", "error");
    }
  };

  if (isLoading) {
    return (
      <div className="p-10 text-center text-gray-600">
        <Loader2 className="animate-spin w-8 h-8 mx-auto mb-4" />
        <p>Loading guest data...</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your guest data</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleDownload}
              disabled={isDownloading || guests.length === 0}
              className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4 mr-2" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download Excel Format
                </>
              )}
            </button>

            <div className="bg-blue-50 px-4 py-2 rounded-lg">
              <div className="flex items-center text-blue-700">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">{guests.length} Guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Upload Excel
          </h2>
          <label
            htmlFor="excel-upload"
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg px-6 py-10 cursor-pointer transition
              ${
                isUploading
                  ? "border-blue-300 bg-blue-50 text-blue-400"
                  : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              }
            `}
          >
            <Upload className="w-8 h-8 mb-3 text-blue-600" />
            <p className="text-sm text-gray-600">
              Drag and drop Excel file here or{" "}
              <span className="text-blue-600 underline">
                click to select file
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Only .xlsx & .xls files supported
            </p>
            <input
              id="excel-upload"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleUpload}
              disabled={isUploading}
              className="hidden"
            />
          </label>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Guest Data</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Slug
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invitation Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Confirmation ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {guests.length > 0 ? (
                  guests.map((guest, index) => (
                    <tr key={guest.id}>
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{guest.slug}</td>
                      <td className="px-6 py-4">{guest.fullName}</td>
                      <td className="px-6 py-4">{guest.address}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`http://localhost:3000/${slugifyName(
                            guest.slug
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Open Invitation
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        {guest.confirmationNumber ?? "-"}
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        <button
                          onClick={() => {
                            setEditGuest(guest);
                            setShowEditModal(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(guest)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-gray-500">
                      No guest data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && editGuest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Edit Guest Data</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={editGuest.id}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100 text-gray-500"
                placeholder="Confirmation ID"
              />
              <input
                type="text"
                value={editGuest.slug}
                onChange={(e) =>
                  setEditGuest({ ...editGuest, slug: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
                placeholder="Slug"
              />
              <input
                type="text"
                value={editGuest.fullName}
                onChange={(e) =>
                  setEditGuest({ ...editGuest, fullName: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
                placeholder="Full Name"
              />
              <input
                type="text"
                value={editGuest.address}
                onChange={(e) =>
                  setEditGuest({ ...editGuest, address: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
                placeholder="Address"
              />
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

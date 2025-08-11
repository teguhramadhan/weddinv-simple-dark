"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Toaster } from "react-hot-toast";
import Sidebar from "../components/admin/Sidebar";
import { Loader2 } from "lucide-react";
import "@/app/globals.css";
import Head from "next/head";

<Head>
  <title>Dashboard Admin</title>
  <meta
    name="description"
    content="Halaman khusus admin untuk mengelola undangan."
  />
</Head>;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      try {
        setIsAuthorized(true);
        const token = await user.getIdToken();
        document.cookie = `admin_token=${token}; path=/; max-age=${
          60 * 60 * 24 * 7
        }`;
      } catch (error) {
        console.error("Error getting user token:", error);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <Loader2 className="animate-spin w-8 h-8 mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Memeriksa status login...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) return null;

  return (
    <div className="flex min-h-screen bg-gray-100 font-inter">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
        <Toaster position="top-right" />
      </main>
    </div>
  );
}

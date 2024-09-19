"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { Toaster } from "react-hot-toast";
import  Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()

  // const pathname = usePathname();
  useEffect(() => {
    const cookies = Cookies.get("accessToken")
    const localStorage = window.localStorage.getItem("accessToken")

if (!localStorage && !cookies) {
  router.push("/pages/login")
  
} 
   setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {loading ? <Loader /> : children}
      <Toaster position="top-right" containerClassName="mt-4" />
      </body>
    </html>
  );
}

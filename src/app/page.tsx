import ECommerce from "@/app/admin/dashboard/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "E-shop Dashboard Page | E-shop - Next.js Dashboard Kit",
  description: "This is E-shop Home page for NextAdmin Dashboard Kit",
};

export default function Home() {
  return (
    <>
      
        <ECommerce />
     
    </>
    
  );
}

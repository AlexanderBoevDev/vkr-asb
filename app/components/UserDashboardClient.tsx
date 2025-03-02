"use client";

import React from "react";
import { ToastProvider } from "@heroui/react";
import SubmissionsListClient from "@/app/components/SubmissionsListClient";

export default function UserDashboardClient() {
  return (
    <div className="relative">
      <ToastProvider placement="top-center" toastOffset={60} />
      <SubmissionsListClient />
    </div>
  );
}

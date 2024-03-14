"use server";
import AlertCreateForm from "@/components/alerts/alerts-create-form";
import { Suspense } from "react";

export default async function AlertsCreatePage() {
  return (
    <div className="flex justify-center">
      <div className="w-80 flex flex-col justify-center items-center">
        <h3 className="text-lg">Create a New Alert</h3>
        <Suspense fallback={<div>Loading...</div>}>
          <AlertCreateForm />
        </Suspense>
      </div>
    </div>
  );
}

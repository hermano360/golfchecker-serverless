"use server";
import AlertCreateForm from "@/components/alerts/alerts-create-form";
import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";

export default async function AlertsCreatePage() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex justify-center flex-col max-w-lg border border-4 rounded p-5">
        <Suspense fallback={<Spinner />}>
          <AlertCreateForm />
        </Suspense>
      </div>
    </div>
  );
}

"use server";
import AlertCreateForm from "@/components/alerts/alerts-create-form";

export default async function AlertsCreatePage() {
  return (
    <div>
      <h3 className="text-lg">Create a New Alert</h3>
      <AlertCreateForm />
    </div>
  );
}

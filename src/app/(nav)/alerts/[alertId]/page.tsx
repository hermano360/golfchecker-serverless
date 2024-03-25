import AlertDeleteForm from "@/components/alerts/alerts-delete-form";
import AlertItem from "@/components/alerts/alert-item";
import { Skeleton } from "@nextui-org/react";
import { Suspense } from "react";

interface AlertsShowPageProps {
  params: {
    alertId: string;
  };
}

const SampleAlert = () => {
  return (
    <div>
      <Skeleton style={{ height: "90px" }} className="mb-2" />;
    </div>
  );
};

export default async function AlertsShowPage({ params }: AlertsShowPageProps) {
  const { alertId } = params;

  return (
    <div className="border rounded p-2 mb-2">
      <div className="mb-2">
        <Suspense fallback={<SampleAlert />}>
          <AlertItem alertId={alertId} />
        </Suspense>
      </div>
      <AlertDeleteForm alertId={alertId} />
    </div>
  );
}

import AlertList from "@/components/alerts/alert-list";
import { Skeleton } from "@nextui-org/react";
import { Suspense } from "react";
import { fetchAlertsByUser } from "@/db/queries/alerts";

const SampleAlerts = () => {
  return (
    <div>
      <Skeleton style={{ height: "90px" }} className="mb-2" />
      <Skeleton style={{ height: "90px" }} className="mb-2" />
      <Skeleton style={{ height: "90px" }} className="mb-2" />
      <Skeleton style={{ height: "90px" }} className="mb-2" />
    </div>
  );
};
export default function AlertsPage() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex justify-center flex-col max-w-lg border border-4 rounded p-5">
        <Suspense fallback={<SampleAlerts />}>
          <AlertList fetchData={fetchAlertsByUser} />
        </Suspense>
      </div>
    </div>
  );
}

import { Button, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import paths from "@/paths";
import AlertList from "@/components/alerts/alert-list";
import { fetchAlertsByUser } from "@/db/queries/alerts";
import { Suspense } from "react";

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

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <div className="mt-3">
          <Link href={paths.matchesShow()}>
            <Button color="primary">View Current Matches</Button>
          </Link>
        </div>
        <div className="mt-3">
          <Link href={paths.alertCreate()}>
            <Button color="primary">Create a New Alert</Button>
          </Link>
        </div>
        <h1 className="text-xl m-2">Your Next Alerts</h1>
        <Suspense fallback={<SampleAlerts />}>
          <AlertList fetchData={fetchAlertsByUser} />
        </Suspense>
      </div>
    </div>
  );
}

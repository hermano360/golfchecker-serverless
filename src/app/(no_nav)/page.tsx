import { Button, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import paths from "@/paths";
import AlertList from "@/components/alerts/alert-list";
import { fetchAlertsByUser } from "@/db/queries/alerts";
import { Suspense } from "react";
import Image from "next/image";
import HomeActionButton from "@/components/home/action-button";

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
    <div className="flex justify-center">
      <div className="w-1/2 flex justify-center flex-col max-w-sm border border-4 rounded p-12">
        <div className="overflow-hidden rounded-full shadow-lg mb-3">
          <Image
            src="/main-image.png"
            width={500}
            height={500}
            alt="Main Logo Of App"
          />
        </div>
        <div className="text-4xl font-bold text-center mb-3">Golf Checker</div>
        <div className="text-lg text-center font-thin mb-5">
          Find and book tee times at top golf courses
        </div>
        <Suspense>
          <HomeActionButton />
        </Suspense>
      </div>
    </div>
  );
}

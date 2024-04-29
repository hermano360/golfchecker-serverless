import { fetchMatchesByUser } from "@/db/queries/matches";
import MatchList from "@/components/matches/match-list";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";

export default async function MatchesPage() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex justify-center flex-col max-w-lg border border-4 rounded p-5">
        <Suspense fallback={<Spinner />}>
          <MatchList fetchData={fetchMatchesByUser} />
        </Suspense>
      </div>
    </div>
  );
}

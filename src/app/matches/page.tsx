import { fetchMatchesByUser } from "@/db/queries/matches";
import MatchList from "@/components/matches/match-list";

export default async function MatchesPage() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Your Matches</h1>

        <MatchList fetchData={fetchMatchesByUser} />
      </div>
    </div>
  );
}

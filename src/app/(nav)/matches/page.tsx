import { fetchMatchesByUser } from "@/db/queries/matches";
import MatchList from "@/components/matches/match-list";

export default async function MatchesPage() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex justify-center flex-col max-w-lg border border-4 rounded p-5">
        <MatchList fetchData={fetchMatchesByUser} />
      </div>
    </div>
  );
}

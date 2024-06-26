import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
// import { retrieveFunctionMap } from "~/db/retrieveQueries";

// NOTE: Define the shape of the data that will be fetched from the database
interface PlayerStat {
  season_id: number;
  pts: number;
  ast: number;
}

// NOTE: This is a loader function that will be called by Remix to fetch data from the database
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const playerId = params.playerId;
  const seasonId = params.seasonId;

  try {
    // const playerStats = await retrieveFunctionMap.retrievePlayerGameLog(playerId, seasonId);
    // return json({ playerStats });
  } catch (error) {
    console.error("Failed to retrieve player game log data", error);
    throw error;
  }
};

// NOTE: This is the React component that will render the data fetched from the database
export default function PlayersStatsPage() {
  const { playerStats } = useLoaderData<typeof loader>();

  if (!playerStats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Lebron James</h1>
      {/* <ul> */}
      {/*   {playerStats.map((stat: PlayerStat, index: number) => ( */}
      {/*     <li key={index}> */}
      {/*       {`Season: ${stat.season_id}, Points: ${stat.pts}, Assists: ${stat.ast}`} */}
      {/*     </li> */}
      {/*   ))} */}
      {/* </ul> */}
    </div>
  );
}

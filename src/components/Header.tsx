import { Scoreboard } from "./Scoreboard";

export function Header() {
  return (
    <div className="flex justify-between">
      <h1>Speed Carnaugh Filling Game</h1>
      <Scoreboard />
    </div>
  );
}

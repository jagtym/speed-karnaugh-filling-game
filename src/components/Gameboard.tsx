import { Clickable } from "./Clickable";

export function Gameboard() {
  const fields = [];

  return (
    <div className="grid grid-cols-4 gap-4">
      <Clickable />
    </div>
  );
}

import { Scoreboard } from "./Scoreboard";

interface IHeaderProps {
  correct: number;
  errors: number;
}

export function Header(props: IHeaderProps) {
  const { correct, errors } = props;
  return (
    <div className="flex justify-between">
      <div>
        <h1>Speed Carnaugh Filling Game</h1>
        <p>For Carnaugh table dc\ba, order: 00, 01, 11, 10</p>
      </div>
      <Scoreboard correct={correct} errors={errors} />
    </div>
  );
}

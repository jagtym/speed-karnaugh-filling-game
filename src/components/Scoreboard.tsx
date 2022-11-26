interface IScoreboardProps {
  correct: number;
  errors: number;
}

export function Scoreboard(props: IScoreboardProps) {
  const { correct, errors } = props;

  return (
    <div className="flex gap-5">
      <span className="text-2xl text-green-500">Correct: {correct} </span>
      <span className="text-2xl text-red-600">Errors: {errors} </span>
    </div>
  );
}

interface IScoreboardProps {
  correct: number;
  errors: number;
}

export function Scoreboard(props: IScoreboardProps) {
  const { correct, errors } = props;

  return (
    <div className="flex gap-5">
      <span>Correct: {correct} </span>
      <span>Errors: {errors} </span>
    </div>
  );
}

interface IClickableProps {
  index: number;
  click: (index: number) => void;
}

export function Clickable(props: IClickableProps) {
  const { click, index } = props;

  return (
    <div
      className="bg-slate-100 box-border h-28 rounded-3xl hover:bg-slate-400 transition-colors hover:cursor-pointer"
      onClick={() => {
        click(index);
      }}
    ></div>
  );
}

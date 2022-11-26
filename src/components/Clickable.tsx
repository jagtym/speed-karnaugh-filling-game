interface IClickableProps {
  index: number;
  click: (index: number) => void;
}

export function Clickable(props: IClickableProps) {
  const { click, index } = props;

  return (
    <div
      className="bg-gray-400 box-border h-28 rounded-3xl hover:bg-gray-600 transition-colors hover:cursor-pointer"
      onClick={() => {
        click(index);
      }}
    ></div>
  );
}

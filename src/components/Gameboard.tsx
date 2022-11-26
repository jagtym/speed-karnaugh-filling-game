import { Clickable } from "./Clickable";

interface IGameboardProps {
  click: (index: number) => void;
  fields: Array<number>;
}

export function Gameboard(props: IGameboardProps) {
  const { click, fields } = props;

  let clickables: Array<JSX.Element> = [];
  fields.forEach((idx) => {
    clickables.push(<Clickable index={idx} click={click} key={idx} />);
  });

  return <div className="grid grid-cols-4 gap-4">{clickables}</div>;
}

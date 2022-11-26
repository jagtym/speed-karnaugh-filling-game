import { useState } from "react";
import { Gameboard } from "./components/Gameboard";
import { Header } from "./components/Header";

function App() {
  const [correct, setCorrect] = useState(0);
  const [errors, setErrors] = useState(0);

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const fields = !checked
    ? [0, 1, 3, 2, 4, 5, 7, 6, 12, 13, 15, 14, 8, 9, 11, 10]
    : [
        0, 1, 3, 2, 4, 5, 7, 6, 12, 13, 15, 14, 8, 9, 11, 10, 16, 17, 19, 18,
        20, 21, 23, 22, 28, 29, 31, 30, 24, 25, 27, 26,
      ];

  const randomChoice = (array: Array<number>) => {
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
  };

  const [current, setCurrent] = useState(randomChoice(fields));

  const fieldClicked = (index: number) => {
    if (index === current) {
      setCorrect(correct + 1);
      setCurrent(randomChoice(fields));
    } else {
      setErrors(errors + 1);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="w-box flex: 1">
          <Header correct={correct} errors={errors} />
          <h1 className="my-5 text-3xl">Current: {current}</h1>
          <div className="flex gap-2 mb-4">
            <p className="text-red-400">Hard mode?</p>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            ></input>
          </div>
          <Gameboard fields={fields} click={fieldClicked} />
        </div>
      </div>
      <footer className="">© 2022 Tymoteusz Jagła</footer>
    </div>
  );
}

export default App;

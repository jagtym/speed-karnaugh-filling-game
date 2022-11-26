import { Gameboard } from "./components/Gameboard";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-box">
        <Header />
        <h1 className="">Current: 0</h1>
        <Gameboard />
      </div>
    </div>
  );
}

export default App;

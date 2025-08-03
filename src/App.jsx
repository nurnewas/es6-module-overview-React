import { useEffect, useState } from "react";
import "./App.css";
import Sunglass from "./Components/Sunglass/Sunglass";
import Watch from "./Components/Watch/Watch";
import "../public/watchList.json";

function App() {
  const [watchList, SetWatchList] = useState([]);
  useEffect(() => {
    fetch("watchList.json")
      .then((res) => res.json())
      .then((data) => SetWatchList(data));
  }, []);
  return (
    <>
      <h1>Es 6 Related </h1>
      {watchList.map((watch) => (
        <Watch key={watch.id} watch={watch} />
      ))}
      <hr />
      <Sunglass />
    </>
  );
}

export default App;

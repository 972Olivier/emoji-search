import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import { useState } from "react";
import emojiList from "./assets/emojiList.json";
// console.log("this is===>", emojiList);
function App() {
  const [search, setSearch] = useState("");
  const [mouse, setMouse] = useState("hidden");

  return (
    <div className="App">
      <Search find={search} changeFind={setSearch}></Search>
      <main>
        <Line
          find={search}
          data={emojiList}
          mouseEvent={mouse}
          setMouseEvent={setMouse}
        ></Line>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [color, setcolor] = useState("Olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3
        shadow-lg bg-white rounded-full px-5 py-3">
          <button onClick={() => setcolor("red")}
           className=" shadow-lg rounded-full outline-none px-7 py-2 bg-red-800 text-white">
            Red</button>

            <button onClick={() => setcolor("Green")} 
            className=" rounded-full outline-none px-7 py-2 bg-green-800 text-white">
            Green</button>

            <button onClick={() => setcolor("blue")}
            className=" rounded-full outline-none px-7 py-2 bg-blue-800 text-white">
            Blue</button>

            <button onClick={() => setcolor("purple")}
            className=" rounded-full outline-none px-7 py-2 bg-purple-800 text-white">
            Purple</button>

            <button onClick={() => setcolor("orange")}
            className=" rounded-full outline-none px-7 py-2 bg-orange-800 text-white">
            Orange</button>

            <button onClick={() => setcolor("black")}
            className=" rounded-full outline-none px-7 py-2 bg-black text-white">
            Black</button>

            <button onClick={() => setcolor("yellow")}
            className=" rounded-full outline-none px-7 py-2 bg-yellow-800 text-white">
            Yellow</button>

            <button onClick={() => setcolor("pink")}
            className=" rounded-full outline-none px-7 py-2 bg-pink-800 text-white">
            Pink</button>

            <button onClick={() => setcolor("grey")}
            className=" rounded-full outline-none px-7 py-2  text-white"
            style={{backgroundColor: "grey"}}>
            Grey</button>

            
        </div>
      </div>

    </div>
  );
}

export default App;

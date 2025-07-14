import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-start justify-center bg-sky-950">
        <h1 className="text-red-400">Password Genrator </h1>
        <br />
        <div className="bg-white fixed top-20 p-5 py-10 rounded-xl">
          <div className="bg-white rounded-2xl flex items-center justify-between">
            <input type="text" className=" bg-white w-full border-1 outline-none mx-1 p-1 py-2 rounded-2xl ps-3 " placeholder="Your Password..." />
            <button className="bg-sky-400 text-white rounded-2xl px-3 py-[4px] ">Copy</button>
          </div>
          <div className="bg-white my-5 p-2 flex gap-2">
            <input type="range" min={8} max={20} id="length"/>
            <label htmlFor="length">Length</label>
            <input type="checkbox" id="number"/>
            <label htmlFor="number">Number</label>
            <input type="checkbox" id="character"/>
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

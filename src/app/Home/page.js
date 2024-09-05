"use client";
import { React, useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/Index/${name}`;
  };

  return (
    <div className="h-screen">
      <div className=" p-10  text-black flex justify-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className=" mr-2 p-2 w-[20rem] rounded-[0.5rem]"
        />
        <button
          onClick={handleSubmit}
          className="bg-white p-2 w-[5rem] rounded-[0.5rem]"
        >
          {" "}
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;

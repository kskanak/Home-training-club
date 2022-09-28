import React, { useEffect, useState } from "react";
import Excercise from "../Excercise/Excercise";

const Body = () => {
  const [excercises, setExcercise] = useState([]);
  useEffect(() => {
    fetch("excercises.json")
      .then((res) => res.json())
      .then((data) => setExcercise(data));
  }, []);
  return (
    <div className="body-container flex flex-col-reverse md:grid grid-cols-5">
      {/* excercise container */}
      <div className="excercise-container bg-slate-200 col-span-4">
        <h2 className="text-center text-3xl font-semibold my-6">
          Select Excercises
        </h2>
        <div className="allexcercised grid grid-cols-3 gap-8 px-14 pb-10">
          {excercises.map((excercise) => (
            <Excercise excercise={excercise} key={excercise.id}></Excercise>
          ))}
        </div>
      </div>
      {/* sidebar  */}
      <div className="sidebar bg-orange-600 md:h-screen sticky top-0">
        <h3>sidebar</h3>
      </div>
    </div>
  );
};

export default Body;
<h2>This is body</h2>;

import React from "react";

const Excercise = ({ excercise }) => {
  const { id, img, name, sets, time, details } = excercise;
  console.log(excercise);
  return (
    <div className="excercise-cart shadow-2xl shadow-cyan-500/50 border border-gray-300 rounded-lg">
      <img
        className="h-40 w-72 mx-auto px-1 py-2 rounded-lg block"
        src={img}
        alt=""
      />
      <div className="excercise-info px-5">
        <h2 className="text-xl font-semibold">Name: {name}</h2>
        <h2 className="text-sm"> {details} </h2>
        <h2 className="text-lg font-semibold"> Sets: {sets} rounds</h2>
        <h2 className="text-lg font-semibold"> Duration: {time}s</h2>
      </div>
    </div>
  );
};

export default Excercise;

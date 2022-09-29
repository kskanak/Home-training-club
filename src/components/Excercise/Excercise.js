import React from "react";

const Excercise = ({ excercise, getExcerciseOnclick }) => {
  const { id, img, name, sets, time, details } = excercise;

  return (
    <div className="excercise-cart shadow-2xl shadow-cyan-500/50 border border-gray-300 rounded-lg relative h-96 mt-4 md:mt-0">
      <img
        className="h-40 w-72 mx-auto px-1 py-2 rounded-lg block"
        src={img}
        alt=""
      />
      <div className="excercise-info px-5">
        <h2 className="text-xl font-semibold">Excercise: {name}</h2>
        <h2 className="text-sm"> {details} </h2>
        <h2 className="text-lg font-semibold"> Sets: {sets} rounds</h2>
        <h2 className="text-lg font-semibold"> Duration: {time}s</h2>
      </div>

      <button
        className=" text-white font-semibold w-full bg-slate-800 absolute bottom-0 rounded-b-lg h-9"
        onClick={(e) => {
          getExcerciseOnclick(excercise, e);
        }}
      >
        Add to WorkOut
      </button>
    </div>
  );
};

export default Excercise;

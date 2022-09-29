import React, { useEffect, useState } from "react";
import userImg from "../../images/user.png";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../Utilites/localStorage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = ({ allSelectedExcercise }) => {
  const [breakTimes, setBreakTimes] = useState();
  useEffect(() => {
    const savedBreakTime = getFromLocalStorage();
    const breaktime = savedBreakTime["breaktime"];
    setBreakTimes(breaktime);
  }, []);
  let excerciseTime = allSelectedExcercise.reduce(
    (prv, crnt) => prv + crnt.time,
    0
  );

  const getBreakTimes = (e) => {
    const seletedBreakTime = e.target.innerText;
    setBreakTimes(seletedBreakTime);
    setToLocalStorage(seletedBreakTime);
  };

  const notify = () =>
    toast.success("Wow Today's Activity done, Congratulations!");
  return (
    <div>
      <div className="user flex justify-center my-6">
        <img src={userImg} alt="" className="h-10 rounded-lg " />
        <div className="user-info mx-2 text-white">
          <h2 className="text-sm">Khaladul Alam</h2>
          <h2 className="text-xs">Bonossri, Dhaka</h2>
        </div>
      </div>

      <div className="user-bodyInfo  flex justify-around">
        <div className="weight bg-slate-800 text-white font-semibold p-2 rounded-lg text-sm">
          <p>
            65<small>kg</small>
          </p>
          <p>Weight</p>
        </div>

        <div className="height bg-slate-800 text-white font-semibold  p-2 rounded-lg text-sm">
          <p>
            5.4<small>inch</small>
          </p>
          <p>Height</p>
        </div>

        <div className="age bg-slate-800 text-white font-semibold p-2 rounded-lg text-sm">
          <p>
            28<small>Years</small>
          </p>
          <p>Age</p>
        </div>
      </div>

      {/* break time section */}
      <div className="breakTime-section  my-4">
        <h2 className="text-center font-semibold text-xl my-4 text-white">
          Break Times(Second)
        </h2>
        <div className="braktime-btn flex justify-around">
          <button
            className="bg-slate-800 w-10 h-10 rounded-lg text-white"
            onClick={(e) => getBreakTimes(e)}
          >
            20
          </button>
          <button
            className="bg-slate-800 w-10 h-10 rounded-lg text-white"
            onClick={(e) => getBreakTimes(e)}
          >
            30
          </button>
          <button
            className="bg-slate-800 w-10 h-10 rounded-lg text-white"
            onClick={(e) => getBreakTimes(e)}
          >
            60
          </button>
          <button
            className="bg-slate-800 w-10 h-10 rounded-lg text-white"
            onClick={(e) => getBreakTimes(e)}
          >
            90
          </button>
          <button
            className="bg-slate-800 w-10 h-10 rounded-lg text-white"
            onClick={(e) => getBreakTimes(e)}
          >
            120
          </button>
        </div>
      </div>

      <div className="excercise-details">
        <h2 className="text-lg font-semibold text-white text-center my-4">
          Excercise Details
        </h2>
        <h2 className="bg-slate-700 text-white  py-2 px-2 mx-2 rounded-lg">
          Excercise-Time :{" "}
          {excerciseTime > 60 ? excerciseTime / 60 : excerciseTime}{" "}
          {excerciseTime > 60 ? "minutes" : "seconds"}.
        </h2>
        <h2 className="bg-slate-700 text-white  mx-2 py-2 px-2 rounded-lg mt-2">
          BreakTime : {breakTimes} seconds.
        </h2>
      </div>
      <div className="activityBtn text-center my-6">
        <button
          className="bg-green-800  rounded-lg w-4/5 h-8 text-white"
          onClick={notify}
        >
          Activity Done
        </button>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Sidebar;

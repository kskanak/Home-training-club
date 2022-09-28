import React from "react";
import userImg from "../../images/user.png";
const Sidebar = () => {
  return (
    <div>
      <div className="user flex justify-center my-6">
        <img src={userImg} alt="" className="h-10 rounded-lg " />
        <div className="user-info mx-2 text-white">
          <h2 className="text-sm">Meliodas</h2>
          <h2 className="text-xs">Stanford, USA</h2>
        </div>
      </div>

      <div className="user-bodyInfo  flex justify-around">
        <div className="weight text-slate-800 font-semibold bg-slate-100 p-2 rounded-lg text-sm">
          <p>
            65<small>kg</small>
          </p>
          <p>Weight</p>
        </div>

        <div className="height text-slate-800 font-semibold bg-slate-200 p-2 rounded-lg text-sm">
          <p>
            5.4<small>inch</small>
          </p>
          <p>Height</p>
        </div>

        <div className="age text-slate-800 font-semibold bg-slate-300 p-2 rounded-lg text-sm">
          <p>
            28<small>Years</small>
          </p>
          <p>Age</p>
        </div>
      </div>

      {/* break time section */}
      <div className="breakTime-section  my-4">
        <h2 className="text-center font-semibold text-xl my-4 text-white">
          Break Times
        </h2>
        <div className="braktime-btn flex justify-around">
          <button className="bg-slate-800 w-10 h-10 rounded-lg text-white">
            20<span>s</span>
          </button>
          <button className="bg-slate-800 w-10 h-10 rounded-lg text-white">
            30<span>s</span>
          </button>
          <button className="bg-slate-800 w-10 h-10 rounded-lg text-white">
            60<span>s</span>
          </button>
          <button className="bg-slate-800 w-10 h-10 rounded-lg text-white">
            90<span>s</span>
          </button>
          <button className="bg-slate-800 w-10 h-10 rounded-lg text-white">
            120<span>s</span>
          </button>
        </div>
      </div>

      <div className="excercise-details">
        <h2 className="text-lg font-semibold text-white text-center my-4">
          Excercise Details
        </h2>
        <h2 className="bg-slate-700 text-white w-4/5 mx-auto py-2 px-2 rounded-lg">
          Excercise-Time :{" "}
        </h2>
        <h2 className="bg-slate-700 text-white w-4/5 mx-auto py-2 px-2 rounded-lg mt-2">
          BreakTime :{" "}
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;

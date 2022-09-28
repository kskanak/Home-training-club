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
        <div className="weight text-slate-800 font-semibold bg-slate-100 p-2 rounded-lg">
          <p>
            65<small>kg</small>
          </p>
          <p>Weight</p>
        </div>

        <div className="height text-slate-800 font-semibold bg-slate-200 p-2 rounded-lg">
          <p>
            5.4<small>inch</small>
          </p>
          <p>Height</p>
        </div>

        <div className="age text-slate-800 font-semibold bg-slate-300 p-2 rounded-lg">
          <p>
            28<small>Years</small>
          </p>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

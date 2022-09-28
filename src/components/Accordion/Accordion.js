import React from "react";

const Accordion = () => {
  return (
    <div className="py-5 bg-slate-200 ">
      <h2 className="text-3xl font-semibold text-center my-5">React Blog</h2>

      <div className="accordion w-4/5 mx-auto shadow-2xl shadow-cyan-500/50">
        {/* blog one */}
        <div tabindex="0" class="collapse group">
          <div class="collapse-title bg-cyan-600 text-primary-content group-focus:bg-cyan-800 group-focus:text-secondary-content">
            How Does react workd?
          </div>
          <div class="collapse-content bg-slate-800 text-primary-content group-focus:bg-slate-800 group-focus:text-secondary-content">
            <p>
              React creates a copy of actual Dom, its called V-DOM. It render
              every time UI changes and check with diff algorithm with main Dom
              and check the changes and Makes the changes on UI
            </p>
          </div>
        </div>
        {/* blog two */}
        <div tabindex="1" class="collapse group my-6">
          <div class="collapse-title bg-cyan-600 text-primary-content group-focus:bg-cyan-800 group-focus:text-secondary-content">
            Difference between props and state
          </div>
          <div class="collapse-content bg-slate-800 text-primary-content group-focus:bg-slate group-focus:text-secondary-content">
            <p>
              {" "}
              Props shortform of property. Props are immutable, cant change its
              value, object, array, element and function can be pass as props.
              and state is mutable, it changes when the user click or intarefare
              or take an action on UI then the state changes.
            </p>
          </div>
        </div>
        {/* blog three */}
        <div tabindex="2" class="collapse group">
          <div class="collapse-title bg-cyan-600 text-primary-content group-focus:bg-cyan-800 group-focus:text-secondary-content">
            uses of useEffect rather than load Data?
          </div>
          <div class="collapse-content bg-slate-800 text-primary-content group-focus:bg-slate-800 group-focus:text-secondary-content">
            <p>
              Running once on mount: fetch API data Running on state change:
              validating input field Running on state change: live filtering
              Running on state change: trigger animation on new array value
              Running on props change: update paragraph list on fetched API data
              update Running on props change: updating fetched API data to get
              BTC updated price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

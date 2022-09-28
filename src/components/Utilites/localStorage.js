const getFromLocalStorage = () => {
  const savedBreakTimeString = localStorage.getItem("Breaktime");
  let savedBreakTime = {};
  if (savedBreakTimeString) {
    savedBreakTime = JSON.parse(savedBreakTimeString);
  }
  return savedBreakTime;
};

const setToLocalStorage = (value) => {
  const savedBreakTime = getFromLocalStorage();

  savedBreakTime["breaktime"] = value;
  localStorage.setItem("Breaktime", JSON.stringify(savedBreakTime));
};

export { getFromLocalStorage, setToLocalStorage };

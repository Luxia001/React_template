import React from "react";
import { timeFullTH } from "../helpers/time";

function PageNotFound() {
  const currentDate = new Date();
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-slate-900 text-red-500 h-screen">
      <div>
        <p className="text-5xl">PageNotFound</p>
      </div>
      <div>
        <p className="text-3xl">{timeFullTH(currentDate)}</p>
      </div>
    </div>
  );
}

export default PageNotFound;

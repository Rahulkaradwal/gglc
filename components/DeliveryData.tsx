import React from "react";
import RisingNumber from "./RisingNumbers";
const divClass = "flex flex-col items-center justify-center  ";
const textClass = "text-lg md:text-3xl text-5xl text-golden-800 font-bold";
const descriptionClass =
  "font-bold text-center text-[0.6rem] md:text-sm lg:text-lg";
function DeliveryData() {
  return (
    <div className=" w-full h-28 md:h-40 bg-green-50 flex text-center justify-around p-4   ">
      <div className={divClass}>
        <p className={textClass}>
          <RisingNumber targetNumber={70} duration={1500} />%
        </p>
        <p className={descriptionClass}>Average Saving</p>
      </div>
      <div className={divClass}>
        <p className={textClass}>
          <RisingNumber targetNumber={20000} duration={1500} />+
        </p>
        <p className={descriptionClass}>Number of packages shipped</p>
      </div>
      <div className={divClass}>
        <p className={textClass}>
          <RisingNumber targetNumber={80} duration={1500} />+
        </p>
        <p className={descriptionClass}>Distribution Points</p>
      </div>
    </div>
  );
}

export default DeliveryData;

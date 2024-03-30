import React from "react";
import backend from "../assets/images/icons/backend.png";
import wenDesign from "../assets/images/icons/webDesign.png";
import webDevelopment from "../assets/images/icons/webDevelopment.png";
import fullstack from "../assets/images/icons/fullStack.png";

function Expertise() {
  return (
    <div id="Expertise">
      <div className="container pt-10">
        <div className="text-center text-headingColor text-[2rem] font-[700]">
          <h1>My Expertise</h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pt-10 gap-y-4 gap-x-2 ">
          <div className="flex flex-col  py-4 px-1 ml-4 items-center justify-start rounded-lg bg-neutral-50 shadow-xl ">
            <figure className="shadow-xl">
              <img className="w-10 h-10 " src={wenDesign} alt="" />
            </figure>
            <h1 className="text-headingColor text-center pt-10 font-bold text-xl sm:text-xl md:text-xl  lg:text-xl">
              Responsive  Web Design
            </h1>
            <p className="font-[500] italic line-clamp-5 text-wrap sm:line-clamp-4 sm:px-4 px-3 py-1 text-sm lg:text-[15px] leading-7 mt-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur soluta, cum atque neque debitis consequatur illo
              ipsum{" "}
            </p>
          </div>
          <div className="flex flex-col py-4 px-1 ml-4 items-center justify-start rounded-lg bg-neutral-50 shadow-xl ">
            <figure className="shadow-xl">
              <img className="w-10 h-10 " src={webDevelopment} alt="" />
            </figure>
            <h1 className="text-headingColor text-center pt-10 font-bold text-xl">
              Web Development
            </h1>
            <p className="font-[500] italic line-clamp-5 text-wrap sm:line-clamp-4 sm:px-4 px-3 py-1 text-sm lg:text-[15px] leading-7 mt-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur soluta, cum atque neque debitis consequatur illo
              ipsum{" "}
            </p>
          </div>

          <div className="flex flex-col py-4 px-1 ml-4 items-center justify-start rounded-lg bg-neutral-50 shadow-xl ">
            <figure className="shadow-xl">
              <img className="w-10 h-10 " src={fullstack} alt="" />
            </figure>
            <h1 className="text-headingColor text-center pt-10 font-bold text-xl">
              Fullstack Development
            </h1>
            <p className="font-[500] italic line-clamp-5 text-wrap sm:line-clamp-4 sm:px-4 px-3 py-1 text-sm lg:text-[15px] leading-7 mt-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur soluta, cum atque neque debitis consequatur illo
              ipsum{" "}
            </p>
          </div>

          <div className="flex flex-col py-4 px-1 ml-4 items-center justify-start rounded-lg bg-neutral-50 shadow-xl ">
            <figure className="shadow-xl">
              <img className="w-10 h-10 " src={backend} alt="" />
            </figure>
            <h1 className="text-headingColor text-center pt-10 font-bold text-xl">
              Backend Development
            </h1>
            <p className="font-[500] italic line-clamp-5 text-wrap sm:line-clamp-4 sm:px-4 px-3 py-1 text-sm lg:text-[15px] leading-7 mt-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur soluta, cum atque neque debitis consequatur illo
              ipsum{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

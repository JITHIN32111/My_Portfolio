import React from "react";
import portfolios from "../assets/data/portfolioData";
function Modal({ activateId, setShowModal }) {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activateId);
  console.log(portfolio);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40 ">
      <div className="max-w-[800px] min-w-[400px] sm:max-w-[600px]  absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            {portfolio && (
              <img src={portfolio.imgUrl} className="rounded-[8px]" alt="" />
            )}
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import React, { useEffect, useState } from "react";
import data from "../assets/data/portfolioData";
import Modal from "./Modal";
function Portfolio() {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [acttiveId, setActiveId] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };
  const showModalHandler = (id) => {
    
    setShowModal(true);

    setActiveId(id);
  };
  useEffect(() => {
    if (filter === "All") {
      setPortfolios(data);
    }
    if (filter === "Web") {
      const filterData = data.filter((item) => item.category === "Web Design");
      setPortfolios(filterData);
    }
    if (filter === "Ux") {
      const filterData = data.filter((item) => item.category === "Ux");
      setPortfolios(filterData);
    }
  }, [filter]);

  return (
    <div id="portfolio">
      <div className="container">
        {/* heading and buttons */}
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              Myrecent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setFilter("All");
              }}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => {
                setFilter("Web");
              }}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Full stack
            </button>
            <button
              onClick={() => {
                setFilter("Ux");
              }}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Frontend{" "}
            </button>
          </div>
        </div>
        {/* heading and buttons */}

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full  md:w-[30.8%] lg:w-[30.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>
              <div className="w-full h-full bg-primeColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={loadMoreHandler}
            className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
          >
            Load More{" "}
          </button>
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} activateId={acttiveId} />
      )}
    </div>
  );
}

export default Portfolio;

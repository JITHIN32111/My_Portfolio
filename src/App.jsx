// import React, { useEffect } from "react";
// import Aos from "aos";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./UI/Hero";
// import Portfolio from "./UI/Portfolio";
// import AboutMe from "./UI/AboutMe";
// import Expertise from "./UI/Expertise";
// function App() {
//   useEffect(() => {
//     Aos.init();
//   }, []);
//   return (
//     // max-width: 1170px;
//     // padding-left: 60px;
//     // padding-right: 60px;
//     // margin: auto;
//     <div>
//       <Header />
//       <main>
//         <Hero />
//         <AboutMe/>
//         <Portfolio/>
//         <Expertise/>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";

function App() {
  return (
    <div className="px-16 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-gray-50 shadow-xl rounded-lg">
          <div className="flex flex-col">
            <h1>Haiha</h1>
            <p className="text-[12px] px-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              possimus at fugit! Corporis delectus voluptas ratione ad
              reiciendis quia{" "}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 shadow-xl rounded-lg">
          <div className="flex flex-col">
            <h1>Haiha</h1>
            <p className="text-sm px-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              possimus at fugit! Corporis delectus voluptas ratione ad
              reiciendis quia{" "}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 shadow-xl rounded-lg">
          <div className="flex flex-col">
            <h1>Haiha</h1>
            <p className="text-sm px-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              possimus at fugit! Corporis delectus voluptas ratione ad
              reiciendis quia{" "}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 shadow-xl rounded-lg">
          <div className="flex flex-col">
            <h1>Haiha</h1>
            <p className="text-sm px-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              possimus at fugit! Corporis delectus voluptas ratione ad
              reiciendis quia{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

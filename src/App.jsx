import React, { useEffect } from "react";
import Aos from "aos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./UI/Hero";
import Portfolio from "./UI/Portfolio";
import AboutMe from "./UI/AboutMe";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    // max-width: 1170px;
    // padding-left: 60px;
    // padding-right: 60px;
    // margin: auto;
    <div>
      <Header />
      <main>
        <Hero />
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
// import React from 'react'

// function App() {
//   return (
//     <div>
//       <div className='bg-black text-white w-full h-full fixed top-0 left-0 '>
//         <div className='absolute top-1/2 left-1/2 text-white '>sssssssss</div>
//       </div>
//     </div>
//   )
// }

// export default App

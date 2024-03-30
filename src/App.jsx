import React, { useEffect } from "react";
import Aos from "aos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./UI/Hero";
import Portfolio from "./UI/Portfolio";
import AboutMe from "./UI/AboutMe";
import Expertise from "./UI/Expertise";
import Contact from "./UI/Contact";
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
        <Expertise/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;






















// import React from 'react'
// import User from './UI/User'
// import Profiles from './UI/Profiles'
// import Side from './UI/Side'
// import NewHead from './UI/NewHead'
// function App() {
//   return (
//     <div>
// <NewHead/>
//   <div className='flex mt-4  flex-row justify-center  gap-x-4 items-center'>
//       <User  />
//       <Profiles/>
//       <Side/>

//     </div>
//     </div>
  
//   )
// }

// export default App

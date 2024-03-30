import React,{useState} from "react";
import "../App.css";
export default function Header() {
    const [open,isOpen]=useState(false)
  return (
    <header className="w-full sticky top-[-10px] bg-white shadow-xl z-30 h-[80px] leading-[80px] flex items-center">
      <div className="container">

        <div className="flex items-center justify-between">
        {/* logo */}
          <div className="flex  items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primeColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">J</span>
            <div className="leading-[20px]">
                <h2 className="text-xl text-smallTextColor font-[700]">JIthin</h2>
                 <p className="text-smallTextColor text-sm font-[500]">personal</p>
            </div>
          </div>
       {/* logo */}

{/* menu start */}
             <div className="menu hidden md:flex">
                <ul className="flex items-center gap-10">
                    <li><a className="text-smallTextColor" href="about">About</a></li>
                    <li><a className="text-smallTextColor" href="services">Services</a></li>
                    <li><a className="text-smallTextColor" href="portfolio">Portfolio</a></li>
                    <li><a className="text-smallTextColor" href="contact">Contact</a></li>
                </ul>
             </div>

{/* menu end */}

{/* menu right */}
               <div className="items-center gap-4  hidden md:flex">
                     <button className="flex items-center gap-2  text-smallTextColor font-[600] border border-solid border-smallTextColor
                     py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                     {/* <i class="ri-file-download-fill"></i> */}
                     Download CV                  
                    </button>
                    
               </div>
               <span className="text-2xl md:hidden" >
                {open? <i class="ri-close-circle-line"onClick={()=>{
                isOpen(false)
            }}></i> :<i class="ri-menu-3-line" onClick={()=>{
                isOpen(true)
            }}></i>}
                  
                    </span>
{/* menu right end */}

        </div>

        {open? <div className="bg-gray-100  border-4 w-full flex items-center justify-center ">
       <ul className="flex-col  items-center ">
                    <li><a  href="about">About</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a  href="portfolio">Portfolio</a></li>
                    <li><a  href="contact">Contact</a></li>
                </ul>
       </div>:''}
      
      </div>
    </header>
  );
}

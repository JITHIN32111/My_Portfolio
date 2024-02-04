import React from "react";
import heroImg from "../assets/images/hero.svg";
import Countup from "react-countup";
export default function Hero() {
  return (
    <section className="pt-0 ">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left  */}

          <div className="w-full md:basis-1/2 ">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              
              className="text-headingColor font-[600] text-16px "
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[50px] leading-[-35px] sm:leading-[46px]  mt-5"
            >
              I'am Jithin C <br />
              Software Developer{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#">
                <button
                  className="bg-primeColor
                     text-white font-[500] flex items-center gap-2
                     hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a
                href=""
                className="text-smallTextColor font-[600]
                 text-[16px] border-b border-solid border-smallTextColor"
              >
                lets connect
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2
                  text-headingColor font-[500] sm:mt-12 mt-8 text-sm lg:text-[15px] leading-7  pl-0 pr-0 lg:pl-14 lg:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eum harum delectus ipsam, consequatur nisi, unde ipsa
           
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600] ">
                Follow me:
              </span>
              <span>
                <a
                  href=""
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href=""
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href=""
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a
                  href=""
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-facebook-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* hero left  end*/}
          {/* hero img */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* hero img */}
          {/* right content */}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import aboutMeImg from "../assets/images/about.jpg";
import Marquee from "react-fast-marquee";

import js from '../assets/images/icons/js.png'
import ReactIcon from '../assets/images/icons/React.png'
import html5 from '../assets/images/icons/html5.png'
import Css from '../assets/images/icons/Css.png'
import tailwind from '../assets/images/icons/tailwind.png'
import bootstrap from '../assets/images/icons/bootstrap.png'
import redux from '../assets/images/icons/redux.png'
import nodejs from '../assets/images/icons/nodejs.png'
import express from '../assets/images/icons/express.png'
import firebase from '../assets/images/icons/firebase.png'
import jwt from '../assets/images/icons/jwt.png'
import mysql from '../assets/images/icons/mysql.png'
import aws from '../assets/images/icons/aws.png'
import git from '../assets/images/icons/git.png'

const iconImages = [js, ReactIcon, html5, Css, tailwind, bootstrap, redux, nodejs, express, firebase, jwt, mysql, aws, git];

function AboutMe() {
  return (
    <div id="AboutMe">
      <div className="container pt-8">
        <div className="flex lg:flex-row flex-col-reverse md:flex-col  items-center justify-center gap-16">
          <figure className="basis-1/3 "  data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000">
            <img src={aboutMeImg} className="rounded-xl" alt="" />
          </figure>
          <div
       data-aos="fade-right"
       data-aos-delay="50"
       data-aos-duration="1000"
          className="basis-1/2 flex flex-col items-center justify-center">
            <h1 className="text-headingColor text-[2rem] font-[700] ">
              About Me
            </h1>
            <p className="text-headingColor font-[500] py-6 text-sm lg:text-[15px] leading-7 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              fuga maxime? Nihil dignissimos quaerat nisi porro repudiandae
              laudantium omnis cupiditate. Pariatur eius eligendi,
              necessitatibus quaerat a repellendus debitis cupiditate maiores.
            </p>
          </div>
        </div>
<div className="py-6 px-6 sm:px-2">
<Marquee>
          {iconImages.map((icon, index) => (
            <div key={index}>
              <img className="w-10 h-10 ml-8" src={icon} alt="" />
            </div>
          ))}
        </Marquee>
</div>
       
      </div>
    </div>
  );
}

export default AboutMe;

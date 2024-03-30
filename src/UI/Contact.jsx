import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div className="container py-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-headingColor text-[2rem] font-[700]">
            Contact Me
          </h1>
          <p
            className="flex gap-2
                  text-headingColor font-[500] mt-2 text-xl leading-7"
          >
            Don't be shy hit me up
          </p>
        </div>

     <div className="flex flex-col sm:flex-row justify-center pt-10 gap-x-36 items-center ">
         
      <div className="flex flex-col gap-y-2 justify-center items-center sm:mr-0 mr-44">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor"><path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM20.8284 21.0711L18 24L15.1716 21.0711C13.6095 19.4535 13.6095 16.8308 15.1716 15.2132C16.7337 13.5956 19.2663 13.5956 20.8284 15.2132C22.3905 16.8308 22.3905 19.4535 20.8284 21.0711ZM19.3897 19.6818C20.2034 18.8392 20.2034 17.4451 19.3897 16.6025C18.614 15.7992 17.386 15.7992 16.6103 16.6025C15.7966 17.4451 15.7966 18.8392 16.6103 19.6818L18 21.1209L19.3897 19.6818Z"></path></svg> 
      <p className="flex gap-2 text-headingColor  font-bold mt-2 text-2xl text-opacity-75 leading-7">Address</p>
      <p className="flex gap-2 text-headingColor font-medium text-md leading-7">Malappuram,Kerala</p>
      </div>
        <div className="flex flex-row gap-14 sm:gap-24 mt-6 sm:mt-0">
        <div className="flex flex-col gap-y-2 justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>   
      <p className="flex gap-2 text-headingColor  font-bold mt-2 text-2xl text-opacity-75 leading-7">Phone</p>
      <p className="flex gap-2 text-headingColor font-medium text-md leading-7"> 9061029928</p>
      </div>

      <div className="flex flex-col gap-y-2 justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor"><path d="M2.24283 6.85435L11.4895 1.3086C11.8062 1.11865 12.2019 1.11872 12.5185 1.30878L21.7573 6.85433C21.9079 6.9447 22 7.10743 22 7.28303V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.28315C2 7.10748 2.09218 6.94471 2.24283 6.85435ZM4 8.13261V19H20V8.13214L12.0037 3.33237L4 8.13261ZM12.0597 13.6983L17.3556 9.23532L18.6444 10.7647L12.074 16.3017L5.36401 10.7717L6.63599 9.2283L12.0597 13.6983Z"></path></svg> 
      <p className="flex gap-2 text-headingColor  font-bold mt-2 text-2xl text-opacity-75 leading-7">E-mail</p>
      <p className="flex gap-2 text-headingColor font-medium text-md leading-7">jith97972@gmail.com</p>

      </div>
        </div>
     

     </div>


      </div>
    </div>
  );
}

export default Contact;

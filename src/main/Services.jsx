import React, { useEffect, useState } from "react";
import Header from "../sharedComponent/Header";
import Footer from "../sharedComponent/Footer";

function Services() {

  const images = [ '/assets/DL1.webp', '/assets/DL2.webp', '/assets/DL3.webp']

  const [img, setImg] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      // Change the background image every 2 minutes
      setImg((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 minutes in milliseconds

    return () => clearInterval(timer); // Clear the interval if the component unmounts
  }, [images]);

  const bgImage = images[img];


  return (
    <div className="bg-tetiaryColor flex flex-col mt-8 ">

    <Header/>
       <div className="flex flex-col-reverse pt-20 px-10 text-center justify-between md:flex-row md:px-20 items-center ">
        <div className="w-full md:w-[40%] text-left">
          <p className="font-bold pb-5 text-center text-2xl md:text-left md:text-3xl ">
            Empowering the Underserved Through Digital Literacy
          </p>
          <p className=" text-center md:text-left">
            Welcome to Alice Alobi Foundation, where we believe that knowledge
            is power. Our mission is to bridge the digital divide and empower
            the underserved with essential digital skills. Join us in our
            journey to create a more inclusive and equitable world.
          </p>
          <div className="text-center md:text-left pb-10">
            <div>
              <button className="bg-primaryColor rounded-lg mt-4 font-bold text-[16px]  p-2 text-tetiaryColor ">
                Donate{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mb-30  md:w-[50%] ">
          <img
            src={bgImage}
            alt="heroSection"
            className="w-full object-cover rounded-md"
            style={{transition:'background 1s ease-in-out'}}
          />
        </div>
      </div>

      <div className="w-full my-10 text-center flex flex-col  justify-center ">
        <p className="font-bold pb-5 text-center text-2xl md:text-3xl ">
          Our Services
        </p>
        <p className=" text-center">
          Dedicated to Providing Digital Literacy Services
        </p>
      </div>

      <div className="flex flex-wrap mx-12 justify-between flex-row">
        <div className="relative h-[300px] rounded-bl-[48px] rounded-lg shadow-lg w-[30%]">
        <div className="bg-primaryColor h-[120px]  rounded-tr-[48px] w-full"/>

          <img src="/assets/DL3.webp" alt="mission" className="absolute top-20 left-[38%] rounded-full object-cover h-[80px] w-[80px] "/>
          <div className="flex items-center flex-col p-4  justify-center mt-10">
          <h3 className="text-[16px] font-bold pb-4"> Certification:</h3>
         <p className="text-[14px] font-normal text-center">Earn certificates upon completing our courses, enhancing your employability and showcasing your digital skills to the world.</p>
          </div>
        </div>
        <div className="relative h-[300px] rounded-lg  rounded-bl-[48px]  shadow-lg w-[30%]">
        <div className="bg-[#F4C2C2] h-[120px]  rounded-tr-[48px] w-full"/>

          <img src="/assets/DL0.webp" alt="mission" className="absolute top-20 left-[38%] rounded-full object-cover h-[80px] w-[80px] "/>
          <div className="flex items-center flex-col p-4  justify-center mt-10">
          <h3 className="text-[16px] font-bold pb-4"> Certification:</h3>
         <p className="text-[14px] font-normal text-center">Earn certificates upon completing our courses, enhancing your employability and showcasing your digital skills to the world.</p>
          </div>
        </div>
        <div className="relative h-[300px]  rounded-bl-[48px] rounded-lg shadow-lg w-[30%]">
        <div className="bg-secondaryColor  rounded-tr-[48px] h-[120px] w-full"/>

          <img src="/assets/DL2.webp" alt="mission" className="absolute top-20 left-[38%] rounded-full object-cover h-[80px] w-[80px] "/>
          <div className="flex items-center flex-col p-4  justify-center mt-10">
          <h3 className="text-[16px] font-bold pb-4"> Certification:</h3>
         <p className="text-[14px] font-normal text-center">Earn certificates upon completing our courses, enhancing your employability and showcasing your digital skills to the world.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;

// import React, {useState} from 'react';

// import { NavBar } from './pageComponents/NavBar';
// import Header from '../sharedComponent/Header';

// function LandingPage() {

//   const [navBar, setNavBar] = useState(true);

// const showNavBar =()=>{
//   setNavBar(!navBar)
// }

//   return (
//     <div>
//       {/* <Header/> */}
//     {/* <Header showNavBar={showNavBar}
//             navBar={navBar}
//             setNavBar={setNavBar}/>
//     {navBar ? null : <NavBar/>} */}
//     </div>
//   )
// }

// export default LandingPage

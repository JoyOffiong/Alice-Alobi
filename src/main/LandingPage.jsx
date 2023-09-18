import React from "react";
import Header from "../sharedComponent/Header";
import Footer from "../sharedComponent/Footer";
import Carousel from "react-multi-carousel";
import CarouselComponent from "../sharedComponent/Carousel";

function LandingPage() {
  return (
    <div className="bg-tetiaryColor flex flex-col mt-8 ">
      <Header />
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
            src="/assets/DL2.webp"
            alt="heroSection"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="px-20 flex flex-col gap-10 mt-20">
        <div className="mb-12 font-bold text-3xl">
          {" "}
          <p>Key Activities</p>
        </div>

        <div className="mt-[24px] flex flex-row flex-wrap justify-between">

          <div className="rounded-[100px] relative h-[300px] w-[30%] ease-in-out shadow-2xl hover:scale-105">
            <div className="flex items-center justify-center absolute -top-10 left-28  rounded-full   ">
              <img
                src="/assets/DL3.webp"
                alt="mission"
                className="rounded-full object-cover h-[120px] w-[120px] "
              />
            </div>
            <div className="mt-24 p-4 absolute text-center ">
              <h3 className="font-bold text-xl pb-4 ">Free Digital Courses </h3>
              <p className="text-md font-normal">
                {" "}
                Access a wide range of digital courses, from basic computer
                skills to advanced programming, absolutely free.
              </p>
            </div>
          </div>

          <div className="rounded-[100px] relative h-[300px] w-[30%] ease-in-out shadow-2xl hover:scale-105">
            <div className="flex items-center justify-center absolute -top-10 left-28  rounded-full   ">
              <img
                src="/assets/DL1.webp"
                alt="mission"
                className="rounded-full object-cover h-[120px] w-[120px] "
              />
            </div>
            <div className="mt-24 p-4 absolute text-center ">
              <h3 className="font-bold text-xl pb-4 ">Live Workshops</h3>
              <p className="text-md font-normal">
                {" "}
                Engage in interactive live workshops conducted by industry
                experts.
              </p>
            </div>
          </div>

          <div className="rounded-[100px] relative h-[300px] w-[30%] ease-in-out shadow-2xl hover:scale-105">
            <div className="flex items-center justify-center absolute -top-10 left-28  rounded-full   ">
              <img
                src="/assets/DL2.webp"
                alt="mission"
                className="rounded-full object-cover h-[120px] w-[120px] "
              />
            </div>
            <div className="mt-24 p-4 absolute text-center ">
              <h3 className="font-bold text-xl  pb-4">Community Support </h3>
              <p className="text-md font-normal">
                {" "}
                Connect with a supportive community of learners and mentors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* carousel */}

      <div className="mx-20 mt-20">
      <div className="mb-12 font-bold text-3xl">
          {" "}
          <p>Testimonies</p>
        </div>
      <CarouselComponent/>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;

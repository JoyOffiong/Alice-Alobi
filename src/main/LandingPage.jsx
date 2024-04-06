import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from "../sharedComponent/Footer";
import { RiMenuUnfoldFill } from "react-icons/ri";
import HeroSection from "./LandingPagecomponents/heroSection";
import AboutTheChurch from "./LandingPagecomponents/AboutTheChurch";
import MajorTeachings from "./LandingPagecomponents/majorTeachings";
import WorshipSchedule from "./LandingPagecomponents/WorshipSchedule";
import Baptism from "./LandingPagecomponents/Baptism";

function LandingPage() {
  const [showNav, setShowNav] = useState(false);

  const images = ["/assets/DL1.webp", "/assets/DL2.webp", "/assets/DL3.webp"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const [activeSection, setActiveSection] = useState(null);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);

    return () => {
      "";
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="bg-tetiaryColor flex flex-col font-sans">
      <div className="top-0 mt-0 z-40 text-white font-semibold fixed w-full  bg-[black] px-12 py-4">
        <div className="flex justify-between items-center ">
          {/* logo */}
          <div className="md:w-[20%] w-full flex flex-row items-center justify-between">
            <div className="md:h-20 md:w-20 h-28 w-28">
              <img
                src="/assets/coclogo.jpg"
                alt=""
                className="w-full h-full rounded-full object-contain"
              />
            </div>
            <div className="md:hidden block">
              <button
                type="button"
                onClick={() => {
                  setShowNav(!showNav);
                  console.log(showNav);
                }}
              >
                Menu
              </button>
            </div>
          </div>

          <div className="w-0 md:w-[70%] ">
            {/*desktop navs */}
            <div className="hidden md:block justify-start">
              <div className=" md:flex text-center items-center font-[500] text-[18px] text-tetiaryColor gap-16">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  onSetActive={() => handleSetActive("home")}
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onSetActive={() => handleSetActive("about")}
                >
                  About
                </Link>
                <Link
                  to="lessons"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  activeClass="active"
                  onSetActive={() => handleSetActive("lessons")}
                >
                  Lessons
                </Link>
                <Link
                  to="contact-us"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onSetActive={() => handleSetActive("contact-us")}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* mobile nav */}
            <div
              className={`${
                showNav === true ? "block" : "hidden"
              } flex flex-col gap-y-20 text-tetiaryColor translate-x-full`}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onSetActive={() => handleSetActive("home")}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onSetActive={() => handleSetActive("about")}
              >
                About
              </Link>
              <Link
                to="lessons"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                activeClass="active"
                onSetActive={() => handleSetActive("lessons")}
              >
                Lessons
              </Link>
              <Link
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onSetActive={() => handleSetActive("contact-us")}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="home" className="mt-24">
        <HeroSection />
      </div>

      <div id="about">
        <AboutTheChurch />
      </div>

      <div id="lessons">
        <MajorTeachings />
      </div>

      <div>
        <Baptism />
      </div>
      <div id="contact-us">
        <WorshipSchedule />
      </div>

      {/* carousel */}

      {/* <div className="mx-20 mt-20">
        <div className="mb-12 font-bold text-3xl">
          {" "}
          <p>Testimonies</p>
        </div>
        <CarouselComponent />
      </div>
      <div className="h-[500px] mx-20 mt-8 rounded-lg">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=29ylsrxof48"
          controls
          width="100%"
          height="100%"
          style={{ borderRadius: "10px" }}
        />
      </div> */}

      {/* <p className="font-bold text-[20px]  mx-20 mt-8">
        {" "}
        How do you introduce technology to children? There are many fun and
        interactive ways to teach your children about technology. For example,
        you can play online games together, watch educational videos, or read
        tech-related books. You can also get them involved in projects such as
        building a computer or creating a website.{" "}
      </p> */}

      <Footer />
    </div>
  );
}

export default LandingPage;

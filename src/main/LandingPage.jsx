import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from "../sharedComponent/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import HeroSection from "./LandingPagecomponents/heroSection";
import AboutTheChurch from "./LandingPagecomponents/AboutTheChurch";
import MajorTeachings from "./LandingPagecomponents/majorTeachings";
import WorshipSchedule from "./LandingPagecomponents/WorshipSchedule";
import Baptism from "./LandingPagecomponents/Baptism";
import { AppBar, Toolbar } from "@mui/material";
import ContactUs from "./ContactUs";

function LandingPage() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };
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
    <>
      <AppBar position="fixed" className="bg-[#000] font-sans">
        <Toolbar className="justify-between py-4 bg-black  ">
          {/* Logo */}
          <div className="md:h-14 md:w-14 h-12 w-12">
            <img
              src="/assets/coclogo.jpg"
              alt=""
              className="w-full h-full rounded-full object-contain"
            />
          </div>

          {/* hamburger menu */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className=" cursor-pointer focus:outline-none md:hidden"
          >
            <MenuIcon />
          </button>
          {/* Navigation Links (Mobile) */}
          <div
            className={`md:hidden absolute flex px-4 flex-col text-black gap-y-6 top-full right-0 bg-[#fbf7ee] w-[30%] ${
              isMobileMenuVisible ? "" : "hidden"
            }`}
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
          {/* Navigation Links (Desktop) */}

          <div className="hidden md:flex flex-row gap-x-24  items-center">
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
        </Toolbar>
      </AppBar>

      <div id="home" className="font-sans">
        <HeroSection />
      </div>

      <div id="about" className="font-sans pt-24">
        <AboutTheChurch />
      </div>

      <div id="lessons" className="font-sans mt-24">
        <MajorTeachings />
      </div>

      <div className="font-sans mt-24">
        <Baptism />
      </div>

      <div className="mt-24">
        <WorshipSchedule />
      </div>
      <div id="contact-us" className="font-sans">
        <ContactUs />
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
    </>
  );
}

export default LandingPage;

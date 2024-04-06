/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */

import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <AppBar position="fixed" className="bg-[#fff]">
      <Toolbar className="lg:max-w-7xl justify-between   ">
        {/* Logo */}
        <div>
          <Typography variant="h6" className="text-[#1d443f]">
            Mentoring App
          </Typography>
        </div>

        {/* Mobile Hamburger Menu */}

        <Button
          onClick={toggleMobileMenu}
          className="text-[#1d443f] cursor-pointer focus:outline-none md:hidden"
        >
          ☰
        </Button>

        {/* Navigation Links (Mobile) */}
        <div
          className={`md:hidden absolute top-full left-0 bg-[#fbf7ee] w-[100%]   ${
            isMobileMenuVisible ? "" : "hidden"
          }`}
        >
          <ul className="px-24">
            <li className="my-14">
              <Link to="/home" className="link-no-underline mb-[20rem]">
                <p className="text-[#1d443f]">Home</p>
              </Link>
            </li>
            <li className="my-14">
              <Link to="/all-course" className="link-no-underline mb-[20rem]">
                <p className="text-[#1d443f]">Courses</p>
              </Link>
            </li>
            <li className="my-14">
              <Link to="/tutor" className="link-no-underline gap-y-24">
                <p className="text-[#1d443f]">Tutor</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links (Desktop) */}

        <div className="hidden md:flex flex-row gap-x-24  items-center">
          <Link to="/home" className="link-no-underline">
            <p className="text-[#1d443f]">Home</p>
          </Link>
          <Link to="/all-course" className="link-no-underline">
            <p className="text-[#1d443f]">Courses</p>
          </Link>
          <Link to="/tutor" className="link-no-underline ">
            <p className="text-[#1d443f]">Tutor</p>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

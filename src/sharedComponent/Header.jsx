import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenuUnfoldFill } from "react-icons/ri";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const showNavBar = () => {
    console.log(showNav);
    setShowNav(true);
  };

  return (
    <>
      <div className="top-0 mt-0 w-full text-white font-semibold static bg-[black] px-12 py-4">
        <div className="flex justify-between items-center ">
          {/* logo */}
          <div className="w-[20%] ">
            <img
              src="/assets/coclogo.jpg"
              alt=""
              className="md:h-20 md:w-20 h-50 h-50 rounded-full object-contain"
            />
          </div>

          {/*desktop navs */}
          <div className="w-[70%] flex justify-start">
            <div className="hidden md:flex text-center items-center font-[500] text-[18px] text-tetiaryColor gap-16">
              <NavLink to={"/"}>
                <p>Home</p>
              </NavLink>
              <NavLink to="#about">
                {" "}
                <p>About</p>
              </NavLink>
              <NavLink to={"/services"}>
                {" "}
                <p>Service</p>
              </NavLink>
              <NavLink to={"/contactUs"}>
                {" "}
                <p>Contact Us</p>
              </NavLink>
            </div>

            <div className="md:hidden block">
              <RiMenuUnfoldFill onClick={() => showNavBar()} />
            </div>
          </div>

          {/* mobile nav */}
          <div
            className={`md:hidden ${
              showNav && "block"
            } flex flex-col gap-y-20 text-tetiaryColor translate-x-full bg-[#540bb2]`}
          >
            <NavLink to={"/"}>
              <p>Home</p>
            </NavLink>
            <NavLink to={"/about"}>
              {" "}
              <p>About</p>
            </NavLink>
            <NavLink to={"/services"}>
              {" "}
              <p>Service</p>
            </NavLink>
            <NavLink to={"/contactUs"}>
              {" "}
              <p>Contact Us</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

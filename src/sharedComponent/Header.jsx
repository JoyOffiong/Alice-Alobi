import { Link } from "iconsax-react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <>
        <div className="rounded-2xl items-center mx-auto w-[95%]  top-0  bg-primaryColor px-8 py-4 flex justify-between">
          {/* logo */}
          <div><p className="text-[16px] text-tetiaryColor text-2xl  font-bold " ><em >Alice Alobi.</em></p></div>
  
          {/* navs */}
       
          <div className="flex text-center items-center w-[50%] font-ssemibold text-[14px] text-tetiaryColor gap-16">
           <NavLink to={'/'}><p>Home</p></NavLink> 
           <NavLink to={'/about'}> <p>About</p></NavLink> 
           <NavLink to={'/services'}> <p>Service</p></NavLink> 
           <NavLink to={'/contactUs'}> <p>Contact Us</p></NavLink> 
          </div>
  
          {/* button */}
          <div>
            <button className="bg-tetiaryColor rounded-lg font-bold   text-[16px]  p-2 hover:bg-primaryColor hover:text-tetiaryColor ">Donate </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Header;
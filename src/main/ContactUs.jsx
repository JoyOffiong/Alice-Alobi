import { Send } from "iconsax-react";
import React from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation"; // import Footer from "../sharedComponent/Footer";

function ContactUs() {
  return (
    <div className="bg-[#f5f5f7] flex w-full  md:flex-row flex-col mt-8 pb-10 pt-6 font-sans ">
      <div className=" grid md:grid-cols-2 gap-8 mx-auto ">
        {/* <div className="w-[60%] h-full">
      <img src="/assets/DL0.webp" alt="" className="object-cover w-full"/>
    </div> */}
        <div className="">
          <div className="flex flex-col gap-y-8 pt-10">
            <div className="flex items-center gap-x-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#F26522] transition-all duration-300">
                <p className="text-white ">
                  <AddLocationIcon fontSize="12px" />
                </p>
              </div>
              <div>
                <p className="text-md text-2xl">Location:</p>
                <p className="text-sm text-normal">
                  No. 17 Thomas Udoekong Street, Anua Obio, Uyo, Akwa Ibom state
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#F26522] transition-all duration-300">
                <p className="text-white ">
                  <AddLocationIcon fontSize="12px" />
                </p>
              </div>
              <div>
                <p className="text-md text-2xl">Email:</p>
                <p>cocoanuaobio@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#F26522] transition-all duration-300">
                <p className="text-white ">
                  <AddLocationIcon fontSize="12px" />
                </p>
              </div>
              <div>
                <p className="text-md text-2xl">Call:</p>
                <p>08132864386</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-8  ">
          <div className="flex gap-8">
            <div className="mt-4 text">
              <p className="font-bold text-[18px]">Contact US</p>
            </div>
          </div>

          <div className="my-5 flex flex-col mx-8 gap-4">
            <div className="flex-col flex">
              <span className="pb-2 font-medium ">Full Name</span>
              <div className="rounded-lg  border-2 border-secondaryColor p-2">
                <input className="bg-tetiaryColor" placeholder="Full Name* " />
              </div>
            </div>
            <div className="flex-col flex">
              <span className="pb-2 font-medium ">Email Address</span>
              <div className="rounded-lg  border-2 border-secondaryColor p-2">
                <input
                  className="bg-tetiaryColor"
                  placeholder="Email Address* "
                />
              </div>
            </div>
            <div className="flex-col flex">
              <span className="pb-2 font-medium ">Contact Address</span>
              <div className="rounded-lg  border-2 border-secondaryColor p-2">
                <input className="bg-tetiaryColor" placeholder="Full Name* " />
              </div>
            </div>

            <div className=" justify-end flex mt-8">
              <button className=" flex gap-2items-center bg-primaryColor text-tetiaryColor rounded-lg font-bold   text-[16px]  p-2 hover:bg-tetiaryColor hover:text-primaryColor transition-all ">
                {" "}
                Send <Send size="24" color="#FF8A65" variant="Bold" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ContactUs;

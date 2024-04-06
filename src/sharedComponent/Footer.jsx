import { Facebook, Instagram, Whatsapp } from "iconsax-react";

// function Footer() {
//     return (
//       <div class="bg-secondaryColor text-white text-center py-4 px-8 mt-8 ">
//  <div>
// {/* logo */}

//         <div className=" 0">
//           <img src="/assets/logo.jpg" alt="" className="w-[100px]  rounded-md h-[100px]" />
//          <div className="flex gap-4 mt-2"> <Facebook size="24" color="#003153" variant="Bold"/>
//           <Whatsapp size="24" color='#003153' variant="Bold"/>
//           <Instagram size="24" color="#003153" variant="Bold"/>
//          </div>
//         </div>

//         <div>

//         </div>

//         </div>
//       </div>
//     )
//   }

const Footer = () => (
  <div className="flex flex-col p-8 mt-20 bg-[black] justify-center items-center ">
    <div className="w-full text-center mb-4">
      <h1 className="text-[#fff]">Make out time to worship with us</h1>
    </div>

    <div className="flex justify-center  w-full">
      <div className="flex flex-col">
        <div className="rounded-full">
          <img
            src="/assets/coclogo.jpg"
            alt="logo"
            className=" h-[100px] w-[100px] rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

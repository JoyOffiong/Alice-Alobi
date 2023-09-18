import { Facebook, Instagram, Whatsapp } from "iconsax-react"

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
  <div className="flex flex-col p-8 mt-20 bg-primaryColor justify-center items-center ">
    <div className="w-full text-center mb-4">
      <h1 className="text-[#fff]">Do you want to step in to the future before others</h1>
    </div>

    <div className="flex justify-center items-center p-2 mb-4  border-[1px] border-secondaryColor">
      <button className="text-[#fff] font-semibold">Make Donations</button>
    </div>

    <div className="flex justify-between flex-row flex-wrap w-full">
      <div className="flex flex-col">
        <img src='/assets/logo.jpg' alt="logo" className=" h-[100px] w-[100px]"/>
        <div className="flex gap-4 mt-4"> <Facebook size="24" color="#fa8128" variant="Bold"/>
      <Whatsapp size="24" color='#fa8128' variant="Bold"/>
           <Instagram size="24" color="#fa8128" variant="Bold"/>
         </div>
      </div>
      <div className="flex flex-start flex-col text-[#fff] ">
        <h4 className="text-[14px] font-bold  mb-4">Links</h4>
        <p className="text-[12px] leading-8">Overons</p>
        <p className="text-[12px] leading-8">Social Media</p>
        <p className="text-[12px] leading-8 ">Counters</p>
        <p className="text-[12px] leading-8">Contact</p>
      </div>
      <div className="flex flex-start flex-col text-[#fff]">
        <h4 className="text-[14px] text-[#fff]  font-bold mb-4">Company</h4>
        <p className="text-[12px] leading-8">Terms & Conditions </p>
        <p className="text-[12px] leading-8">Privacy Policy</p>
        <p className="text-[12px] leading-8">Contact</p>
      </div>
      <div className="flex flex-start flex-col text-[#fff]">
        <h4 className="text-[14px] text-[#fff]  font-bold mb-4">Get in touch</h4>
        <p className="text-[12px] leading-8">Crechterwoord K12 182 DK Alknjkcb</p>
        <p className="text-[12px] leading-8">085-132567</p>
        <p className="text-[12px] leading-8">info@payme.net</p>
      </div>
    </div>

    <div className="mt-2 text-center w-full text-[#fff]">
      <p className="font-[12px] text-[#fff]">@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

  
  export default Footer
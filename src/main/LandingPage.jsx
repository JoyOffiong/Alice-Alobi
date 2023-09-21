import React, { useEffect, useState } from "react";
import Header from "../sharedComponent/Header";
import Footer from "../sharedComponent/Footer";
import CarouselComponent from "../sharedComponent/Carousel";
import ReactPlayer from "react-player";

function LandingPage() {

  const images = ['/assets/DL1.webp', '/assets/DL2.webp', '/assets/DL3.webp'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
  
    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="bg-tetiaryColor flex flex-col mt-8 ">
      <Header />
      <div className="relative flex flex-col-reverse text-center justify-between md:flex-row md:px-10 items-center">
  <div className="w-full mb-30 relative">

    {/* Text block on top of the overlay with transparent background */}
    <div className="absolute overlay inset-0 w-[70%] mx-auto z-[40px] flex flex-col justify-center items-center">
      <p className="font-bold pb-5 text-center text-2xl z-50 md:text-3xl ">
        Empowering the Underserved Through Digital Literacy
      </p>
      <p className=" text-center font-bold z-50">
        Welcome to Alice Alobi Foundation, where we believe that knowledge
        is power. Our mission is to bridge the digital divide and empower
        the underserved with essential digital skills. Join us in our
        journey to create a more inclusive and equitable world.
      </p>
     
    </div>

    <img
      src={images[currentImageIndex]}
      alt="heroSection"
      className={`w-full object-cover h-[600px] `} style={{ opacity: 0.3}}
    />
  </div>
</div>


      <div className="px-20 flex flex-col gap-10 mt-10">
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
      <div className="h-[500px] mx-20"> 
                      <ReactPlayer
                        url='https://www.youtube.com/watch?v=29ylsrxof48'
                        controls
                        width="100%"
                        height="100%"
                        style={{ borderRadius: '10px' }}
                      />
                    </div>
      <Footer />
    </div>
  );
}

export default LandingPage;

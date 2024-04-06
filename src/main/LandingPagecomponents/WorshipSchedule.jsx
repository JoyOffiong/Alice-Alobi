import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: 1,
    text: " Sunday Worship ",
    day: "Sunday",
    time: "9am-12noon",
  },
  {
    id: 2,
    text: "Men and Women Class",
    day: "First Mondays",
    time: "6pm-7:30pm",
  },
  {
    id: 2,
    text: "General Bible Class",
    day: "Mondays",
    time: "6pm-7:30pm",
  },
  {
    id: 3,
    text: "House Fellowship",
    day: "Wednesday",
    time: "5:30pm-7:30pm",
  },
  {
    id: 3,
    text: "Prayer Meetings",
    day: "Friday",
    time: "5:30pm-7:30pm",
  },
];

const WorshipSchedule = () => {
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="carousel-wrapper my-10  mb-24 mx-12 font-sans">
      <p className="font-bold text-2xl my-8">Worship Schedule</p>
      <Carousel
        ref={carouselRef}
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // server-side rendering
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="carousel-item ml-4 bg-[#fff] shadow-md p-4 hover:shadow-2xl hover:scale(1.1) transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="item-content items-center">
                <p className="text-center">{item.text}</p>
                <p className="text-center">{item.day}</p>
                <p className="text-center">{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default WorshipSchedule;

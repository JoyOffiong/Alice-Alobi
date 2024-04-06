import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
  { id: 1,  image:"/assets/DL2.webp", text: ' Sunday Worship ', time:"9am-12noon" },
  { id: 2,  image:"/assets/DL1.webp", text: 'General Bible Class', time:"6pm-7:30pm" },
  { id: 3,  image:"/assets/DL2.webp", text: 'House Fellowship', time:'5:30pm-7:30pm' },
  { id: 3,  image:"/assets/DL2.webp", text: 'Friday Prayers', time:'5:30pm-7:30pm' },
];

const WorshipSchedule = () => {
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="carousel-wrapper mt-10 mx-12">

{/* <p className="font-bold text-lg">Worship Schedule</p> */}
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
        removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']} 
        deviceType={'desktop'}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((item) => (
          <div key={item.id} className="carousel-item ml-4 bg-[#fff] shadow-md p-8 ">
            <div>
                <img src={item.image} alt="img" />
                </div>

            <div className="item-content items-center mt-8" >
              <p className='text-center' >{item.text}</p>
              <p className='text-center' >{item.time}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );

}
export default WorshipSchedule;

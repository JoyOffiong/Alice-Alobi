import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import {ImQuotesRight} from 'react-icons/im'
import 'react-multi-carousel/lib/styles.css';

const data = [
  { id: 1,  image:"/assets/DL2.webp", text: ' I also became very fixated on myself and my image. I became very consumed with what people thought of me and was living for the acceptance ' },
  { id: 2,  image:"/assets/DL1.webp", text: 'that being a “Christian” isn’t about just doing good works. He made it clear that I do not have to earn my salvation or His love (Eph. 2:8-9)' },
  { id: 3,  image:"/assets/DL2.webp", text: ' And when the things I was pursuing before continually let me down, God has never once left me From growing up in a Christian home,.' },
  { id: 4,  image:"/assets/DL3.webp", text: 'At my lowest point when I was alone and afraid, God drew me to Himself.  I knew what to do. I knew that He could save me if I just let Him' },
];

const CarouselComponent = () => {
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

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1); // Slide to the next item
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1); // Slide to the previous item
    }
  };

  return (
    <div className="carousel-wrapper">
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
          <div key={item.id} className="carousel-item ml-4 bg-[#e5e5e5] shadow-md p-8 ">
            <div>
                <img src={item.image} alt="img" />
                </div>
            <div className="item-content items-center mt-8" >
              <p>{item.text}</p>
              <div className='flex items-center justify-center pt-8'>   <ImQuotesRight/></div>
            </div>
          </div>
        ))}
      </Carousel>

     < div className='flex gap-8 justify-center mt-24'>

        
      <button className="prev-button" onClick={handlePrevClick}>
        Previous
      </button>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
      </div>
    </div>
  );
};

export default CarouselComponent;

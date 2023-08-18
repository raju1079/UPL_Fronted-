import React, { useEffect, useState } from "react";
import jsondata from "../../data/data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const truncateText = (text, maxLines) => {
  const words = text.split(" ");
  let truncatedText = "";

  for (let i = 0; i < words.length; i++) {
    if (i >= maxLines * 6) {
      truncatedText += " ...";
      break;
    }

    truncatedText += " " + words[i];
  }

  return truncatedText.trim();
};

const Testimonials = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(jsondata.Testimonials);
  }, []);

  return (
    <div className="Testimonials">
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {item.map((eachItem) => (
              <div className="testimonial-item text-center" key={eachItem.id}>
                <img
                  className="border rounded-circle p-2  mb-3"
                  src={eachItem.img}
                  alt={eachItem.name}
                />
                <h5 className="mb-0">{eachItem.name}</h5>
                <p>{eachItem.job}</p>
                <div className="testimonial-text text-center p-4">
                  <div className="testi-text">
                    <p className="mb-0 review">
                      {truncateText(eachItem.text, 3)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

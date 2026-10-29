import SectionTitle from "../shared/SectionTitle";
import Container from "../shared/Container";
import baseUrl from "../api/baseUrl";

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Import react rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);

  return (
    <div>
      <Container>
        <SectionTitle
          heading="Testimonials"
          subHeading="What our clients say"
        ></SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((item) => (
            <SwiperSlide item={item} key={item._id}>
              <div className="flex justify-center items-center">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={item?.rating}
                  readOnly
                />
              </div>
              <div>
                <p className="px-6 sm:px-12 lg:px-18 my-2">{item?.details}</p>
                <h2 className="text-2xl text-center">{item?.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;

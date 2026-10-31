import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Featured from "../components/Featured";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Elegance Bistro | Home</title>
      </Helmet>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Banner></Banner>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Category></Category>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <PopularMenu></PopularMenu>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Featured></Featured>
      </section>

      <section className="mb-8 sm:mb-10 lg:mb-12">
        <Testimonials></Testimonials>
      </section>
    </>
  );
};

export default Home;

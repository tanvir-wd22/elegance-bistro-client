import featuredJpg from "../assets/home/featured.jpg";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${featuredJpg})`,
      }}
      className="w-full min-h-150 bg-cover bg-center bg-no-repeat bg-fixed bg-black/50 bg-blend-overlay flex flex-col justify-center items-center text-white py-10"
    >
      <Container>
        <SectionTitle
          heading="From Our Menu"
          subHeading="Check it out"
        ></SectionTitle>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <img
            src={featuredJpg}
            className="w-full sm:w-1/2 h-auto object-cover"
            alt=""
          />

          <div className="w-full sm:w-1/2 space-y-2">
            <h2 className="text-lg">March 20, 2023</h2>
            <h1 className="text-xl font-medium">Where can i get some?</h1>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              beatae quasi quaerat culpa ipsam neque nulla quidem ducimus
              facilis, cum perferendis qui tempore voluptas optio ipsa veritatis
              veniam magnam laborum?
            </p>
            <button className="btn btn-outline btn-success border-0 border-b-3">
              Read More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Featured;

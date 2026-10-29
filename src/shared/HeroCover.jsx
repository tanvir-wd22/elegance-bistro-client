import { Parallax } from "react-parallax";

const HeroCover = ({ bgPic, title, description }) => {
  return (
    <div className="mb-8 sm:mb-10 lg:mb-12">
      <Parallax
        bgImage={bgPic}
        bgImageAlt="hero pic"
        bgImageStyle={{ objectFit: "cover" }}
        strength={250}
        blur={{ min: -5, max: 5 }}
      >
        <div className="hero h-96 sm:h-125 lg:h-175">
          <div className="hero-overlay bg-black/20"></div>
          <div className="hero-content text-white text-center">
            <div className="bg-black/40 max-w-md lg:min-w-3xl px-8 sm:px-16 py-8 sm:py-16 z-10 rounded-xl">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5 text-xl">{description}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroCover;

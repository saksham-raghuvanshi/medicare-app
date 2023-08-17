import aboutImg from "../assets/images/about.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <secction>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:2-1/2 xl:w-[700px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h1 className="heading">Proud to be one of the nations best</h1>
            <p className="text_para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              minima consequatur commodi corrupti doloribus, ea cum maxime, nemo
              debitis praesentium sunt neque nisi recusandae. Necessitatibus
              omnis velit laudantium nemo at.
            </p>
            <p className="text_para mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              nisi unde aut distinctio itaque quos sint est dicta porro magni
              officia ut soluta quo corporis quibusdam, deserunt fugit optio
              laborum.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </secction>
  );
};

export default About;

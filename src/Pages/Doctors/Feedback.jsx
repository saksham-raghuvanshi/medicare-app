/* eslint-disable react/prop-types */
import { reviews } from "../../../data/reviews.js";
import Reviews from "./Reviews.jsx";

const Feedback = ({ doctor }) => {
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All review ({doctor.totalRating})
        </h4>

        {reviews.map((items, index) => (
          <Reviews key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;

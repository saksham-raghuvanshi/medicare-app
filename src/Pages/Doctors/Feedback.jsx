/* eslint-disable react/prop-types */
import { useState } from "react";
import { reviews } from "../../../data/reviews.js";
import Reviews from "./Reviews.jsx";
import FeedBackForm from "./FeedBackForm.jsx";

const Feedback = ({ doctor }) => {
  const [feedbackForm, setFeedbackForm] = useState(false);

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
      <div>
        {!feedbackForm && (
          <div className="text-center">
            <button onClick={() => setFeedbackForm(true)} className="btn">
              Give Feedback{" "}
            </button>{" "}
          </div>
        )}

        {feedbackForm && <FeedBackForm />}
      </div>
    </div>
  );
};

export default Feedback;

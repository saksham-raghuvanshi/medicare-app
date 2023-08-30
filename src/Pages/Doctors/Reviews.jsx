/* eslint-disable react/prop-types */

import { AiFillStar } from "react-icons/ai";
const Reviews = ({ items }) => {
  const arr = Array.from({ length: items.rating });
  return (
    <div>
      <div className="flex justify-between gap-10 mb-[30px]">
        <div className="flex-gap-3">
          <figure className="w-10 h-10 rounded-full">
            <img className="w-full" src={items.photo} alt="" />
          </figure>
          <div>
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              {items.name}
            </h5>
            <p className="text-[14px] leading-6 text-textColor">{items.date}</p>
            <p className="text_para mt-3 font-medium text-[15px]">
              {items.reviewss}
            </p>
          </div>
        </div>

        <div className="flex gap-1">
          {/* {[...Array().keys()].map((_, index) => (
          <AiFillStar key={index} color="#0067FF" />
        ))}
        ({items.rating}) */}
          {arr.map((_, index) => (
            <AiFillStar key={index} color="#0067FF" />
          ))}
          ({items.rating})
        </div>
      </div>
    </div>
  );
};

export default Reviews;

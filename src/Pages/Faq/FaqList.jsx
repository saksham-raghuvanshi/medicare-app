/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import FaqItem from "./FaqItem";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqList = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const faqToggle = () => {
    setIsOpen(!isOpen);
  };

  const { question, content } = faq;
  return (
    <>
      <div className="p-3 lg:p-5 mb-5 rounded-[12px] border border-solid border-[#D9DCE2] cursor-pointer">
        <div
          className="flex item-center justify-between gap-5"
          onClick={faqToggle}
        >
          <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
            {question}
          </h4>
          <div>{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
        </div>

        {isOpen && (
          <div className="mt-4">
            <p className="text-[14px] leading-6 lh:text-[16px] lg:leading-7 font-[400]">
              {content}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FaqList;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import FaqItem from "./FaqItem";

const FaqList = ({ faq }) => {
  const { question, content } = faq;
  return (
    <div className="p-3 lg:p-5 mb-5 rounded-[12px] border border-solid border-[#D9DCE2] cursor-pointer">
      <div className="flex item-center justify-between gap-5"></div>
    </div>
  );
};

export default FaqList;

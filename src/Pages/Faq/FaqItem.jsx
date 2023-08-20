import { faqs } from "../../../data/faqs";
import FaqList from "./FaqList";
const FaqItem = () => {
  return (
    <div className="mt-5 lg:mt-7">
      {faqs.map((faq, index) => (
        <FaqList faq={faq} key={index} />
      ))}
    </div>
  );
};

export default FaqItem;

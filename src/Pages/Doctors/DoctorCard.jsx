/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";
// eslint-disable-next-line react/prop-types
const DoctorCard = ({ doctor }) => {
  const {
    id,
    name,
    specialty,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" className="rounded" />
      </div>
      <h2 className="text-[18px] lg:text-[26px] font-[700] leading-[30px] lg:leading-9 text-headingColor">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor text-[12px] lg:text-[16px] py-1 px-2 font-semibold rounded">
          {specialty}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center font-[700] text-headingColor gap-[6px] text-[14px] lg:text-[16px] leading-6 lg:leading-7 ">
            <img src={starIcon} alt="" />
            {avgRating}{" "}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex item-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg;leading-[30px] font-semibold text-headingColor">
            +{totalPatients} patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {hospital}
          </p>
        </div>
        <Link
          to={`/doctors/${id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none "
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;

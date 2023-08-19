import { doctors } from "../../../data/doctors.js";
import DoctorCard from "./DoctorCard.jsx";
const DoctorsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctor, index) => (
        <DoctorCard doctor={doctor} key={index} />
      ))}
    </div>
  );
};

export default DoctorsList;

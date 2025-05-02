import { PiGraduationCap } from "react-icons/pi";
import ItemCard from "../ItemCard";

function Education({ educationData }) {
  return (
    <section id="education">
      <header>
        <PiGraduationCap />
        <h2>Education</h2>
      </header>
      <ul>
        {educationData?.map((item, index) => (
          <ItemCard
            key={index}
            title={item.institution}
            subtitle={item.study}
          />
        ))}
      </ul>
    </section>
  );
}

export default Education;

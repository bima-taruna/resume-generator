import { IoBriefcaseOutline } from "react-icons/io5";
import ItemCard from "../ItemCard";

function Experience({ experienceData }) {
  return (
    <section id="experience">
      <header>
        <IoBriefcaseOutline />
        <h2>Experience</h2>
      </header>
      <ul>
        {experienceData?.map((item) => (
          <ItemCard title={item.company} subtitle={item.position} />
        ))}
      </ul>
    </section>
  );
}

export default Experience;

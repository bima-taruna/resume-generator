import { IoShareSocialOutline } from "react-icons/io5";
import ItemCard from "../ItemCard";

function Profiles({ profilesData }) {
  return (
    <section id="profiles">
      <header>
        <IoShareSocialOutline />
        <h2>Profiles</h2>
      </header>
      <ul>
        {profilesData?.map((item, index) => (
          <ItemCard key={index} title={item.type} subtitle={item.name} />
        ))}
      </ul>
    </section>
  );
}

export default Profiles;

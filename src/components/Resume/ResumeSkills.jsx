function ResumeSkills({ skillData }) {
  return (
    <section id="skills">
      <h3>Skills</h3>
      <hr />
      <ul>
        {skillData?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ResumeSkills;

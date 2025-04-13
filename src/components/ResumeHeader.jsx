import "../styles/resumeHeader.css";
function ResumeHeader() {
  return (
    <header className="resume-header">
      <h1 className="full-name">John Doe</h1>
      <h2 className="headline">Fullstack Web Developer</h2>
      <ul>
        <li className="location">Medan, Indonesia</li>
        <li className="phone-number">085762068329</li>
        <li className="email">johnDoe@email.com</li>
        <li className="website"></li>
      </ul>
    </header>
  );
}

export default ResumeHeader;

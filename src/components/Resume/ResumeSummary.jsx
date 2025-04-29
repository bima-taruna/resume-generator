import React from "react";
function ResumeSummary({ summary }) {
  return (
    <section id="summary">
      <h3>Summary</h3>
      <hr />
      {summary.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </section>
  );
}

export default ResumeSummary;

import React from "react";
import { useSummaryData } from "../../stores/useResumeStore";
function ResumeSummary() {
  const summary = useSummaryData();
  if (!summary) {
    return null;
  }
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

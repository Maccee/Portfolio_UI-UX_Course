// SkillsIcon.jsx
import React from "react";

function SkillsIcon(props) {
  return (
    <svg
    className="svg-icon"
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className="svg-path" d="M90 90H66V12H90V90ZM72 84H84V18H72V84Z" fill="#8D875D" />
      <path className="svg-path" d="M60 90H36V36H60V90Z" fill="#8D875D" />
      <path className="svg-path" d="M30 90H6V54H30V90Z" fill="#8D875D" />
    </svg>
  );
}

export default SkillsIcon;

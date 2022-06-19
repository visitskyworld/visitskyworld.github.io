import React from "react";
import "./ProjectLanguages.css";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLanguages(props) {
  return (
    <div className="skill-container">
      {props.logos.map((logo) => {
        return (
          <span className="skill-language" style={{ background: logo.color }}>
            {logo.name}
          </span>
          // <OverlayTrigger
          //   key={logo.name}
          //   placement={"top"}
          //   overlay={
          //     <Tooltip id={`tooltip-top`}>
          //       <strong>{logo.name}</strong>
          //     </Tooltip>
          //   }
          // >
          //   <li
          //     className="software-skill-inline-languages"
          //     name={logo.skillName}
          //   >
          //     <span
          //       className="iconify"
          //       data-icon={logo.iconifyClass}
          //       data-inline="false"
          //     ></span>
          //   </li>
          // </OverlayTrigger>
        );
      })}
    </div>
  );
}

export default ProjectLanguages;

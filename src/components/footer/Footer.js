import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title2}
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Want to see how I made it? click{" "}
          <a
            href="https://github.com/visitskyworld/visitskyworld.github.io"
            style={{ color: props.theme.accentBright }}
            target="__blank"
          >
            here
          </a>
        </p>
      </Fade>
    </div>
  );
}

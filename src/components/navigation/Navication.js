import React from "react";
import { useHistory } from "react-router-dom";
import { style } from "glamor";

export default function Navigation(props) {
  const theme = props.theme;

  const history = useHistory();
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
    textAlign: "center",
  });

  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="button"
        {...styles}
        onClick={() => {
          history.push(props.to);
        }}
      >
        {props.title}
      </button>
    </div>
  );
}

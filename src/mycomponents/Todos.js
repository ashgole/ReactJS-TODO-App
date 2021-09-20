import React from "react";
import PropTypes from "prop-types";
import Showinfo from "./Showinfo";
import Addinfo from "./Addinfo";
export default function Todos(props) {

  return (
    <>
      <div className="container">
        <h2 className="text-center">Add Info</h2>
        <Addinfo addInfo={props.addInfo} />
        <h2 className="text-center">Preview Info</h2>
        {props.info.map((info) => {
          return (
            <Showinfo key={info.id} myinfo={info} onDelete={props.onDelete} />
          );
        })}
      </div>
    </>
  );
}

//TODO imp
Todos.defaultProps = {
  title: "your title here",
};
Todos.propTypes = {
  title: PropTypes.string.isRequired,
};

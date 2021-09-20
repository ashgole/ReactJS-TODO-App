import React from "react";

export default function Showinfo(props) {
  return (
    <div>
      <h5>{props.myinfo.id}</h5>
      <p>{props.myinfo.name}</p>
    <button className="btn btn-danger" onClick={()=>{props.onDelete(props.myinfo)}}>Delete</button>
    </div>
  );
}

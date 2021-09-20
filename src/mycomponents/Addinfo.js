import React, { useState } from "react";

export const Addinfo = (props) => {
  const [name, setName] = useState("");
  const submit = (e) => {
      e.preventDefault();
    if (!name) {
      alert("plz write something");
    } else {
      props.addInfo(name);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          className="form-control"
          placeholder="Name"
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Addinfo;

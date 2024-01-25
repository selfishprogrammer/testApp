import React, { useState } from "react";

export default function Form({ onPress }) {
  const [name, setname] = useState("");
  const [place, setplace] = useState("");

  return (
    <div className="shadow-lg bg-white p-5 col-md-3">
      <input
        placeholder="Name"
        className="form-control my-4"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        placeholder="Place"
        className="form-control my-4"
        value={place}
        onChange={(e) => setplace(e.target.value)}
      />
      <div
        className="btn btn-success form-control mt-4"
        onClick={() => {
          setname("");
          setplace("");
          onPress(name, place);
        }}
      >
        Display
      </div>
    </div>
  );
}

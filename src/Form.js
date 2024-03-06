import React, { useEffect, useState } from "react";

export default function Form({ fname, fplace, onPress, forceUpdate, setfo }) {
  const [name, setname] = useState(fname ?? "");
  const [place, setplace] = useState(fplace ?? "");
  useEffect(() => {
    if (forceUpdate) {
      setname("");
      setplace("");
      setfo();
    }
  }, [forceUpdate]);

  console.log(forceUpdate);
  return (
    <div
      className=" col-md-5 mx-4 shadow-lg bg-white p-5"
      style={{ borderRadius: 20 }}
    >
      {/* <p style={{ fontWeight: "bold" }}> Name : </p>
        <p style={{ fontWeight: "bold" }}> Place : </p> */}
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
          onPress(name, place);
        }}
      >
        Display
      </div>
    </div>
  );
}

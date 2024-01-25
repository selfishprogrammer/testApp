import React, { useState } from "react";
import Form from "./Form";

export default function App() {
  const [name, setname] = useState("");
  const [place, setplace] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="shadow-lg bg-white p-5 col-md-3">
          <p style={{ fontWeight: "bold" }}> Name : {name}</p>
          <p style={{ fontWeight: "bold" }}> Place : {place}</p>

          <div
            className="btn btn-primary form-control mt-4"
            onClick={() => {
              setForceUpdate((prev) => !prev); // Toggle to force re-render of FormComponent

              setname("");
              setplace("");
            }}
          >
            Clear
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Form
          fname={name}
          fplace={place}
          forceUpdate={forceUpdate}
          onPress={(n, p) => {
            setname(n);
            setplace(p);
          }}
          setfo={() => setForceUpdate((prev) => !prev)}
        />
      </div>
    </>
  );
}

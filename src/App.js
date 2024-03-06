import React, { useState } from "react";
import Form from "./Form";

export default function App() {
  const [name, setname] = useState("");
  const [place, setplace] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <>
      <div className="container d-flex justify-content-center mt-4">
        <div
          className="col-md-5 shadow-lg bg-white p-5 "
          style={{ borderRadius: 20 }}
        >
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

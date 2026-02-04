import React, { useState } from "react";

function Report() {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [loc, setLoc] = useState({});

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(p =>
      setLoc({ lat: p.coords.latitude, lng: p.coords.longitude })
    );
  };

  const submit = async () => {
    const form = new FormData();
    form.append("description", desc);
    form.append("image", file);
    form.append("latitude", loc.lat);
    form.append("longitude", loc.lng);

    await fetch("http://localhost:3000/api/reports", {
      method: "POST",
      body: form
    });

    alert("Report Submitted");
  };

  return (
    <>
      <h2>Near-Miss Report</h2>
      <input onChange={e=>setDesc(e.target.value)} placeholder="Hazard"/>
      <input type="file" onChange={e=>setFile(e.target.files[0])}/>
      <button onClick={getLocation}>📍 Get Location</button>
      <button onClick={submit}>Submit</button>
    </>
  );
}

export default Report;

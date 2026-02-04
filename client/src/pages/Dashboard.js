import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/reports")
      .then(r => r.json())
      .then(setData);
  }, []);

  return (
    <>
      <h2>Admin Dashboard</h2>
      {data.map(r => (
        <div key={r._id}>
          <p>{r.description}</p>
          <select>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>
      ))}
    </>
  );
}
export default Dashboard;

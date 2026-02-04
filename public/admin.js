async function loadReports() {
    const res = await fetch("/api/reports");
    const reports = await res.json();

    reportsDiv.innerHTML = "";

    reports.forEach(r => {
        reportsDiv.innerHTML += `
        <div style="border:1px solid black;margin:10px;padding:10px">
            <p>${r.description}</p>
            <a target="_blank"
              href="https://www.google.com/maps?q=${r.latitude},${r.longitude}">
             📍 View Location
            </a>

            <img src="/uploads/${r.image}" width="150"><br>
            <select onchange="update('${r._id}',this.value)">
                <option ${r.status=="Pending"?"selected":""}>Pending</option>
                <option ${r.status=="In Progress"?"selected":""}>In Progress</option>
                <option ${r.status=="Resolved"?"selected":""}>Resolved</option>
            </select>
        </div>`;
    });
}

async function loadStats() {
  const res = await fetch("/api/reports/stats");
  const s = await res.json();
  stats.innerHTML = `
    <li>Pending: ${s.pending}</li>
    <li>In Progress: ${s.progress}</li>
    <li>Resolved: ${s.resolved}</li>
    headers: { "Authorization": localStorage.getItem("token") }

  `;
}

loadStats();


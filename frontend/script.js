const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    type: document.getElementById("type").value,
    location: document.getElementById("location").value,
    severity: document.getElementById("severity").value
  };

  await fetch("http://localhost:3000/report", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  form.reset();
  loadData();
});

async function loadData() {
  const res = await fetch("http://localhost:3000/all");
  const data = await res.json();

  list.innerHTML = "";

  data.forEach(d => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${d.type} - ${d.location} - ${d.severity}</p>`;
    list.appendChild(div);
  });
}

loadData();
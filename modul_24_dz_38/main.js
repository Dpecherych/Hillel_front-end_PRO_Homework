const table = document.getElementById("myTable");

for (let i = 1; i < 10; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
        const td = document.createElement("td");
        td.textContent = (i - 1) * 10 + j;
        row.appendChild(td);
    }

    table.appendChild(row);
};
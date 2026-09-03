async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    } catch (err) {
        console.error(err);
        return [];
    }
}

async function renderUsers() {
    const userData = await fetchUsers();

    const tableBody = document.querySelector("#user-table tbody");
    tableBody.innerHTML = "";

    userData.forEach((user) => {
        const row = document.createElement("tr");

        const cells = [
            user.id,
            user.name,
            `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`,
            user.email,
            user.phone,
        ];

        cells.forEach((value) => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        tableBody.appendChild(row);
    });
}

renderUsers();
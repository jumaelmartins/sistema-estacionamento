const inputName = document.querySelector("#name") as HTMLInputElement;
const inputLicencePlate = document.querySelector("#licence-plate") as HTMLInputElement;

const form = document.querySelector(".parking__form") as HTMLFormElement;

const addVehicle = (vehicle: Vehicle) => {
    const row = document.createElement("tr");
    const userName = document.createElement("td");
    const licence = document.createElement("td");
    const entry = document.createElement("td");
    const button = document.createElement("td");

    userName.innerText = vehicle.userName;
    licence.innerText = vehicle.licence;
    entry.innerText = vehicle.entry.toString();
    button.innerText = "Delete";

    row.appendChild(userName);
    row.appendChild(licence);
    row.appendChild(entry);
    row.appendChild(button);

    const table = document.querySelector(".parking__table__content");
    table?.appendChild(row);
};


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = inputName.value;
  const licence = inputLicencePlate.value;
  const entry = new Date();

  addVehicle({userName: name, licence, entry})
});

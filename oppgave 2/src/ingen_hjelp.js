const users = require('./util.js')

// TODO: Hent HTML #id med getElementById

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");
const userList = document.getElementById("users")

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere

const createList = (users) => {
    userList.innerHTML = null;
    userList.innerHTML = `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    for (const user of users) {
        userList.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
}

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket

const handleSearch = () => {
    const nameToSearch = nameInput.value;

    if (nameToSearch) {
        const searchResult = users.find((user) => user.name.toLowerCase() === nameToSearch.toLowerCase());

        if (searchResult) {
            createList([searchResult]);
        } else {
            userList.innerHTML = `Ingen resultater på navnet ${nameToSearch}.`;
        }
    } else {
        createList(users);
    }
}

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret

const handleFilter = () => {
    const ageToFilter = ageInput.value;

    if (ageToFilter && Number(ageToFilter)) {
        const filterResult = users.filter((user) => user.age > ageToFilter);
        if (filterResult && filterResult.length > 0) {
            createList(filterResult);
        } else {
            userList.innerHTML = `Ingen resulater på over alder ${ageToFilter}.`;
        }
    } else {
        createList(users);
    }
}

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)

nameInput.addEventListener("keyup", handleSearch);

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

filterBtn.addEventListener("click", handleFilter);

const onStartup = () => {
    createList(users);
}

onStartup();
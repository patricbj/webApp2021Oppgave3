// Oppgave 1

const textToRemove = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn")

const removeText = () => {
    textToRemove.innerHTML = "";
};

removeBtn.addEventListener("click", removeText);

// Oppgave 2

const textToChange = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

const changeText = () => {
    textToChange.innerHTML = "Endret teksten seg? Ja? Ok";
};

changeBtn.addEventListener("click", changeText);

// Oppgave 3

const inputDisplay = document.getElementById("input-text");
const input = document.getElementById("input");

const removeDefaultText = () => {
    inputDisplay.innerHTML = "";
};

removeDefaultText();

const displayInput = (event) => {
    let symbol = event.key;
    inputDisplay.innerHTML += symbol;
};

input.addEventListener("keydown", displayInput);

// Oppgave 4

const myList = ['item one', 'item two', 'item three'];
const writeListBtn = document.getElementById("write-list");
const listDisplay = document.getElementById("ul");

const displayList = () => {
    myList.forEach((element) => (ul.innerHTML += `<li>${element}</li>`));
};

writeListBtn.addEventListener("click", displayList);

// Oppgave 5

const createBtn = document.getElementById("create");
const placeholder = document.getElementById("placeholder");
const select = document.getElementById("select");
const textInput = document.getElementById("text");

const createElement = () => {
    const htmlTag = select.value;
    const text = textInput.value;
    placeholder.innerHTML += `<${htmlTag}>${text}</${htmlTag}`;
};

createBtn.addEventListener("click", createElement);

// Oppgave 6

const list = document.getElementById("list");
const removeLiBtn = document.getElementById("remove-li");

const removeLiFromList = () => {
    const lastChild = list.lastElementChild;
    if (lastChild) {
        list.removeChild(lastChild);
    }
};

removeLiBtn.addEventListener("click", removeLiFromList);

// Oppgave 7

const nameInput = document.getElementById("name");
const nameBtn = document.getElementById("order");

const handleKeyPress = () => {
    const name = nameInput.value;
    if (name && name.length >= 4) {
        nameBtn.disabled = true;
        nameBtn.style = "border: 1px solid red";
    } else {
        nameBtn.disabled = false;
        nameBtn.style = "border: 1px solid black";
    }
}

nameInput.addEventListener("keyup", handleKeyPress);

// Oppgave 8

const colorBtn = document.getElementById("color");
const ul = document.querySelector('.children');
const children = ul.querySelectorAll('li');

const addBorder = () => {
    Array.from(children).forEach((li, index) => {
        if ((index + 1) % 2 === 0) {
            li.style = "border: 1px solid pink; margin-bottom: 10px; padding: 5px;"
        } else {
            li.style = "border: 1px solid green; margin-bottom: 10px; padding: 5px;"
        }
    })
}

colorBtn.addEventListener("click", addBorder)
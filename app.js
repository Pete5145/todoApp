let input = document.querySelector(".txt-input");
let btn = document.querySelector(".btn");
let todoList = document.querySelector(".todoList");
let form = document.querySelector(".form");

btn.addEventListener("click", function() {
    let todoItem = document.createElement("li");
    let inputValue = input.value;
    let todoText = document.createTextNode(inputValue);
    todoItem.appendChild(todoText);

    if (inputValue === "") {
        alert("You must write something!");
    } else {
        todoList.appendChild(todoItem);
        input.value = "";
    }

    let span = document.createElement("span");
    span.className = "close fa-solid fa-xmark";
    todoItem.appendChild(span);

    span.addEventListener("click", function() {
        let closeIcon = this.parentElement;
        closeIcon.style.display = "none";
    });

    let italic = document.createElement("I");
    italic.className = "check fa-solid fa-check";
    todoItem.appendChild(italic);

    italic.addEventListener("click", function() {
        let checkIcon = this.parentElement;
        checkIcon.style.textDecoration = "line-through";
    });
});


form.addEventListener("submit", function(e) {
    e.preventDefault();
});


let input = document.querySelector(".txt-input");
let btn = document.querySelector(".btn");
let myUl = document.querySelector(".myUl")

btn.addEventListener("click", function() {
    let li = document.createElement("li");
    let inputValue = input.value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
        alert("You must write something!");
    } else {
        myUl.appendChild(li);
        input.value = "";
    }

    let span = document.createElement("span");
    span.className = "close fa-solid fa-xmark";
    li.appendChild(span);

    span.addEventListener("click", function() {
        let div = this.parentElement;
        div.style.display = "none";
    });

    let italic = document.createElement("I");
    italic.className = "check fa-solid fa-check";
    li.appendChild(italic);

    italic.addEventListener("click", function() {
        let div = this.parentElement;
        div.style.textDecoration = "line-through";
    });
});


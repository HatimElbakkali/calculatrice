
let btnCalculatriceOrange = document.querySelectorAll(".orange")
let btnCalculatriceGrey = document.querySelectorAll(".grey")
let btnCalculatriceRed = document.querySelectorAll(".red")[0]
let btnCalculatriceRed2 = document.querySelectorAll(".red")[1]
let displayed = document.querySelector(".displayed")
let result = document.querySelector(".result")

// Symbole
displayed.textContent = sessionStorage.getItem("symbole")
btnCalculatriceOrange.forEach(function(ele) {
    ele.addEventListener("click", function(){
        displayed.textContent += `${ele.textContent}`
        sessionStorage.setItem("symbole", displayed.textContent)
    })
});

// Number
displayed.textContent = sessionStorage.getItem("Number")
btnCalculatriceGrey.forEach(function (ele) {
    ele.addEventListener("click",function() {
        displayed.textContent += `${parseFloat(ele.textContent)}`
        sessionStorage.setItem("Number", displayed.textContent)
    })
});

// Remove All
btnCalculatriceRed.addEventListener("click", function() {
    displayed.textContent = ""
})

// Remove step by step
btnCalculatriceRed2.addEventListener("click", function () {
    displayed.textContent = displayed.textContent.slice(0, displayed.textContent.length - 1)
})

// execute operation arithmetic
result.addEventListener("click", function(){
    displayed.textContent = eval(displayed.textContent)
})
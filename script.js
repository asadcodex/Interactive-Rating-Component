const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const butt = document.getElementById("butt")
const main = document.getElementById("main")
const thank = document.getElementById("thank")
const number = document.getElementById("number")

one.addEventListener("click", function () {
    number.textContent = '1'
})
two.addEventListener("click", function () {
    number.textContent = '2'
})
three.addEventListener("click", function () {
    number.textContent = '3'
})
four.addEventListener("click", function () {
    number.textContent = '4'
})
five.addEventListener("click", function () {
    number.textContent = '5'
})

butt.addEventListener("click", function () {
    main.style.display = "none"
    thank.style.display = "inline-block"
})

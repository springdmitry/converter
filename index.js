/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById("conv-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btn.addEventListener("click", function() {
    const inputEl = document.getElementById("inp-num").value
    const meter = (Number(inputEl) / 3.281).toFixed(3)
    const liter = (Number(inputEl) / 0.264).toFixed(3)
    const kilogram = (Number(inputEl) / 2.204).toFixed(3)
    const feet = (Number(inputEl) * 3.281).toFixed(3)
    const gallon = (Number(inputEl) * 0.264).toFixed(3)
    const pound = (Number(inputEl) * 2.204).toFixed(3)
    lengthEl.textContent = `${inputEl} meters = ${feet} feet | ${inputEl} feet = ${meter} meters`
    volumeEl.textContent = `${inputEl} liters = ${gallon} gallons | ${inputEl} gallons = ${liter} liters`
    massEl.textContent = `${inputEl} kilos = ${pound} pounds | ${inputEl} pounds = ${kilogram} kilos`
})

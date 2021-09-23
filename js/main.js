document.getElementById("consume_btn").addEventListener("click", consume);

function consume() {
    let p1_water = document.getElementById("p1_water");
    let p1_food = document.getElementById("p1_food");
    let p1_consumption = document.getElementById("p1_consumption");
    let days_left = document.getElementById("days_left");

    p1_water.value = Math.round((parseFloat(p1_water.value) - parseFloat(p1_consumption.value)) * 10) / 10;
    p1_food.value = Math.round((parseFloat(p1_food.value) - parseFloat(p1_consumption.value)) * 10) / 10;

    days_left.innerText = Math.floor(parseFloat(p1_water.value) / parseFloat(p1_consumption.value));
}

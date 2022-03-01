
//localStorage.setItem("commons", 0);
//localStorage.setItem("supers", 0);
//localStorage.setItem("rares", 0);
//localStorage.setItem("legendarys", 0);


var cart_cars = {
    common: localStorage.getItem("commons"),
    super: localStorage.getItem("supers"),
    rare: localStorage.getItem("rares"),
    legendary: localStorage.getItem("legendarys"),
}

document.getElementById("common-number").innerHTML = cart_cars.common;
document.getElementById("super-number").innerHTML = cart_cars.super;
document.getElementById("rare-number").innerHTML = cart_cars.rare;
document.getElementById("legendary-number").innerHTML = cart_cars.legendary;

function add_cart()
{
    var number_cars = document.getElementById("cars").value;
    var typeCar = document.getElementById("typeCar");
    var selectedCar = typeCar.options[typeCar.selectedIndex].value;
    if (selectedCar == "common")
    {
        localStorage.setItem("commons", number_cars);
    }
    else if (selectedCar == "super")
    {
        localStorage.setItem("supers", number_cars);
    }
    else if (selectedCar == "rare")
    {
        localStorage.setItem("rares", number_cars);
    }
    else if (selectedCar == "legendary")
    {
        localStorage.setItem("legendarys", number_cars);
    }
}

function selectTeam()
{
    var teamAxie = document.getElementById("teamAxie");

    var selectedValue = teamAxie.options[teamAxie.selectedIndex].value;

    localStorage.setItem("typeTeam", selectedValue)
}
function selectCars()
{
    var reset = "car";
    localStorage.setItem("typeTeam", reset)
}
function change_axie2()
{
    document.getElementById("axie").src = "./images/axie2.png"; 
}


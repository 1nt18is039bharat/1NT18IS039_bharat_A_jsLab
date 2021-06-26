function planet(text , inclination, distance){
    this.text = text
    this.inclination = inclination
    this.distance = distance
    this.display = function () {
        let disp1 = document.getElementById("display1")
        let disp2 = document.getElementById("display2")
        let disp3 = document.getElementById("display3")
        disp1.innerHTML = "distance from the sun is:- "+ distance+" </br>"
        disp2.innerHTML = "information regarding the planet:- "+ text +" </br>"
        disp3.innerHTML = "inclination is :- "+ inclination+" </br>"
      }
}

function createPlanet(){
    let text  = document.getElementById("info").value
    let inclination = document.getElementById("inc").value
    let distance = document.getElementById("dist").value
    let planet1 = new planet(text,inclination, distance)
    planet1.display()
}
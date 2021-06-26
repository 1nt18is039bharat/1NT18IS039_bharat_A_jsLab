
let second = document.querySelector(".second")
let third = document.querySelector(".third")
let fourth = document.querySelector(".fourth")
let fifth = document.querySelector(".fifth")

second.addEventListener('mouseenter', secondEnter)
third.addEventListener('mouseenter', thirdEnter)
fourth.addEventListener('mouseenter', fourthEnter)
fifth.addEventListener('mouseenter', fifthEnter)
fifth.addEventListener('mouseleave', fifthLeave)


function secondEnter(){
    console.log("entered second")
}

function thirdEnter(){
    console.log("entered third")
}

function fourthEnter(){
    console.log("entered fourth")
}

function fifthEnter(){
    console.log("DEAD!!")
}


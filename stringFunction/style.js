let btn1 = document.getElementById("mybtn1")
let btn2 = document.getElementById("mybtn2")
let btn3 = document.getElementById("mybtn3")
let btn4 = document.getElementById("mybtn4")
let index = document.getElementById("indexstr")
let substr1 = document.getElementById("substr1")
let substr2 = document.getElementById("substr2")
let catstr = document.getElementById("catstr")
btn2.addEventListener('mouseover', searchLetter)
btn3.addEventListener('mouseover', searchString)
btn1.addEventListener('click', setString)
btn4.addEventListener('mouseover', conCat)
let str = ""
function setString(){
    str = document.getElementById("mystr1").value 
    console.log(str)
}

function searchLetter(){
    let ch = index.value 
    let pos = str.indexOf(ch)
    console.log(pos)
    document.getElementById("result1").innerHTML = "positionof letter is  " + pos
}

function searchString(){
    let pos1 = substr1.value 
    let pos2 = substr2.value 
    let res = str.substring(pos1, pos2)
    console.log(res)
    document.getElementById("result2").innerHTML = "the resulting substring is = " + res
}

function conCat(){
    let str1 = catstr.value 
    let res = str.concat(str1)
    document.getElementById("result3").innerHTML = "the resulting string is = " + res
}
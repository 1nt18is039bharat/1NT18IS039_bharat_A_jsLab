
document.getElementById("myBtn").addEventListener("click", clickMe);
function clickMe(){
    let para = document.createElement('p')
    document.body.appendChild(para)
    para.innerHTML = "hello there"

}

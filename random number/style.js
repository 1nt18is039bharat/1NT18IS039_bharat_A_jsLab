var x;
x=Math.floor(Math.random()*10)
var y=0;
function myFunction(){
    y++;
    var guess = document.getElementById('guess').value
    var para = document.getElementById("hint")
    console.log(x)
    if(y<2){

        if(x==guess){
            para.innerHTML = "Congratulations!! You've guessed the number"
        }
        else if(x>guess){
            para.innerHTML = "Guess a higher number"
        }
        else{
            para.innerHTML = "Guess a lower number"
        }
    }
    else{
        alert("You are out of guesses.")
        window.location.reload()
    }

}
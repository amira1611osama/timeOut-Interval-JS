function myFunction() {
    confirm("Hello")
}

var mouse =setInterval(Timer,1000)

function Timer() {
    var date = new Date();
    document.querySelector("#demo").innerHTML = date.toLocaleTimeString()
}

// function stopTimer() 
document.querySelector("#pause").onclick =function stopTimer(){
    clearInterval(mouse);
    var btnTimer = document.querySelector("#pause")
    // btnTimer.innerHTML="start"
    if(btnTimer.innerHTML == "Pause!"){
        btnTimer.innerHTML="Start"
        btnTimer.classList.remove("btn-outline-danger")
        btnTimer.classList.add("btn-outline-success")
    }else{
        btnTimer.innerHTML="Pause!"
        btnTimer.classList.add("btn-outline-danger")
        btnTimer.classList.remove("btn-outline-success")
    }
}



// document.addEventListener("click",Function(){
//     clearInterval(mouse)}
// )

let solutionScreen = document.getElementById("solution-screen");

function display(num) {
    solutionScreen.value += num;
}

function calculate(){
    try{
        solutionScreen.value = eval(solutionScreen.value);
    } 
    
    catch (err){
        alert ("error. One at a time")
    }
}

function Clear() {
    solutionScreen.value = " "
}

function del() {
    solutionScreen.value = solutionScreen.value.slice(0, -1);
}
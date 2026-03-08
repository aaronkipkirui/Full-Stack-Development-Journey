// if else condition
var day = "Monday";
if (day === "Monday") {
    console.log("go to the gym");
} else if (day === "Tuesday") {
    console.log("go to the park");
} else if (day === "Wednesday") {
    console.log("go to the movies");
} else if (day === "Thursday") {
    console.log("go to the beach");
} else if (day === "Friday") {
    console.log("go to the mall");
} else if (day === "Saturday") {
    console.log("go to the zoo");
} else if (day === "Sunday") {
    console.log("go to the library");
}   

// ternary condition
// condition ? expressionIfTrue : expressionIfFalse
var isNightTime = true;
var greeting = isNightTime ? "good evening" : "good day";
console.log(greeting);

// switch condition
function moveDirection(direction) {
    var myMove;
    switch (direction) {
        case "forward": 
            myMove = "you encounter a monster";
            break;  

        case "backward":
            myMove = "you arrived home";
            break;      
        case "right":
            myMove = "you found a river";
            break;
        case "left":
            myMove = "you run into a troll";
            break;  
        default:
            myMove = "please enter a valid direction";
    }   
    return myMove;
}

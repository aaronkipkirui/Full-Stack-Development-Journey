// parent scope
var fun = 5;
function ffunction(){
    // child scope
    var fun = 7;
    // child scope can only be accessed inside the function
    console.log(fun); 
    // should output 7 because the variable  fun within child = 7
}
ffunction(console.log(fun));
// should output 5 because the parent scope can be accessed
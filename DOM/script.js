// add event listener to the add button
document.getElementById("myButton").addEventListener("click", function(){
    var itemInput = document.getElementById("itemInput");
    var itemText = itemInput.value.trim();
    if (itemText !== "") {
        var ul = document.querySelector("ul");
        var li = document.createElement("li");
        li.textContent = itemText;
        ul.appendChild(li);
        itemInput.value = "";
    }
});

// add event listener to the clear button
document.getElementById("clearButton").addEventListener("click", function(){
    var ul = document.querySelector("ul");
    var li = document.querySelector("li");
    if (ul.innerHTML !== "") {
        ul.removeChild(ul.lastChild);
    }
})

// add event listener for enter key press in the input field
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("myButton").click();
    }
})


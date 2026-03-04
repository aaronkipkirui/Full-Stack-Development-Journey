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

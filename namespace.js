/********************************
Filename: namespace.js
Author: Celina Katayama
Description: 
Date: October 20, 2018
*********************************/


var CELINAKATA = {
    init: function(){
        let newBox = document.createElement("div");
        newBox.className = "box";
        newBox.textContent = "CELINAKATA";
        let boxes = document.getElementById("boxes");
        boxes.appendChild(newBox);

        newBox.addEventListener("click", function(){
            this.style.borderColor = "blue";
            this.style.backgroundColor = "aqua";
        });
        newBox.addEventListener("mouseover", function(){
            this.classList.toggle("highlight");
        });
        newBox.addEventListener("mouseout", function(){
            this.classList.toggle("highlight");
        });
    }
}


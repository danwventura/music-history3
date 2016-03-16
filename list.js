"use strict"

let container = document.getElementById("container");
let linkList = document.getElementById("link-list");
let listView = document.getElementById("list-view");
console.log( );
//Adding Event Listener to List Link to add/remove css properties to sections
linkList.addEventListener("click", function(event){
  
  addView.classList.add("hidden")

  listView.classList.add("visible")
  listView.classList.remove("hidden")
  container.classList.add("visible")
  container.classList.remove("hidden")


});


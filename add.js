"use strict"
// let linkAdd = document.getElementById("link-add");
let linkAdd = document.getElementById("link-add");
let addView = document.getElementById("add-view")

linkAdd.addEventListener("click", function(event){
  listView.classList.add("hidden")
  listView.classList.remove("visible")
  container.classList.add("hidden")
  container.classList.remove("visible")

  addView.classList.remove("hidden")
  addView.classList.add("visible")

})

let hideAddView = function (){
  addView.classList.add("hidden")
}();

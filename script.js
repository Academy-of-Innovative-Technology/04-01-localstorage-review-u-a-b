var key = "name";


// SAVE
document.querySelector(".save").onclick = function() {
let saveKey = document.querySelector("#saveKey").value;
let saveValue = document.querySelector("#saveValue").value;
localStorage.setItem(saveKey, saveValue);
};


// LOAD
document.querySelector(".load").onclick = function() {

};

// LOAD
document.querySelector(".update").onclick = function() {

};

// DELETE
document.querySelector(".delete").onclick = function() {

};

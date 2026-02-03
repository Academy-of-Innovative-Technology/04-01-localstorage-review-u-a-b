var key = "hi";


// SAVE
document.querySelector(".save").onclick = function() {
let saveValue = document.querySelector("#saveValue").value;
localStorage.setItem(key, saveValue);
let saveKey = document.querySelector("#saveKey");
saveKey.clear();
};


// LOAD
document.querySelector(".load").onclick = function() {
    let data = localStorage.getItem(key);
   let loadValue = document.querySelector("#loadValue");
   loadValue.innerHTML = data;
};

// LOAD
document.querySelector(".update").onclick = function() {

};

// DELETE
document.querySelector(".delete").onclick = function() {

};

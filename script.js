var key = "hi";


// SAVE
document.querySelector(".save").onclick = function() {
let saveValue = document.querySelector("#saveValue").value;
localStorage.setItem(key, saveValue);
let saveKey = document.querySelector("#saveKey");
let saveValueClear = document.querySelector("#saveValue");
saveValueClear.value = "";
saveKey.value = "";
};


// LOAD
document.querySelector(".load").onclick = function() {
    let data = localStorage.getItem(key);
    console.log(data);
   let loadValue = document.querySelector("#loadValue");
   loadValue.value = data;
};

// LOAD
document.querySelector(".update").onclick = function() {
let updateValue = document.querySelector("#updateValue").value;
let data = localStorage.setItem(key, updateValue);
};

// DELETE
document.querySelector(".delete").onclick = function() {
let deleteKey = document.querySelector("#deleteKey").value;
localStorage.removeItem(deleteKey);
};

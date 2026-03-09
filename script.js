const candidates = {

"12345": {
name:"Rahul Das",
trade:"Electrician",
sector:"Power"
},

"67890": {
name:"Amit Roy",
trade:"Fitter",
sector:"Manufacturing"
}

};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(candidates[id]){
document.getElementById("name").textContent = candidates[id].name;
document.getElementById("id").textContent = id;
document.getElementById("trade").textContent = candidates[id].trade;
document.getElementById("sector").textContent = candidates[id].sector;
}
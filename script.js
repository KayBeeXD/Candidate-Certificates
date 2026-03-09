const sheetURL = "https://opensheet.elk.sh/1x46SMUmfsAb4tm_VaPaFlcEPR8KH1q4jjmiviiLWS5A/Sheet1";

async function loadCandidates(){

const response = await fetch(sheetURL);
const data = await response.json();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

data.forEach(candidate => {

if(candidate["Candidate ID"] === id){

document.getElementById("id").textContent = candidate["Candidate ID"];
document.getElementById("name").textContent = candidate["Candidate Name"];
document.getElementById("trade").textContent = candidate["Trade Name"];
document.getElementById("sector").textContent = candidate["Sector"];

}

});

}

loadCandidates();
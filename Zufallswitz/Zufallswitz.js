window.onload = function() {  
    document.getElementById("btn").addEventListener("click", holeWitz);
 }

 async function holeWitz() {
    var response = await fetch(" https://witzapi.de/api/joke/");
    var data = await response.json();
    document.getElementById("witz").innerText = data[0].text;
 }
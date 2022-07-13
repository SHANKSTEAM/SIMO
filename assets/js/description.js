async function loadData(){
    const response = await fetch("./assets/js/database.json");
    const resulte = await response.json();
    const url = window.location.hash.replaceAll("#","").replaceAll("%20"," ").split("/");
    const category = url[0];
    const id = url[1];
    
    const targetData = resulte[category][id];
    document.getElementsByClassName("home__img")[0].src = "assets/img/"+targetData[0] + ".jpg";
    document.getElementsByClassName("home__title")[0].innerText = targetData[3];
    document.getElementsByClassName("home__price")[0].innerText = targetData[2]+ " €";
    document.getElementsByClassName("home__description")[1].innerText = targetData[4].replaceAll("<br>","\n");

}

window.onload = loadData();
var redOneData = {}

function new_grid(category,data){
    var section = document.createElement("section");
    section.className = "featured section container";
    document.getElementsByClassName("main")[0].appendChild(section);

    var h2 = document.createElement("h2");
    h2.className = "section__title";
    h2.innerHTML = category;
    section.appendChild(h2);

    var grid = document.createElement("div");
    grid.className = "featured__container grid";
    section.appendChild(grid);

    const mini_keys = Object.keys(data);
    const mini_values = Object.values(data);

    for (const key_index in mini_keys){
       gridItem(grid,category,mini_keys[key_index],mini_values[key_index][1],mini_values[key_index][0],mini_values[key_index][2],mini_values[key_index][3],mini_values[key_index][3])
    }

}

function gridItem(_grid,category,id,available,image,price,title){
  
    var article = document.createElement("article");
    article.className = "featured__card";
    _grid.appendChild(article);

    

    var img = document.createElement("img");
    img.className = "featured__img";
    img.src = "assets/img/"+image + ".jpg";
    article.appendChild(img);

    var featured__data = document.createElement("div");
    featured__data.className = "featured__data";
    article.appendChild(featured__data);

    //Title
    var h3 = document.createElement("h3");
    h3.className = "featured__title";
    h3.innerHTML = title;
    article.appendChild(h3);

    //price text
    var span = document.createElement("span");
    span.className = "featured__price";
    span.innerHTML = price + " €";
    article.appendChild(span);

    //read Descripción button
    var span = document.createElement("button");
    span.className = "button featured__button";
    span.innerHTML = "Descripción";
    span.onclick = function(){
        window.open("description.html#" + category+"/"+id);
    }
    article.appendChild(span);

    //add to card button
    if(available =="si"){
        var span_2 = document.createElement("button");
        span_2.className = "button featured__button";
        span_2.innerHTML =  "Añadir a la cesta";
        span_2.onclick = function(){
            alert("Mazal ma salit achrif");
        }
        article.appendChild(span_2);
    }else {
    var tag = document.createElement("span");
    tag.className = "featured__tag";
    article.appendChild(tag);
    tag.innerHTML = "Agotado";
    }

}

function loadEverthing(){
    const keys = Object.keys(redOneData);
    const values = Object.values(redOneData);
    
    for (const key_index in keys){
        new_grid(keys[key_index],values[key_index]);
    }

}

async function loadData(){
    const response = await fetch("./assets/js/database.json");
    redOneData = await response.json();
    loadEverthing()
}

window.onload = loadData();
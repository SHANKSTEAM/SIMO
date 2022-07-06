const redOneData = {
"CERAS CON BRILLO":["redone_img_1","6.95","Quiksilver Aqua Hair Wax 150ml. Cera Con Brillo y Aroma a Grosella","RedOne Aqua Hair Wax ayuda a espesar, texturizar y aumentar el volumen del cabello.<>Proporciona un agarre fuerte y flexible con una superficie perfecta. <br>Totalmente libre de parabenos, sin sulfatos, sin alcohol, sin copos y sin aditivos animales.<br>Para aquellos que quieren un control total y un cabello hermoso. Crea peinados extremos y formas estructuradas según tus deseos. <br>Cera con aroma a grosella, brillo duradero y fuerte agarre, apto para todo tipo de cabello. <br>brillo: crea un brillo radiante<br>aroma:  grosella<br>fuerza de fijación: fuerte<br>volumen: 150ml<br>uso:  cabello <br>Modo de empleo: frote una pequeña cantidad con los dedos en el cabello ligeramente húmedo o secbro"],
"CERAS MATE":["redone_img_2","7,25","Keratin Matte Hair Wax 150 ml. Cera Mate Enriquecida Con Queratina","RedOne Aqua Hair Wax ayuda a espesar, texturizar y aumentar el volumen del cabello.<>Proporciona un agarre fuerte y flexible con una superficie perfecta. <br>Totalmente libre de parabenos, sin sulfatos, sin alcohol, sin copos y sin aditivos animales.<br>Para aquellos que quieren un control total y un cabello hermoso. Crea peinados extremos y formas estructuradas según tus deseos. <br>Cera con aroma a grosella, brillo duradero y fuerte agarre, apto para todo tipo de cabello. <br>brillo: crea un brillo radiante<br>aroma:  grosella<br>fuerza de fijación: fuerte<br>volumen: 150ml<br>uso:  cabello <br>Modo de empleo: frote una pequeña cantidad con los dedos en el cabello ligeramente húmedo o secbro"]
}

var main = document.createElement("main");
main.className = "main";
document.body.appendChild(main);

function new_grid(category,data){
    var section = document.createElement("section");
    section.className = "featured section container";
    main.appendChild(section);

    var h2 = document.createElement("h2");
    h2.className = "section__title";
    h2.innerHTML = category;
    section.appendChild(h2);

    var grid = document.createElement("div");
    grid.className = "featured__container grid";
    section.appendChild(grid);
    gridItem(grid,data[0],data[1],data[2])

}

function gridItem(_grid,image,price,title){
  
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

    var h3 = document.createElement("h3");
    h3.className = "featured__title";
    h3.innerHTML = title;
    article.appendChild(h3);

    var span = document.createElement("span");
    span.className = "featured__price";
    span.innerHTML = price + " €";
    article.appendChild(span);

    var span = document.createElement("button");
    span.className = "button featured__button";
    span.innerHTML = "Descripción";
    article.appendChild(span);

}

function loadEverthing(){
    const keys = Object.keys(redOneData);
    const values = Object.values(redOneData);
    
    for (const key_index in keys){
        new_grid(keys[key_index],values[key_index]);
    }

}

window.onload = loadEverthing();
const cart__container = document.getElementsByClassName("cart__container")[0];
const cart__prices = document.getElementsByClassName("cart__prices")[0];

function cart_item_view(amount_number, img_name, price, title) {

    var cartContainer = document.getElementsByClassName("cart__container");

    const article = document.createElement("article");
    article.className = "cart__card";

    const cart__box = document.createElement("div");
    cart__box.className = "cart__box";
    article.appendChild(cart__box);

    const img = document.createElement("img");
    img.className = "cart__img";
    img.src = "assets/img/" + img_name + ".jpg"
    cart__box.appendChild(img);

    const cart__details = document.createElement("div");
    cart__details.className = "cart__details";
    article.appendChild(cart__details);

    const h3 = document.createElement("h3");
    h3.className = "cart__title";
    h3.innerHTML = title;
    cart__details.appendChild(h3);

    const span = document.createElement("span");
    span.className = "cart__price";
    span.innerHTML = price + " €";
    cart__details.appendChild(span);

    const cart__amount = document.createElement("div");
    cart__amount.className = "cart__amount";
    cart__details.appendChild(cart__amount);

    const cart__amount_content = document.createElement("div");
    cart__amount_content.className = "cart__amount-content";
    cart__amount.appendChild(cart__amount_content);

    const span_2 = document.createElement("span");
    span_2.className = "cart__amount-box";
    cart__amount.appendChild(span_2);

    // decrease item amount
    const i_span_2 = document.createElement("i");
    i_span_2.className = "bx bx-minus";
    i_span_2.onclick = function () {
        console.log("decrease item amount");
    }
    span_2.appendChild(i_span_2);

    // Amount number 
    const amount = document.createElement("span");
    amount.className = "cart__amount-number";
    amount.innerHTML = amount_number;
    cart__amount.appendChild(amount);

    const span_3 = document.createElement("span");
    span_3.className = "cart__amount-box";
    cart__amount.appendChild(span_3);

    // increase item amount
    const i_span_3 = document.createElement("i");
    i_span_3.className = "bx bx-plus";
    span_3.appendChild(i_span_3);
    i_span_3.onclick = function () {
        console.log("increase item amount");
    }

    // delete item from cart
    const trash = document.createElement("i");
    trash.className = "bx bx-trash-alt cart__amount-trash";
    trash.onclick = function () {
        console.log("delete item from cart");
    }
    cart__amount.appendChild(trash);

    cartContainer[0].appendChild(article);
}

function create_cart(database) {
    var oldStorage = localStorage.getItem("simo_cart");
    if (oldStorage == null) {
        localStorage.setItem("simo_cart", JSON.stringify({}));
    }
    oldStorage = localStorage.getItem("simo_cart");
    const json = JSON.parse(oldStorage);    
    localStorageToItem(json);
    refresh_view(json);
}

function refresh_view(json){
    if (Object.keys(json).length == 0) {
        cart__container.style.display = "none";
        cart__prices.style.display = "none";
    } else {
        cart__container.style.display = "block";
        cart__prices.style.display = "block";
    }
}

function localStorageToItem(json) {
    while (cart__container.firstChild) {
        cart__container.removeChild(cart__container.lastChild);
    }
    refresh_view(json);
    const keys = Object.keys(json);
    const values = Object.values(json);
    for (_key in keys) {
        const target = values[_key];
        cart_item_view(target[0], target[1], target[2], target[3]);
    }
}
async function getJsonData() {
    const response = await fetch("./assets/js/database.json");
    const database = await response.json();
    create_cart(database);
}

window.onload = getJsonData();
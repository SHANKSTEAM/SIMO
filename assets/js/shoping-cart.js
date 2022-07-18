const cart__container = document.getElementsByClassName("cart__container")[0];
const cart__prices = document.getElementsByClassName("cart__prices")[0];

function create_database() {
    const myLocalStorage = localStorage.getItem("simo_cart");
    if (myLocalStorage == null) {
        localStorage.setItem("simo_cart", JSON.stringify({}));
    } else {
        load_saved_cart_items();
    }
}

function get_local_json() {
    return JSON.parse(localStorage.getItem("simo_cart"));
}
function set_local_json(json) {
    localStorage.setItem("simo_cart", JSON.stringify(json));
    updatedTotal(json);
}

function cart_item_view(item_id, amount_number, img_name, price, title) {

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
        const value = parseInt(amount.innerHTML);
        if (value > 0) {
            const new_value = (value - 1).toString();
            amount.innerHTML = new_value;
            updateCounter(item_id, new_value);
        }
    }
    span_2.appendChild(i_span_2);

    // Amount number 
    const amount = document.createElement("span");
    amount.className = "cart__amount-number";
    amount.setAttribute("id", item_id);
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
        const value = parseInt(amount.innerHTML);
        const new_value = (value + 1).toString();
        amount.innerHTML = new_value;
        updateCounter(item_id, new_value);
    }

    // delete item from cart
    const trash = document.createElement("i");
    trash.className = "bx bx-trash-alt cart__amount-trash";
    trash.onclick = function () {
        cart__container.removeChild(article);
        updateCounter(item_id, -1);
    }
    cart__amount.appendChild(trash);
    
    cart__container.appendChild(article);

    const diver = document.createElement("div");
    diver.className = "item_diver";
    cart__container.appendChild(diver);
}

function add_item_to_cart(item_id, image_name, price, title) {
    const json = get_local_json();
    const keys = Object.keys(json);

    if (json[item_id] == undefined) {
        json[item_id] = ["1", image_name, price, title];
        cart_item_view(item_id, "1", image_name, price, title);
    } else {
        const count = (parseInt(json[item_id][0]) + 1).toString();
        json[item_id] = [count, image_name, price, title];
        document.getElementById(item_id).innerText = count;
    }
    set_local_json(json);
}

function load_saved_cart_items() {
    const json = get_local_json();
    const keys = Object.keys(json);
    const values = Object.values(json);

    for (key in keys) {
        cart_item_view(keys[key], values[key][0], values[key][1], values[key][2], values[key][3]);
    }
    document.getElementsByClassName("cart__prices-item")[0].innerText = "Total (impuestos inc.)";
    updatedTotal(json);
}

function updateCounter(item_id, count) {
    const json = get_local_json();
    if (count == -1) {
        delete json[item_id];
    } else {
        json[item_id][0] = count.toString();
    }
    set_local_json(json);
}

function updatedTotal(json) {
    const keys = Object.keys(json);
    const values = Object.values(json);
    var total = 0;
    for (key in keys) {
        total += parseFloat(values[key][0]) * parseFloat(values[key][2]);
    }
    total = parseFloat(total.toFixed(2));
    const totalString = total.toString().split(".");
    if (totalString[1] != undefined && totalString[1].length == 1) {
        total = total + "0"
    } else {
        total = total + ".00"
    }
    document.getElementsByClassName("cart__prices-total")[0].innerText = total + " €";
    console.log("total " + total);
}

window.onload = create_database();
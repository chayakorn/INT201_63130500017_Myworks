import { products } from "./product.js"
let foodlist = document.querySelector(".food-list");
for (let p of products) {
    let ele = document.createElement("div");
    ele.setAttribute("id", p.id);
    ele.setAttribute("class", "col")
    let list = document.createElement("ul");
    list.innerHTML += `<li><img src="${p.img}"></li>`
    list.innerHTML += `<li>Name :${p.name}</li>`;
    list.innerHTML += `<li>Description :${p.desc}</li>`;
    list.innerHTML += `<li>Price :${p.price}</li>`;
    list.innerHTML += `<li>Stock :${p.stock}</li>`;
    ele.appendChild(list)
    foodlist.appendChild(ele);
}
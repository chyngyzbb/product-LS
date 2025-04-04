// const products = [
//   {
//     id: 1,
//     catygorya: "notebook",
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08089911.png",
//     name: "Ноутбук",
//     price: 45000,
//     description: "Core i5, 8GB RAM, 256GB SSD",
//   },
//   {
//     id: 2,
//     catygorya: "phone",
//     img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-5g/blue.png",
//     name: "Смартфон",
//     price: 25000,
//     description: "6.5 дюйм, 128GB, 48MP камера",
//   },
//   {
//     id: 3,
//     catygorya: "tv",
//     img: "https://sonycenter.kz/image/cache/catalog/products/old/KD50X85TJR/KD50X85TJR-9918-600x600.png",
//     name: "Телевизор",
//     price: 32000,
//     description: "43 дюйм, Smart TV, 4K",
//   },
//   {
//     id: 4,
//     catygorya: "foto",
//     img: "https://topfotograf.ru/wp-content/uploads/2022/04/nikon-d5100-kit-1024x791.png",
//     name: "Фотоаппарат",
//     price: 55000,
//     description: "Зеркалка, 24.2MP, 4K видео",
//   },
//   {
//     id: 5,
//     catygorya: "naush",
//     img: "https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/f9/44/f944c4c3c4879419dd73f34eadbce538/240911160023980944.webp",
//     name: "Наушники",
//     price: 5000,
//     description: "Беспроводные, Bluetooth 5.0",
//   },
// ];

let productList = document.querySelector(".product-list");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
let naush = document.querySelector(".naush");
let phone = document.querySelector(".phone");
let tv = document.querySelector(".tv");
let foto = document.querySelector(".foto");
let notebook = document.querySelector(".notebook");
let formDate = document.querySelector(".formDate");

let createBtn = document.querySelector(".createbtn");
let nazVal = document.querySelector(".nazVal");
let urlVal = document.querySelector(".urlVal");
let priceVal = document.querySelector(".priceVal");
let categorVal = document.querySelector(".categorVal");
let delet = document.querySelector(".delete");
let mode = document.querySelector(".mode");
let date = document.querySelector(".date");
let listt = document.querySelector(".list");
// let contain = document.querySelector(".");

let LS = JSON.parse(localStorage.getItem("product"));

const createProduct = (prod) => {
  productList.innerHTML = "";
  prod.map((product) => {
    const list = document.createElement("div");
    list.className = "list";

    const title = document.createElement("h3");
    title.textContent = product.name;
    title.className = "title";

    const img = document.createElement("img");
    img.setAttribute("src", product.img);
    img.className = "img";

    const price = document.createElement("h5");
    price.textContent = product.price;
    price.className = "price";

    const delet = document.createElement("button");
    delet.textContent = "Өчүрүү";
    delet.className = "delete";

    const listText = document.createElement("div");
    listText.className = "listText";

    delet.addEventListener("click", () => removeProduct(product.id));

    listText.appendChild(title);
    listText.appendChild(price);
    listText.appendChild(delet);

    list.appendChild(img);
    list.appendChild(listText);
    productList.appendChild(list);
  });
};

const renderProduct=()=>{
  let res=JSON.parse(localStorage.getItem('product'))
  createProduct(res)
}
setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  date.textContent = hours + ":" + minutes + ":" + seconds;
}, 1000);


function sortmin() {
  let res = LS.sort((a, b) => a.price - b.price);
  createProduct(res);
}
function sortmax() {
  let res = LS.sort((a, b) => b.price - a.price);
  createProduct(res);
}
function sortCategor(categ) {
  let res = LS.filter((el) => el.catygorya === categ);
  createProduct(res);
}

function removeProduct(id) {
  let url=JSON.parse(localStorage.getItem('product'))
  let res = url.filter((el) => el.id !== id);
  localStorage.setItem("product", JSON.stringify(res));
  renderProduct()
}

let modeLocal = localStorage.getItem("mode");
if (modeLocal === "white") {
  document.body.removeAttribute("class");
} else {
  document.body.className = "light";
}

mode.addEventListener("click", () => {
  let modeLocal = localStorage.getItem("mode") || [];

  if (modeLocal === "white") {
    document.body.className = "light";
    localStorage.setItem("mode", "black");
    listt.style.background = "red";
  } else {
    document.body.removeAttribute("class");
    localStorage.setItem("mode", "white");
  }
});

phone.addEventListener("click", () => {
  sortCategor("phone");
});
foto.addEventListener("click", () => {
  sortCategor("foto");
});
tv.addEventListener("click", () => {
  sortCategor("tv");
});
notebook.addEventListener("click", () => {
  sortCategor("notebook");
});
naush.addEventListener("click", () => {
  sortCategor("naush");
});
min.addEventListener("click", sortmin);
max.addEventListener("click", sortmax);

createProduct(LS)
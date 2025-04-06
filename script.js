
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
let apiBtn = document.querySelector(".api");
let lsBtn = document.querySelector(".ls");
let allBtn = document.querySelector(".all");
let todoBtn = document.querySelector(".todo");
let dbBtn = document.querySelector(".db");

let valueTextTodo = document.querySelector('.valueTextTodo')
let valueDateTodo = document.querySelector('.valueDateTodo')
let addTodo = document.querySelector('.addTodo')

let where=''
let LS = JSON.parse(localStorage.getItem("product"));
let  api = []
let  db = []
let ALL=[]

fetch('http://localhost:3000/%20products')
.then((res)=>res.json())
.then((date)=>{
  db=date
  // ALL.push(...db,...api,...LS)
  // console.log(ALL);
})

fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then((date)=>{
  api=date
  ALL.push(...db,...api,...LS)
  console.log(ALL);
})



console.log(ALL);


const createProduct = (prod) => {
  productList.innerHTML = "";
  prod.map((product) => {
    const list = document.createElement("div");
    list.className = "list";

    const title = document.createElement("h3");
    title.textContent = product.name || product.title.slice(0,35);
    title.className = "title";

    const img = document.createElement("img");
    img.setAttribute("src", product.img || product.image);
    img.className = "img";

    const price = document.createElement("h5");
    price.textContent = product.price+` coм`;
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

// const renderProduct=()=>{
//   let res=JSON.parse(localStorage.getItem('product'))
//   createProduct(res)
// }
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
  let res=''
  if(where==='api'){
    res=api.sort((a,b)=>a.price-b.price)
    createProduct(res)
  }else if(where==="ls"){
    res = LS.sort((a, b) => a.price - b.price);
   createProduct(res);
 }else{
   res = ALL.sort((a, b) => a.price - b.price);
   createProduct(res);
 }
}
function sortmax() {
  let res=''
  if(where==='api'){
    res=api.sort((a,b)=>b.price-a.price)
    createProduct(res)
  }else if(where==="ls"){
   res = LS.sort((a, b) => b.price - a.price);
  createProduct(res);
}else{
  res = ALL.sort((a, b) => b.price - a.price);
  createProduct(res);
}
}
function sortCategor(categ) {
  let res = LS.filter((el) => el.catygorya === categ);
  createProduct(res);
  where='ls'
}

function removeProduct(id) {
  let url=JSON.parse(localStorage.getItem('product'))
  let res = url.filter((el) => el.id !== id);
  localStorage.setItem("product", JSON.stringify(res));
  createProduct(LS)
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
dbBtn.addEventListener('click',()=>{
  createProduct(db)
  where='db'
})
apiBtn.addEventListener('click',()=>{
  createProduct(api)
  where='api'
})
lsBtn.addEventListener('click',()=>{
  createProduct(LS)
  where='ls'
})
allBtn.addEventListener('click',()=>{
  createProduct(ALL)
  where='all'
})

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


// let newTodo=[
//   {
//     text:valueTextTodo.value,
//     date:valueDateTodo.value
//   }
// ]
// //////////////////////////// ToDo

// addTodo.addEventListener("click",()=>{console.log('hello')})








  createProduct(LS)

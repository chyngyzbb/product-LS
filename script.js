let productList = document.querySelector(".product-list");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
let naush = document.querySelector(".naush");
let phone = document.querySelector(".phone");
let tv = document.querySelector(".tv");
let foto = document.querySelector(".foto");
let notebook = document.querySelector(".notebook");
let formDate = document.querySelector(".formDate");

let input = document.querySelectorAll("input");
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
let mock = document.querySelector(".mock");
let openTodo = document.querySelector(".open-todo");
let closeCreate = document.querySelector(".close-create");
let openCreate = document.querySelector(".open-create");
let myCreate = document.querySelector(".my-create");
// /////  Todo
let valueTextTodo = document.querySelector(".valueTextTodo");
let valueDateTodo = document.querySelector(".valueDateTodo");
let addTodo = document.querySelector(".addTodo");
let todoList = document.querySelector(".todoList");
let ol = document.querySelector(".ol");
let closeTodo = document.querySelector(".closeTodo");
let myModal = document.querySelector(".my-modal");
let radioLS = document.querySelector(".radioLS");
let radioJSON = document.querySelector(".radioJSON");
let radioMock = document.querySelector(".radioMock");

///////// API
let apiMOCK="https://6765634852b2a7619f5f643f.mockapi.io/Task"
let apiFACE="https://fakestoreapi.com/products"
let apiJSON='http://localhost:3000/ products'

// //////ToDo
closeTodo.addEventListener("click", () => {
  myModal.style.display = "none";
});
addTodo.addEventListener("click", () => {
  let newTodo = [
    {
      text: valueTextTodo.value,
      date: valueDateTodo.value,
      id: new Date(),
      isComplated: false,
    },
  ];
  let res = JSON.parse(localStorage.getItem("todo")) || [];
  res.push(...newTodo);
  localStorage.setItem("todo", JSON.stringify(res));
  createTodo();
});

const createTodo = () => {
  todoList.innerHTML = "";
  let res = JSON.parse(localStorage.getItem("todo")) || [];
  res.forEach((to, idx) => {
    let li = document.createElement("li");

    let p = document.createElement("p");
    p.textContent = to.text + " - " + to.date;

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", `checkboxTodo(${idx})`);
    to.isComplated ? checkbox.setAttribute("checked", "") : "";

    let deletTodo = document.createElement("button");
    deletTodo.textContent = "delete";
    deletTodo.className = "deletTodo";

    li.className = "liTodo";
    li.appendChild(p);
    li.appendChild(checkbox);
    li.appendChild(deletTodo);
    todoList.appendChild(li);
    to.isComplated ? li.setAttribute("class", "isComplated") : "";

    console.log(res);

    deletTodo.addEventListener("click", () => removeTodo(to.id));
    // checkbox.addEventListener('click',()=>checkboxTodo(to.id))
  });
};

function removeTodo(id) {
  let res = JSON.parse(localStorage.getItem("todo"));
  let results = res.filter((el) => el.id !== id);
  // console.log(results);
  localStorage.setItem("todo", JSON.stringify(results));
  createTodo();
}
function checkboxTodo(idx) {
  let res = JSON.parse(localStorage.getItem("todo"));
  // let results = res.forEach((el) => el.id === id ? el.isComplated = !el.isComplated:'');
  res[idx].isComplated = res[idx].isComplated ? false : true;

  // console.log(results);
  localStorage.setItem("todo", JSON.stringify(res));
  createTodo();
}

createTodo();

/////////////////////////  Create Product
let radioVal=JSON.parse(localStorage.getItem('radio'))

function postProduct(api){
    fetch(`${api}`,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
      name: nazVal.value,
      img: urlVal.value,
      price: priceVal.value,
      catygorya: categorVal.value,
      id: new Date(),
    }),
  })

}

function lsProduct(){
  let dat=[]
  let res=JSON.parse(localStorage.getItem('product'))
  let newProd=[{
    name: nazVal.value,
      img: urlVal.value,
      price: priceVal.value,
      catygorya: categorVal.value,
      id: new Date(),
  }]
   dat.push(...res,...newProd)
  localStorage.setItem('product',JSON.stringify(dat))
}

createBtn.addEventListener("click", () => {
  radioVal.json===false?'':setTimeout(()=>{postProduct(apiJSON)},500)
  radioVal.mock===false?'': postProduct(apiMOCK)
  radioVal.ls===false?'': lsProduct()
});



radioJSON.addEventListener('click',()=>{
  let res = JSON.parse(localStorage.getItem('radio'))||{}
  // let obj={
  //   json:false,
  //   ls:false,
  //   mock:false,
  // }
  res.json=!res.json
  localStorage.setItem('radio',JSON.stringify(res))
})

radioLS.addEventListener('click',()=>{
  let res = JSON.parse(localStorage.getItem('radio'))||{}
  res.ls=!res.ls
  localStorage.setItem('radio',JSON.stringify(res))
})
radioMock.addEventListener('click',()=>{
  let res = JSON.parse(localStorage.getItem('radio'))||{}
  res.mock=!res.mock
  localStorage.setItem('radio',JSON.stringify(res))
})
radioVal.json?radioJSON.setAttribute('checked',''):radioJSON.removeAttribute('checked')
radioVal.ls?radioLS.setAttribute('checked',''):radioLS.removeAttribute('checked')
radioVal.mock?radioMock.setAttribute('checked',''):radioMock.removeAttribute('checked')



// //// Render Product

let where = "";
let LS=[]
let api = [];
let db = [];
let mockApi = [];
let ALL = [];

function getAPI(){
  
// /// GET: localStorage
LS = JSON.parse(localStorage.getItem("product"))||[]

///// GET: mockAPI 
// https://6765634852b2a7619f5f643f.mockapi.io/Task
async function getMockApi() {
  try {
    const res = await fetch("https://6765634852b2a7619f5f643f.mockapi.io/Task");
    mockApi = await res.json();
  } catch (err) {
    console.log(err);
  }
}
getMockApi();

// ///////  GET: db.JSON
http: fetch("http://localhost:3000/ products")
  .then((res) => res.json())
  .then((date) => {
    db = date;
  });

  // /////// GET: faceAPI
fetch(apiFACE)
  .then((res) => res.json())
  .then((date) => {
    api = date;
    ALL=[]
    ALL.push(...db, ...api, ...LS, ...mockApi);
    console.log(ALL);
  });

}
console.log(ALL);

const renderProduct = (prod) => {
  getAPI()
setTimeout(()=>{
  productList.innerHTML = "";
  prod.map((product) => {
    const list = document.createElement("div");
    list.className = "list";

    const title = document.createElement("h3");
    title.textContent = product.name || product.title.slice(0, 35);
    title.className = "title";

    const img = document.createElement("img");
    img.setAttribute("src", product.img || product.image);
    img.className = "img";

    const price = document.createElement("h5");
    price.textContent = product.price + ` coм`;
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
},1000)
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
  let res = "";
  if (where === "api") {
    res = api.sort((a, b) => a.price - b.price);
    renderProduct(res);
  } else if (where === "ls") {
    res = LS.sort((a, b) => a.price - b.price);
    renderProduct(res);
  } else {
    res = ALL.sort((a, b) => a.price - b.price);
    renderProduct(res);
  }
}
function sortmax() {
  let res = "";
  if (where === "api") {
    res = api.sort((a, b) => b.price - a.price);
    renderProduct(res);
  } else if (where === "ls") {
    res = LS.sort((a, b) => b.price - a.price);
    renderProduct(res);
  } else {
    res = ALL.sort((a, b) => b.price - a.price);
    renderProduct(res);
  }
}
function sortCategor(categ) {
  let res = LS.filter((el) => el.catygorya === categ);
  renderProduct(res);
  where = "ls";
}

 function removeProduct(id) {
  // let url = JSON.parse(localStorage.getItem("product"));
  // let res = url.filter((el) => el.id !== id);
  // localStorage.setItem("product", JSON.stringify(res));
  // renderProduct(LS);
  console.log(id);
 fetch(`${apiMOCK}/${id}`,{method:"DELETE"})
 getAPI()
 setTimeout(()=>{renderProduct(mockApi)},1000)
}

// //////  BTNS

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
openCreate.addEventListener("click", () => {
  myCreate.style.display = "flex";
});
closeCreate.addEventListener("click", () => {
  myCreate.style.display = "none";
});
openTodo.addEventListener("click", () => {
  myModal.style.display = "flex";
});
mock.addEventListener("click", () => {
  renderProduct(mockApi);
  where = "mock";
});
dbBtn.addEventListener("click", () => {
  renderProduct(db);
  where = "db";
});
apiBtn.addEventListener("click", () => {
  renderProduct(api);
  where = "api";
});
lsBtn.addEventListener("click", () => {
  renderProduct(LS);
  where = "ls";
});
allBtn.addEventListener("click", () => {
  renderProduct(ALL);
  where = "all";
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

renderProduct(LS);

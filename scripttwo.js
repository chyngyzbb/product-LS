// let createBtn = document.querySelector(".createbtn");
// let nazVal = document.querySelector(".nazVal");
// let urlVal = document.querySelector(".urlVal");
// let priceVal = document.querySelector(".priceVal");
// let categorVal = document.querySelector(".categorVal");
// let delet = document.querySelector(".delete");
// let mode = document.querySelector(".mode");
// let date = document.querySelector(".date");
// let input = document.querySelectorAll("input");



// // let product=[]
// createBtn.addEventListener("click", () => {
//   // const product = JSON.parse(localStorage.getItem("product")) || [];
//   let newProduct={
//       name: nazVal.value,
//       img: urlVal.value,
//       price: priceVal.value,
//       catygorya: categorVal.value,
//       id: new Date(),
//     }
//   fetch('http://localhost:3000/%20products',{
//     method:"POST",
//     body:JSON.stringify(newProduct)
//   })
//   // .then((res)=>res.json())
//   // .then((date)=>product=date)
//   // product.push({
//   //   name: nazVal.value,
//   //   img: urlVal.value,
//   //   price: priceVal.value,
//   //   catygorya: categorVal.value,
//   //   id: new Date(),
//   // });

//   // localStorage.setItem("product", JSON.stringify(product));
 
// });
//  console.log(newProduct);
// input.forEach((el) => el.classList.remove("light"));

// let modeLocal = localStorage.getItem("mode");
// if (modeLocal === "white") {
//   document.body.removeAttribute("class");
//   input.forEach((el) => el.classList.remove("light"));
// } else {
//   document.body.className = "light";
//   input.forEach((el) => el.classList.add("light"));
// }

// mode.addEventListener("click", () => {
//   let modeLocal = localStorage.getItem("mode") || [];

//   if (modeLocal === "white") {
//     document.body.className = "light";
//     input.forEach((el) => el.classList.add("light"));

//     localStorage.setItem("mode", "black");
//     listt.style.background = "red";
//   } else {
//     document.body.removeAttribute("class");
//     input.forEach((el) => el.classList.remove("light"));
//     localStorage.setItem("mode", "white");
//   }
// });

// setInterval(() => {
//   let now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;
//   date.textContent = hours + ":" + minutes + ":" + seconds;
// }, 1000);

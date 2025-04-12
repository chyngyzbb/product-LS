// let valueTextTodo = document.querySelector(".valueTextTodo");
// let valueDateTodo = document.querySelector(".valueDateTodo");
// let addTodo = document.querySelector(".addTodo");
// let todoList = document.querySelector(".todoList");
// let ol = document.querySelector(".ol");

// addTodo.addEventListener("click", () => {
//   let newTodo = [
//     {
//       text: valueTextTodo.value,
//       date: valueDateTodo.value,
//       id: new Date(),
//       isComplated: false,
//     },
//   ];
//   let res = JSON.parse(localStorage.getItem("todo")) || [];
//   res.push(...newTodo);
//   localStorage.setItem("todo", JSON.stringify(res));
//   createTodo();
// });

// const createTodo = () => {
//   todoList.innerHTML = "";
//   let res = JSON.parse(localStorage.getItem("todo")) || [];
//   res.forEach((to,idx) => {
//     let li = document.createElement("li");

//     let p = document.createElement("p");
//     p.textContent = to.text+' - '+to.date;

//     let checkbox = document.createElement("input");
//     checkbox.setAttribute("type", "checkbox");
//     checkbox.setAttribute("onclick", `checkboxTodo(${idx})`);
//     to.isComplated? checkbox.setAttribute('checked',''):''

//     let deletTodo = document.createElement("button");
//     deletTodo.textContent = "delete";
//     deletTodo.className = "deletTodo";

//     li.className='liTodo';
//     li.appendChild(p);
//     li.appendChild(checkbox);
//     li.appendChild(deletTodo);
//     todoList.appendChild(li);
//     to.isComplated? li.setAttribute('class','isComplated'):''

//     console.log(res);

//     deletTodo.addEventListener("click", () => removeTodo(to.id));
//     // checkbox.addEventListener('click',()=>checkboxTodo(to.id))
//   });
// };

// function removeTodo(id) {
//   let res = JSON.parse(localStorage.getItem("todo"));
//   let results = res.filter((el) => el.id !== id);
//   // console.log(results);
//   localStorage.setItem("todo", JSON.stringify(results));
//   createTodo();
// }
// function checkboxTodo(idx) {
//     let res = JSON.parse(localStorage.getItem("todo"));
//     // let results = res.forEach((el) => el.id === id ? el.isComplated = !el.isComplated:'');
//     res[idx].isComplated=res[idx].isComplated?false:true

//     // console.log(results);
//     localStorage.setItem("todo", JSON.stringify(res));
//     createTodo();
//   }

// createTodo();

const backBtn = document.querySelector(".back-btn");
const desc = document.querySelector(".desc");
// const backBtn=document.querySelector('.back-btn')
// const backBtn=document.querySelector('.back-btn')

async function getDetail() {
  let params = new URLSearchParams(window.location.search);
  let api = params.get("id");
  console.log(api);

  let res = await fetch(api);
  let product = await res.json();
  console.log(product);

  desc.innerHTML = `
    <img src="${product.img || product.image}" alt="img">
          <div class="info-desc">
            <h2>${product.name || product.title}</h2>
            <h5>${product.price}</h5>
            <p>${product.description}</p>
            <button>edit</button>
          </div>
    `;


}


backBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
getDetail()

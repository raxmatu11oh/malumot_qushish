const form = document.querySelector("form");
const ismInputi = document.querySelector(".ism");
const famInputi = document.querySelector(".fam");
const sanaInputi = document.querySelector(".data");
const btn2 = document.querySelector(".btn2");
const btn1 = document.querySelector(".btn1");
const container = document.querySelector(".container");
const malumotlar = document.querySelector(".malumotlar");

console.log(form, ismInputi, famInputi, sanaInputi)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    malumotlar.insertAdjacentHTML(
      "afterbegin",
      `
      <figure>
        <img
         width="150px"
         height="150px"
         src="https://source.unsplash.com/random"
         alt="test"
        />
        <figcaption>
          <h4>${ismInputi.value}</h4>
          <p>${famInputi.value}</p>
          <p>${sanaInputi.value}</p>
        </figcaption>
      </figure>
      
    `  
    );
});


btn1.addEventListener("click", (event) => {
  event.preventDefault();
  container.classList.add("active");
});



// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     cardlar1.insertAdjacentHTML(
//       "afterbegin",
//       `
//       <figure>
//         <figcaption>
//          <img
//           width="200px"
//           height="200px"
//           src="./photo_2022-05-10_19-32-57.jpg"
//           alt="test"
//         />
//           <h4>${ismInputi.value}</h4>
//           <p>${famInputi.value}</p>
//           <p>${dataInputi.value}</p>
//         </figcaption>
//       </figure>
//       `
//     );
//   });
//   btn1.addEventListener("click", (event) => {
//     event.preventDefault();
//     cardlar2.classList.add("active");
//     btn.classList.add("active");
//   });









//    <div class="container">
//    <form action="">
//     <label for="">isim kiriting</label>
//     <input class="ism" type="text" id="input" placeholder="ism">
//     <label for="">familya kiriting</label>
//     <input class="fam" type="text" id="input" placeholder="familya">
//     <label for="">tug'ulgan sana</label>
//     <input class="data" type="date" id="input" placeholder="sana">
//     <button class="btn2" type="submit">jo'natish</button>
//    </form>        
// </div>
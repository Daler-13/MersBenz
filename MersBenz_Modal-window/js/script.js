window.addEventListener("DOMContentLoaded", function () {
  let loader = document.querySelector(".loader");
  let modal = document.querySelector(".modal");
  let x = document.querySelector(".modal__close");
  let btn = document.querySelectorAll(".btn");
  console.log(btn);
  function nam() {
    loader.style.display = "none";
  }
  setTimeout(function () {
    nam();
  }, 1000);
  x.addEventListener("click", () => {
    modal.style.display = "none";
  });
  function doc() {
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", () => {
        modal.style.display = "block";
      });
    }
  }
  doc();
});
let tabheaderitem = document.querySelectorAll(".tabheader__item"),
  tabcontent = document.querySelectorAll(".tabcontent");
function tab() {
  for (let i = 0; i < tabheaderitem.length; i++) {
    function open() {
      tabheaderitem[i].classList.add("tabheader__item_active");
      tabcontent[i].classList.add("tabcontentActive");
    }
    function close() {
      tabheaderitem.forEach(function (item) {
        item.classList.remove("tabheader__item_active");
      });
      tabcontent.forEach(function (item) {
        item.classList.remove("tabcontentActive");
      });
    }
    tabheaderitem[i].addEventListener("click", function () {
      close();
      open();
    });
  }
}
tab();
// window.addEventListener("DOMContentLoaded", function () {
//   let btn = document.querySelectorAll(".modal__close");
//   let modal = document.querySelector(".modal");
//   let btn1 = document.querySelectorAll(".btn");
//   let tabheaderItem = document.querySelectorAll(".tabheader__item");
//   btn[0].addEventListener("click", () => {
//     modal.style.display = "none";
//   });
//   btn1[0].addEventListener("click", () => {
//     modal.style.display = "block";
//   });
//   btn1[1].addEventListener("click", () => {
//     modal.style.display = "block";
//   });
//   for (let i = 0; i < tabheaderItem.length; i++) {
//     tabheaderItem[i].addEventListener("click", () => {
//       tabheaderItem[i].classList.toggle("tabheader__item_active");
//     });
//   }
//   let loader = this.document.querySelector(".loader");

//   function nam() {
//     loader.style.display = "none";
//   }
//   setTimeout(function () {
//     nam();
//   }, 3000);
// });



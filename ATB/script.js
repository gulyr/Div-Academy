var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFunctionLanguages() {
  document.querySelector(".languages-dropbtn").style.backgroundColor =
    "transparent" ? "white" : "transparent";
  document
    .getElementById("languages-myDropdown")
    .classList.toggle("languages-show");
}

window.onclick = function (event) {
  if (!event.target.matches(".languages-dropbtn")) {
    var dropdowns = document.getElementsByClassName(
      "languages-dropdown-content"
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("languages-show")) {
        openDropdown.classList.remove("languages-show");
      }
    }
  }
};

document.getElementById("searchbtn").addEventListener("click", function () {
  document.getElementById("searchcontainer").style.display = "block";
});

document
  .getElementById("searchcontainer")
  .addEventListener("click", function () {
    if ((document.getElementById("searchcontainer").style.display = "block")) {
      document.getElementById("searchcontainer").style.display = "none";
    }
  });
document.getElementById("inp").addEventListener("click", function (event) {
  document.getElementById("inp").style.border = "none";
});

// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircle.style.setProperty("--progress", 1 - progress);
//       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//     },
//   },
// });

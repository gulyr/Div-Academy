// header swiper
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

// valyuta section - dropdown1
function myFunctionValyuta1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn1")) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// valyuta section - dropdown2
function myFunctionValyuta2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn2")) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// header languages button
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
function write() {
  let dropbtn = document.querySelector(".dropbtn");
  let myDropdown2 = document.querySelector(".dropdown-content2");
  let selection = document.querySelector(".selection");
  let text = document.getElementById("text");
  dropbtn.innerHTML = myDropdown2.innerHTML;
  selection.addEventListener("click", function () {
    text.innerHTML = selection.innerHTML;
  });
  // for (let i = 0; i < dropbtn.length; i++) {
  //   dropbtn[i].addEventListener("click", function () {
  //     dropbtn[i].style.backgroundColor = "white";
  //   });
  // }
}

// hedaer search button
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

// krediti-hesabla section
function openCity(evt, tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "flex";
  evt.currentTarget.className += " active";
}

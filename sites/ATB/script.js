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
// krediti-hesabla section input-range-slider
// const range1 = document.querySelector("#range-1");
// range1.addEventListener("input", function () {
//   const value = this.value;
//   this.style.background = `linear-gradient(to right, #6f0bbb 10%, #fff 100%)`;
// });

//
function isOlderEdgeOrIE() {
  return (
    window.navigator.userAgent.indexOf("MSIE ") > -1 ||
    !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
    window.navigator.userAgent.indexOf("Edge") > -1
  );
}

function valueTotalRatio(value, min, max) {
  return ((value - min) / (max - min)).toFixed(2);
}

function getLinearGradientCSS(ratio, leftColor, rightColor) {
  return [
    "-webkit-gradient(",
    "linear, ",
    "left top, ",
    "right top, ",
    "color-stop(" + ratio + ", " + leftColor + "), ",
    "color-stop(" + ratio + ", " + rightColor + ")",
    ")",
  ].join("");
}

function updateRangeEl(rangeEl) {
  var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
  rangeEl.style.backgroundImage = getLinearGradientCSS(
    ratio,
    "#6f0bbb",
    "transparent"
  );
}

function initRangeEl1() {
  let rangeEl = document.querySelector("#rangee");
  let textEl = document.querySelector("#range1value");
  let faiz = document.querySelector("#faiz");
  let ayliqodenis = document.querySelector("#ayliqodenis");
  if (isOlderEdgeOrIE()) {
    rangeEl.style.height = "20px";
    rangeEl.addEventListener("change", function (e) {
      textEl.innerHTML = e.target.value + " AZN";
    });
    rangeEl.addEventListener("input", function (e) {
      textEl.innerHTML = e.target.value + " AZN";
    });
  } else {
    updateRangeEl(rangeEl);
    rangeEl.addEventListener("input", function (e) {
      updateRangeEl(e.target);
      textEl.innerHTML = e.target.value + " AZN";
    });
  }
  rangeEl.value;
  //   faiz.innerHTML =
}

initRangeEl1();

function initRangeEl2() {
  let rangeEl = document.querySelector("#rangee2");
  let textEl = document.querySelector("#range2value");

  if (isOlderEdgeOrIE()) {
    rangeEl.style.height = "20px";
    rangeEl.addEventListener("change", function (e) {
      if (e.target.value > 12) {
        textEl.innerHTML =
          e.target.value / 12 + " il" + " " + (e.target.value % 12) + " ay";
      } else {
        textEl.innerHTML = Math.floor(e.target.value / 12) + " il";
      }
    });
    rangeEl.addEventListener("input", function (e) {
      if (e.target.value > 12) {
        textEl.innerHTML =
          e.target.value / 12 + " il" + " " + (e.target.value % 12) + " ay";
      } else {
        textEl.innerHTML = Math.floor(e.target.value / 12) + " il";
      }
    });
  } else {
    updateRangeEl(rangeEl);
    rangeEl.addEventListener("input", function (e) {
      updateRangeEl(e.target);
      if (e.target.value > 12 && e.target.value % 12 != 0) {
        textEl.innerHTML =
          Math.floor(e.target.value / 12) +
          " il" +
          " " +
          Math.floor(e.target.value % 12) +
          " ay";
      } else {
        textEl.innerHTML = Math.floor(e.target.value / 12) + " il";
      }
    });
  }
}

initRangeEl2();

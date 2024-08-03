var swiper = new Swiper('.mySwiper', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content')
        var i
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}

function myFunctionLanguages() {
    document.querySelector('.languages-dropbtn').style.backgroundColor =
        'transparent' ? 'white' : 'transparent'
    document
        .getElementById('languages-myDropdown')
        .classList.toggle('languages-show')
}

window.onclick = function(event) {
    if (!event.target.matches('.languages-dropbtn')) {
        var dropdowns = document.getElementsByClassName(
            'languages-dropdown-content'
        )
        var i
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('languages-show')) {
                openDropdown.classList.remove('languages-show')
            }
        }
    }
}
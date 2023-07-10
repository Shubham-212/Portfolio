
// acive menu
$(document).ready(function () {

    $('.main_menu>li>a').click(function () {


        $('.main_menu').find('li>a').removeClass('active')
        $(this).addClass('active');
    });
})

//toggle button
function myFunction(x) {
    x.classList.toggle("change");
};

// init Isotope
var $grid = $('.grid').isotope({
    // options
});

// filter items on button click
$('.filter-button-group').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    $('.filter-button-group').find('li').removeClass('filter_button_active')
    $(this).addClass('filter_button_active');

    $('.active_navigation').find('li').removeClass('nav_active')
    $(this).addClass('nav_active');
});
$('.active_navigation').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    $('.active_navigation').find('li').removeClass('nav_active')
    $(this).addClass('nav_active');
});

//form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzXoKtfjWQ2fWl5RfTstrS8XgnN66DPhCcU6Ut83-ap3L_0o-bUhhfppB9LiK96gDgR/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
const icon = document.getElementById('icon')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(_response => {
        msg.innerHTML = "Messaeg sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000)
        form.reset()
    })
    .then(_response => {
        icon.innerHTML = '<i class="fa-solid fa-check"></i>'
        setTimeout(function(){
            icon.innerHTML = ""
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// scroll to top
$(document).ready(function () {
    $(window).on('scroll', function () {
        var s = $(window).scrollTop()
        // console.log(s);
        if (s >= 300) {
            $('#scroll_top').css("opacity", "1")
        }
        else {
            $('#scroll_top').css("opacity", "0")
        }

        $('#scroll_top').click(function () {

            $(window).scrollTop({ top: 0 })

        })
    })
})
//button view more
function showLoading() {
    var viewMoreButton = document.getElementById('viewMoreButton');
    viewMoreButton.style.display = 'none';

    var homeContentMore  = document.getElementById('home_tab_content_more');
    homeContentMore.style.display = 'grid';
}


//button prev and next slide
document.addEventListener('DOMContentLoaded', function() {
    let list = document.getElementById('list');
    let items = document.querySelectorAll('.item-slider');
    let dots = document.querySelectorAll('.dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    if (!list || items.length === 0 || dots.length === 0 || !prev || !next) {
        console.error('Một hoặc nhiều phần tử không tồn tại trong DOM.');
        return;
    }

    let active = 0;
    let lengthItems = items.length - 1;

    next.onclick = function() {
        if (active + 1 > lengthItems) {
            active = 0;
        } else {
            active += 1;
        }
        reloadSlider();
    }

    prev.onclick = function() {
        if (active - 1 < 0) {
            active = lengthItems;
        } else {
            active -= 1;
        }
        reloadSlider();
    }

    let refreshSlider = setInterval(() => { next.click() }, 5000);
    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.dots li.active');
        if (lastActiveDot) {
            lastActiveDot.classList.remove('active');
        }

        if (dots[active]) {
            dots[active].classList.add('active');
        } else {
            console.error('Phần tử dot tại vị trí active không tồn tại.');
        }

        clearInterval(refreshSlider);
        refreshSlider = setInterval(() => { next.click() }, 5000);
    }

    // top deal slide
    let list1 = document.getElementById('list1');
    let product = document.querySelectorAll('.top-deal');
    let prev1 = document.getElementById('prev1');
    let next1 = document.getElementById('next1');

    let active1 = 0;
    let length_product = product.length - 1;

    next1.onclick = function() {
        if (active1 + 1 > length_product) {
            active1 = 0;
        } else {
            active1 += 1;
        }
        reloadSlider1();
    }

    prev1.onclick = function() {
        if (active1 - 1 < 0) {
            active1 = length_product;
        } else {
            active1 -= 1;
        }
        reloadSlider1();
    }
    function reloadSlider1() {
        if (active1 >= 0 && active1 < product.length) {
            let checkLeft = product[active1].offsetLeft;
            list1.style.left = -checkLeft + 'px';
        } else {
            console.error('Không tìm thấy phần tử tại vị trí active trong mảng product.');
        }
    }
});

//menu tab nhap khau chinh hang
$(document).ready(function(){
    $('.box-list-products .nhapkhau').hide();
    $('.nhapkhau:first-child').fadeIn();
    $('.tab-product-nk div').click(function(){
        $('.tab-product-nk div').removeClass('active');
        $(this).addClass('active');
        $('.nhapkhau').hide();
        id = $(this).children('a').attr('href')
        $(id).fadeIn();
        return false;
    });
});

//menu tab co the ban thich
$(document).ready(function(){
    $('.box-list-products-1 .like').hide();
    $('.like:first-child').fadeIn();
    $('.tab-pr .content').click(function(){
        $('.tab-pr .content').removeClass('active');
        $(this).addClass('active');
        $('.like').hide();
        id = $(this).children('a').attr('href')
        $(id).fadeIn();
        return false;
    });
});
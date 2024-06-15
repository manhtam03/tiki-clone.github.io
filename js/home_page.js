//button view more
function showLoading() {
    var viewMoreButton = document.getElementById('viewMoreButton');
    viewMoreButton.style.display = 'none';

    var loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'inline-block';

    var homeContentMore  = document.getElementById('home_tab_content_more');

    setTimeout(function() {
        loadingSpinner.style.display = 'none';
        homeContentMore.style.display = 'grid';
    }, 2000);
}

//button prev and next slide
document.addEventListener('DOMContentLoaded', function() {
    let list = document.getElementById('list');
    let items = document.querySelectorAll('.item-slider');
    let dots = document.querySelectorAll('.slider .dots li');
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

    // function reloadSlider() {
    //     let checkLeft = items[active].offsetLeft;
    //     list.style.left = -checkLeft + 'px';

    //     let lastActiveDot = document.querySelector('.slider .dots li.active');
    //     lastActiveDot.classList.remove('active');
    //     dots[active].classList.add('active');

    //     clearInterval(refreshSlider);
    //     refreshSlider = setInterval(() => { next.click() }, 5000);
    // }
    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.slider .dots li.active');
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
});

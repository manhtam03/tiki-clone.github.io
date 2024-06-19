const placeholders = ["Giao nhanh 2H & đúng khung giờ", "100% Hàng tuyển chọn"];
const searchInput = document.getElementById('searchInput');
let placeholderIndex = 0;

function updatePlaceholder() {
searchInput.placeholder = placeholders[placeholderIndex];
placeholderIndex = (placeholderIndex + 1) % placeholders.length;
}
setInterval(updatePlaceholder, 5000);
updatePlaceholder();

const boxsearch = document.getElementById('box-search');

function showBoxSearch(){
    boxsearch.style.display = 'block';
}

document.addEventListener('click', function(event) {
    if (!boxsearch.contains(event.target) && !searchInput.contains(event.target)) {
        boxsearch.style.display = 'none';
    }
})

boxsearch.addEventListener('click', function(event) {
    event.stopPropagation();
});
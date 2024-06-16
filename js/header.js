const placeholders = ["Giao nhanh 2H & đúng khung giờ", "100% Hàng tuyển chọn"];
const searchInput = document.getElementById('searchInput');
let placeholderIndex = 0;

function updatePlaceholder() {
searchInput.placeholder = placeholders[placeholderIndex];
placeholderIndex = (placeholderIndex + 1) % placeholders.length;
}
setInterval(updatePlaceholder, 5000);
updatePlaceholder();
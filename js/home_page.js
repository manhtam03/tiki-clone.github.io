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
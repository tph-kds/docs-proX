document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('mkdocs-search-query');
    const clearButton = document.querySelector('.clear-search');

    if (searchInput && clearButton) {
        searchInput.addEventListener('input', function() {
            clearButton.style.display = this.value.length > 0 ? 'inline-block' : 'none';
        });

        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            clearButton.style.display = 'none';
            searchInput.focus();
        });
    }
});
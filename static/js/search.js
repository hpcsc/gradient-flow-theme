// Simple search functionality
function initSearch() {
    const searchInput = document.querySelector('#search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const posts = document.querySelectorAll('.post-card');
        
        posts.forEach(post => {
            const title = post.querySelector('.post-title').textContent.toLowerCase();
            const excerpt = post.querySelector('.post-excerpt')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
}

// Initialize if search is present
if (document.getElementById('search-input')) {
    initSearch();
}
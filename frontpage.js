// Search Books by Title or Author
function searchBooks() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let books = document.getElementsByClassName('book-card');

    for (let i = 0; i < books.length; i++) {
        let title = books[i].getAttribute('data-title').toLowerCase();
        let author = books[i].getAttribute('data-author').toLowerCase();

        // If the input matches the title or author, show the book; otherwise, hide it
        if (title.includes(input) || author.includes(input)) {
            books[i].style.display = "block";
        } else {
            books[i].style.display = "none";
        }
    }
}

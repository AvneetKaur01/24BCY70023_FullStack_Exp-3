import { useState } from "react";
import './Books1.css';

function Books1() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addBook = () => {
    if (title.trim() === "" || author.trim() === "") {
      alert("Please enter both Title and Author!");
      return;
    }

    const newBook = { title, author };
    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
  };

  // Fixed: Define filteredBooks
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-wrapper">
      <h1>Library Management System</h1>
      
      <input
        className="search-input"
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="books-form">
        <input
          type="text"
          placeholder="New Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div className="books-display">
        <h3>Library Books</h3>
        {filteredBooks.length > 0 ? (
          <ul>
            {filteredBooks.map((book, index) => (
              <li key={index}>
                <b>{book.title}</b> by {book.author}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-books">No books found</p>
        )}
      </div>
    </div>
  );
}

export default Books1;
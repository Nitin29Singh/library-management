import React, { useState } from "react";
import "./LibraryManager.css";

function LibraryManager() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add new book
  const handleAddBook = () => {
    if (!newTitle.trim() || !newAuthor.trim()) return;
    const newBook = { title: newTitle.trim(), author: newAuthor.trim() };
    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Remove a book by index
  const handleRemoveBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  // Filter books by search
  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-container">
      <h2>Library Management</h2>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add book form */}
      <div className="add-form">
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      {/* Book list */}
      <ul className="book-list">
        {filteredBooks.map((book, index) => (
          <li key={index} className="book-item">
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <button onClick={() => handleRemoveBook(index)}>Remove</button>
          </li>
        ))}
        {filteredBooks.length === 0 && (
          <p className="no-results">No books found.</p>
        )}
      </ul>
    </div>
  );
}

export default LibraryManager;

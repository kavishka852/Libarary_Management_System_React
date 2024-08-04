import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import BookService from '../../services/BookService';

const BookForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BookService.createBook(book).then(response => {
      console.log('Book created successfully:', response);
    });
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={book.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Genre"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Add Book
        </Button>
      </form>
    </div>
  );
};

export default BookForm;

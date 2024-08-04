import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import BookService from '../../services/BookService';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: ''
  });

  useEffect(() => {
    BookService.getBookById(id).then(response => {
      setBook(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BookService.updateBook(id, book).then(response => {
      console.log('Book updated successfully:', response);
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
          Save
        </Button>
      </form>
    </div>
  );
};

export default BookDetail;

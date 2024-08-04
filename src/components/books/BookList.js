import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import BookService from '../../services/BookService';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookService.getBooks().then(response => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Button variant="contained" color="primary" component={Link} to="/books/new">
        Add Book
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => (
            <TableRow key={book.id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" component={Link} to={`/books/${book.id}`}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookList;

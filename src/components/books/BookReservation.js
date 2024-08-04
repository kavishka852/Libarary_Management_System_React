import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import ReservationService from '../../services/ReservationService';

const BookReservation = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    ReservationService.reserveBook(bookId, userId).then(response => {
      console.log('Book reserved successfully:', response);
    });
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Typography variant="h4">Reserve a Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Reserve
        </Button>
      </form>
    </div>
  );
};

export default BookReservation;

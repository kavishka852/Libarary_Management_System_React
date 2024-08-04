import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reservations/';

const reserveBook = (bookId, userId) => {
  return axios.post(API_URL, { bookId, userId });
};

const cancelReservation = (reservationId) => {
  return axios.delete(API_URL + reservationId);
};

const getReservedBooks = (userId) => {
  return axios.get(API_URL + 'user/' + userId);
};

const ReservationService = {
  reserveBook,
  cancelReservation,
  getReservedBooks
};

export default ReservationService;

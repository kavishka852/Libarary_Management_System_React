import axios from 'axios';

const API_URL = 'http://localhost:8080/api/borrows/';

const borrowBook = (bookId, userId) => {
  return axios.post(API_URL, { bookId, userId });
};

const returnBook = (borrowId) => {
  return axios.post(API_URL + borrowId + '/return');
};

const getBorrowedBooks = (userId) => {
  return axios.get(API_URL + 'user/' + userId);
};

const BorrowService = {
  borrowBook,
  returnBook,
  getBorrowedBooks
};

export default BorrowService;

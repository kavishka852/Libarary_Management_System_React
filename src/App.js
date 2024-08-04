import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import BookList from './components/books/BookList';
import BookDetail from './components/books/BookDetail';
import BookForm from './components/books/BookForm';
import BookReservation from './components/books/BookReservation';
import UserList from './components/users/UserList';
import UserDetail from './components/users/UserDetail';
import UserProfile from './components/users/UserProfile';
import UserForm from './components/users/UserForm';
import Dashboard from './components/dashboard/Dashboard';
import Reports from './components/dashboard/Reports';
import Analytics from './components/dashboard/Analytics';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/books/new" element={<BookForm />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

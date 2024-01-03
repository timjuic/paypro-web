import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UsersPage from './components/usersPage';
import Navigation from './components/navigation';
import TransactionsPage from './components/transactionsPage';
import TerminalsPage from './components/terminalsPage';
import MerchantsPage from './components/merchantsPage';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/users" />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/terminals" element={<TerminalsPage />} />
        <Route path="/merchants" element={<MerchantsPage />} />
      </Routes>
    </Router>
  );
}


export default App;
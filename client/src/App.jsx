import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext'; // Certifique-se que o caminho está correto
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import BriefingDetailPage from './pages/BriefingDetailPage/BriefingDetailPage';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/briefing/:briefingId" element={<BriefingDetailPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

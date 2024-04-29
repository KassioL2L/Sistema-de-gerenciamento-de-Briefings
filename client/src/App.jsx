import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import BriefingDetailPage from './pages/BriefingDetailPage/BriefingDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/briefing/:briefingId" element={<BriefingDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WeatherPage from './components/WeatherPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/weather" replace />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
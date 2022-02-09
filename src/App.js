import { Routes, Route } from 'react-router-dom'

import Login from './views/pages/Login/Login';
import TheLayout from "./components/TheLayOut/TheLayOut";

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TheLayout />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;

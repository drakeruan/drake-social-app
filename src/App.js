import { Routes, Route } from 'react-router-dom'

import TheLayout from "./components/TheLayOut/TheLayOut";

import './App.css'
import Login from './views/pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TheLayout />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;

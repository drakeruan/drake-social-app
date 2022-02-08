import { Routes, Route } from 'react-router-dom'

import TheLayout from "./components/TheLayOut/TheLayOut";

import './app.css'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<TheLayout />} />
    </Routes>

  );
}

export default App;

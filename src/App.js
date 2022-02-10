import { Routes, Route } from 'react-router-dom'

import Login from './views/pages/Login/Login';
import TheLayout from "./components/TheLayOut/TheLayOut";
import RequireAuth from './components/RequireAuth/RequireAuth'

import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/*" element={<TheLayout />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;

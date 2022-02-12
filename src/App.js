import { Routes, Route } from 'react-router-dom'

import Login from './components/Login/Login';
import Layout from "./components/Layout/Layout";
import RequireAuth from './components/RequireAuth/RequireAuth'

import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/*" element={<Layout />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;

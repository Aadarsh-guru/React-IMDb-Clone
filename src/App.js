import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { routePath } from './constants/route';
import CategoryMovie from './pages/CategoryMovie';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.categories} element={<CategoryMovie />} />
        <Route path={routePath.invalid} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

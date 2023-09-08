import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import SearchPage from './Components/SearchPage/SearchPage';
import CompanyPage from './Components/CompanyPage/CompanyPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AboutPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/company' element={<CompanyPage />} />
        </Routes>
      </Router>
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      {/* <SearchPage /> */}
      {/* <CompanyPage /> */}
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from './globalStyles'
import HomePage from './pages/HomePage';


function App() {
  return (
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />  
        </Routes>
      </Router>
  );
}

export default App;

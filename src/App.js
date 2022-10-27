
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from './globalStyles'
import Footer from './components/Footer/Footer'
import { lazy } from "react";


const HomePage = lazy(() => import ('./pages/HomePage'))

function App() {
  return (
    
      <Router>
        
          <GlobalStyle />
          <Navbar />  
          <Routes>
            <Route path='/' element={<HomePage />} />  
          </Routes>
          <Footer />
        
      </Router>
  );
}

export default App;

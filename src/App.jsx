import Category from "./components/Category";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OnlineDelievery from "./components/OnlineDelievery";
import TopRestaurant from "./components/TopRestaurant";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router >
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  );
}

export default App;

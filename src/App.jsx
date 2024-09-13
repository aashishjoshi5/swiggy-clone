
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Help from "./pages/Help";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import Offers from "./pages/Offers";

function App() {
  return (
    <Router >
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/help' element={<Help />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/search' element={<Search />} />
        <Route path='/offers' element={<Offers />} />
      </Routes>
    </Router>
  );
}

export default App;

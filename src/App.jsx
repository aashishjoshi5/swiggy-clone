
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Help from "./pages/Help";

function App() {
  return (
    <Router >
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/help' element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;

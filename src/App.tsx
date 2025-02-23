import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/login";
import Basket from "./components/basket/Basket";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;

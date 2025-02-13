import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Products from "./components/products/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

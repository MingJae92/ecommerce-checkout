import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";

import Basket from "./components/basket/Basket";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/basket" element={<Basket/>}></Route>

      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcome";
import Products from "./pages/products";

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
  );
}

export default App;

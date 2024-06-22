import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcome";
import Products from "./pages/products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

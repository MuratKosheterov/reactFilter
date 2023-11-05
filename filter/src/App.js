import React, { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import data from "./components/data";

function App() {
  const [filtered, setFiltered] = useState(data);

  function setFilteredProducts(cat) {
    const newFilter = data.filter((item) => item.category === cat);
    setFiltered(newFilter);
  }

  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => setFiltered(data)}>All product</button>
      <button onClick={() => setFilteredProducts("jewelery")}>Jewelry</button>
      <button onClick={() => setFilteredProducts("men's clothing")}>
        men's clothe
      </button>
      <button onClick={() => setFilteredProducts("women's clothing")}>
        womens clothe
      </button>
      <button onClick={() => setFilteredProducts("electronics")}>
        electronics
      </button>
      <Home filtered={filtered} />
    </div>
  );
}

export default App;

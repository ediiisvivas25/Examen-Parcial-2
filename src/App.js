import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { gamesData, categories } from './data/games';

function App() {
  const [games, setGames] = useState(gamesData);
  const [filteredGames, setFilteredGames] = useState(gamesData);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let result = games;
    
    // Filtrar por categoría
    if (selectedCategory !== "Todos") {
      result = result.filter(game => game.category === selectedCategory);
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm.trim() !== "") {
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredGames(result);
  }, [selectedCategory, searchTerm, games]);

  const addToCart = (game) => {
    const existingItem = cart.find(item => item.id === game.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === game.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCart([...cart, {...game, quantity: 1}]);
    }
  };

  const removeFromCart = (gameId) => {
    setCart(cart.filter(item => item.id !== gameId));
  };

  const updateQuantity = (gameId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(gameId);
      return;
    }
    setCart(cart.map(item => 
      item.id === gameId ? {...item, quantity} : item
    ));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <Header cartItems={cart.length} toggleCart={toggleCart} />
      <main className="container">
        {showCart ? (
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart} 
            updateQuantity={updateQuantity}
            toggleCart={toggleCart}
          />
        ) : (
          <>
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar juegos..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </div>
            <div className="category-filter">
              <h3>Filtrar por categoría:</h3>
              <div className="category-buttons">
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <ProductList games={filteredGames} addToCart={addToCart} searchTerm={searchTerm} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
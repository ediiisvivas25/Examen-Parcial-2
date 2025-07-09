import React from 'react';

function ProductList({ games, addToCart, searchTerm }) {
  return (
    <div>
      <h2>Catálogo de Videojuegos</h2>
      {games.length === 0 ? (
        <div className="no-results-container">
          <p className="no-results">
            {searchTerm ? 
              "No se encontró el juego buscado. Pronto se agregará." : 
              "No se encontraron juegos en esta categoría"}
          </p>
        </div>
      ) : (
        <div className="product-grid">
          {games.map(game => (
            <div key={game.id} className="product-card">
              <img 
                src={game.image} 
                alt={game.title} 
                className="product-image" 
              />
              <div className="product-info">
                <h3 className="product-title">{game.title}</h3>
                <p className="product-platform">{game.platform}</p>
                <p className="product-category">{game.category}</p>
                <p className="product-price">${game.price.toFixed(2)}</p>
                <button 
                  className="add-to-cart" 
                  onClick={() => addToCart(game)}
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
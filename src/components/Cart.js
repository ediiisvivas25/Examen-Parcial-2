import React from 'react';

function Cart({ cart, removeFromCart, updateQuantity, toggleCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-title">
        <h2>Tu Carrito</h2>
        <button className="continue-shopping" onClick={toggleCart}>
          Seguir Comprando
        </button>
      </div>
      
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="cart-item-image" 
                />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="cart-quantity">
                <button 
                  className="quantity-btn" 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <input 
                  type="number" 
                  className="quantity-input" 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                  min="1"
                />
                <button 
                  className="quantity-btn" 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          
          <div className="cart-total">
            Total: ${calculateTotal().toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
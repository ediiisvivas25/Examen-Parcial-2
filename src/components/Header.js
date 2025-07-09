import React from 'react';

function Header({ cartItems, toggleCart }) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>GameStore</h1>
        <button style={styles.cartButton} onClick={toggleCart}>
          🛒 Carrito ({cartItems})
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#4361ee',
    color: 'white',
    padding: '15px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem'
  },
  cartButton: {
    backgroundColor: 'white',
    color: '#4361ee',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Header;
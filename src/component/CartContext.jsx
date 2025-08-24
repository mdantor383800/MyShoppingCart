import React, { useMemo, useState } from 'react';

import { CartContext } from './useCart'

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (books, quantity = 1) => {
    setCartItems(prev => {
      const index = prev.findIndex(item => item.id === books.id);

      if (index > -1) {
        const newItems = [...prev];
        newItems[index] = {
          ...newItems[index],
          qty: newItems[index].qty + Number(quantity)
        };
        return newItems;
      } else {
        return [...prev, { ...books, qty: Number(quantity) }];
      }
    });
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.qty || 0), 0),
    [cartItems]
  );

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}



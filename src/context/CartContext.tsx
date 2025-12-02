import React, { createContext, useContext, useMemo, useReducer } from 'react';
import type { CartAction, CartItem, CartState, ArticleSummary, ID } from '../types/cart';

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { article, quantity = 1 } = action.payload;
      const existing = state.items.find(i => i.articleId === article.id);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.articleId === article.id ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      const newItem: CartItem = {
        articleId: article.id,
        title: article.title,
        price: article.price,
        quantity,
      };
      return { items: [...state.items, newItem] };
    }
    case 'REMOVE_ITEM': {
      const { articleId } = action.payload;
      return { items: state.items.filter(i => i.articleId !== articleId) };
    }
    case 'UPDATE_QUANTITY': {
      const { articleId, quantity } = action.payload;
      if (quantity <= 0) {
        return { items: state.items.filter(i => i.articleId !== articleId) };
      }
      return {
        items: state.items.map(i => (i.articleId === articleId ? { ...i, quantity } : i)),
      };
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}

type CartContextValue = {
  state: CartState;
  addItem: (article: ArticleSummary, quantity?: number) => void;
  removeItem: (articleId: ID) => void;
  updateQuantity: (articleId: ID, quantity: number) => void;
  clearCart: () => void;
  totalQuantity: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo<CartContextValue>(() => {
    const totalQuantity = state.items.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);

    return {
      state,
      addItem: (article, quantity) => dispatch({ type: 'ADD_ITEM', payload: { article, quantity } }),
      removeItem: (articleId) => dispatch({ type: 'REMOVE_ITEM', payload: { articleId } }),
      updateQuantity: (articleId, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { articleId, quantity } }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      totalQuantity,
      subtotal,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used within CartProvider');
  return ctx;
}
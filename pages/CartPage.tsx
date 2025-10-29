// src/pages/CartPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../src/store/store';
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from '../src/store/cartSlice';

const CartPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p className="text-center mt-20">Your cart is empty</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 py-1 border rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item))} className="px-2 py-1 border rounded">+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right font-bold text-lg">
        Total: ${totalPrice.toFixed(2)}
      </div>
      <div className="mt-6 text-right">
        <button onClick={() => dispatch(clearCart())} className="px-6 py-2 bg-red-500 text-white rounded">Clear Cart</button>
      </div>
    </div>
  );
};

export default CartPage;

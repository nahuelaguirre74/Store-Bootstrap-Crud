import React, {Children, createContext, useState} from 'react';

export const CartContext = createContext();
export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addToCart = (product)=> {
        setCart ([...cart,product])
    };

    const removeFromCart = (productId) =>{
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity =(productId, quiantity)=>{
        setCart(cart.map(product =>
            product.id === productId ? {...product, quiantity} : product
        ));
    }

    const total = cart.reduce((sum, product)=> sum + product.price * product.quiantity,0);

    return (
        <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity,total}}>
            {children}
        </CartContext.Provider>
    );
};
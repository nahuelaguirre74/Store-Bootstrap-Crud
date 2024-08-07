import React, {useContext}from "react";
import { CartContext } from "../context/CartContext";

const Carrito = ()=>{

    const { cart, removeFromCart, updateQuantity, total} =  useContext(CartContext);

    return(
        <div className="container">
            <h1>Carrito</h1>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ):(
                <div>
                    {cart.map( product => (
                        <div key={product.id}>
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                            <input
                                type="number"
                                value={product.quantity}
                                onChange={(e)=> updateQuantity(product.id, e.target.value)}
                             />

                            <button onClick={()=> removeFromCart (product.id)}>Eliminar</button>
                        </div>
                    ))}
                    <h3>Total: {total}</h3>
                </div>
            )}

        </div>
    );

};

export default Carrito;
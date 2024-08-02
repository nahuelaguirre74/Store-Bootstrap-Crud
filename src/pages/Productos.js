import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/Api";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [searchTerm, setsearchTerms] = useState('');

    useEffect(() => {
        fetchProducts().then(response => setProductos(response.data));
    }, []);

    const filteredProducts = productos.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar productos..."
                onChange={(e) => setsearchTerm(e.target.value)}
            />

            <div>
                {filteredProducts.map(product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <img src={product.image} alt={product.title} />
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Productos;
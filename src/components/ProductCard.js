import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({product, addToCard})=>(
    <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Tile>{product.title}</Card.Tile>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary" onClick={()=> addToCard(product)}>Añadir al Carrito</Button>
        </Card.Body>
    </Card>
);

export default ProductCard;
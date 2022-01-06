import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Card, Button} from 'react-bootstrap'

function CardCarousel({ name, price, rating, img, brand, sold, seller }) {
    return (
        <div>
            <Card style={{ width: '18rem', padding: '100px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title variant="">{name}</Card.Title>
                    <Card.Text>
                        <p>price: {"$"}{price}</p>
                        <p>rating: {rating}</p>
                        <p>brand: {brand}</p>
                        <p>In stock: {sold ? "False" : "True" }</p>
                        <p>seller: {seller}</p>
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CardCarousel

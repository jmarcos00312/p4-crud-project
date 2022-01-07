import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

function CardCarousel({ currentUser, id, name, price, rating, img, brand, sold, seller, buyer }) {
    const [buy, setBuy] = useState(sold)
    const navigate = useNavigate()

    const handleBuy = () => {
        if (currentUser.first_name !== seller) {
            console.log("same")
            fetch(`api/items/${id}/sold`, {
                method: "PATCH",
                headers: { 'Content-Type': "application/json", },
                body: JSON.stringify(buy)
            }).then(r => r.json().then(result => console.log(result)))
            navigate('/purchased_items')
            window.location.reload(false)
        } else {
            alert("Can't buy your own shoes")
        }
    }



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
                        <p>In stock: {sold ? "False" : "True"}</p>
                        <p>seller: {seller}</p>
                    </Card.Text>
                    {currentUser &&
                        <div>
                            <Button variant="primary" onClick={handleBuy}>Buy</Button>
                        </div>
                    }

                </Card.Body>
            </Card>

        </div>
    )
}

export default CardCarousel

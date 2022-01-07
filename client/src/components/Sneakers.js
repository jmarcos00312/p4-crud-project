import React, { useState, useEffect } from "react";
import CardCarousel from "./CardCarousel";

export default function Sneaker({ currentUser }) {
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch('/items').then(r => r.json()).then(data => {
            setShoes(data)
        })

    }, [])
    let everyshoes = shoes.map(shoes => {
        return (
            <CardCarousel id={shoes.id} buyer={shoes.buyer_id} name={shoes.name} price={shoes.price} img={shoes.img_url} brand={shoes.brand.name} rating={shoes.rating} sold={shoes.sold} seller={shoes.seller.first_name} currentUser={currentUser} />
        )
    })
    return (
        <div className="row_poster">
            {everyshoes}
        </div>
    )
}


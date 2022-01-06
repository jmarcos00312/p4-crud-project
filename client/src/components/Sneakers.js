import React, { useState, useEffect } from "react";
import CardCarousel from "./CardCarousel";

export default function Sneaker({ setShoesArray, shoesArray }) {
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch('/items').then(r => r.json()).then(data => {
            setShoes(data)
            setShoesArray(data)
        })
    }, [setShoes])
    let everyshoes = shoes.map(shoes => {
        return (
            <div className="App">
                <CardCarousel name={shoes.name} price={shoes.price} img={shoes.img_url} brand={shoes.brand.name} rating={shoes.rating} sold={shoes.sold} seller={shoes.seller.first_name} />
            </div>
        )
    })
    return (
        <div className="App">
            {everyshoes}
        </div>
    )
}


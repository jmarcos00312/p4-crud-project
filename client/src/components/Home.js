import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import CardCarousel from "./CardCarousel";
import Header from "./Header";
import Banner from "./Banner";
export default function Home() {
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetch('/items', { credentials: "include", }).then(r => r.json()).then(data => setShoes(data))
    }, [])
    console.log(shoes)

    let everyshoes = shoes.map(shoes => {
        return (
            <div className="App">
                <Carousel>
                    {console.log(shoes.sold)}
                    <CardCarousel name={shoes.name} price={shoes.price} img={shoes.img_url} brand={shoes.brand.name} rating={shoes.rating} sold={shoes.sold} seller={shoes.seller.first_name} />
                </Carousel>
            </div>
        )
    })
    return (
        <>
        <div>
        <Header />
        <Banner />
        </div>
       
        </>
    )
}

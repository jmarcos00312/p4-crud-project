import React from 'react'
import { CarouselProvider, Slider } from "pure-react-carousel";
import Carousel from 'react-bootstrap/Carousel'
import { Card, Icon, Image } from 'semantic-ui-react'
// import Card from 'react-bootstrap/Card'
function CardCarousel({ name, price, rating, img, brand, sold, seller }) {
    return (
        <div>
            <Carousel.Item interval={1000}>
                <img src={img} className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Caption>
                <h2>{name}</h2>
                <p>price: {"$"}{price}</p>
                <p>rating: {rating}</p>
                <p>brand: {brand}</p>
                <p>In stock: {sold}</p>
                <p>seller: {seller}</p>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </div>

    )
}

export default CardCarousel

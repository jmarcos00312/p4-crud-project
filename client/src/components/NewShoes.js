import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { image } from './4.jpg'
import { useNavigate } from "react-router-dom"

function NewShoes({ currentUser }) {
    const navigate = useNavigate()

    const [addingShoes, setAddingShoes] = useState(false)
    const [newShoeForm, setNewShoeForm] = useState({
        name: "",
        price: 0,
        rating: 0,
        img_url: "",
        brand_id: 0,
        seller_id: currentUser.id
    })
    // console.log(id)
    const handleChange = (e) => {
        console.log(newShoeForm.img_url)
        setNewShoeForm({ ...newShoeForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newShoeForm),
        };
        fetch('/items', configObj).then(r => {
            if (r.ok) {
                r.json().then(added => console.log(added))
                setNewShoeForm({
                    name: "",
                    price: 0,
                    rating: 0,
                    img_url: "",
                    brand_id: 0,
                    seller_id: currentUser.id
                })
                navigate("/")

            } else {
                r.json().then((errors) => {
                    console.error(errors);
                });
            }
        })

    }

    return (
        <div>
            {!currentUser && <div><h1>You are not logged in</h1></div>}
            {/* {console.log(id)} */}
            {/* {console.log(currentUser)} */}
            <h1>FORM HERE</h1>
            <form onSubmit={handleSubmit}>
                <h1>Create New Shoes</h1>
                <label>
                    Shoe Name:
                    <input
                        type="text"
                        name="name"
                        value={newShoeForm.name}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Price:
                    <input
                        name="price"
                        type="number"
                        value={newShoeForm.price}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Image URL:
                    <input
                        name="img_url"
                        type="text"
                        value={newShoeForm.img_url}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>Brand:
                    <input
                        name="brand_id"
                        type="number"
                        value={newShoeForm.brand_id}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewShoes

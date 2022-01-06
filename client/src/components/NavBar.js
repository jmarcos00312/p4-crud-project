import React from 'react';
import NewShoes from './NewShoes'
import { Link } from "react-router-dom"
import { IoLogInSharp } from "react-icons/io5";
import { GrContact } from "react-icons/gr"
import { RiProfileLine } from "react-icons/ri"
import Button from 'react-bootstrap/Button'

export const NavBar = ({ currentUser, setCurrentUser }) => {
    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" });
        setCurrentUser(null)
    }
    return (
        <div>
            <GrContact size='85' color='black' />

            <Link to='/signup'>
                <RiProfileLine size='100' color='black' />
            </Link>

            {currentUser ?
                (<Link to='/logout'> <button onClick={handleLogout}>Log out</button> </Link>) :
                (<Link to='/login'> <IoLogInSharp size='100' color='black' /> </Link>)
            }
            {currentUser && <Link to='/newShoes'>
                <Button variant='primary'>Create New Shoes</Button>
            </Link>}

        </div>
    )
}

export default NavBar

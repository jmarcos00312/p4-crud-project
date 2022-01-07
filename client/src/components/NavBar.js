import React from 'react';
import { Link } from "react-router-dom"
import { RiProfileLine } from "react-icons/ri"
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi"
import { AiFillLinkedin } from "react-icons/ai"
import { GiConverseShoe } from "react-icons/gi"
import { AiFillHome } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md"

export const NavBar = ({ currentUser, setCurrentUser }) => {
    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" });
        setCurrentUser(null)
    }


    return (
        <div className="navbar">
            <Link to="/">
                <AiFillHome size='110' color='black' />
            </Link>

            <Link to="/contacts">
                <AiFillLinkedin size='120' color='black' />
            </Link>

            {!currentUser && <Link to='/signup'>
                <RiProfileLine size='120' color='black' />
            </Link>}

            {currentUser &&
                <div>

                    <Link to='/newShoes'>
                        <GiConverseShoe size='120' color='black' />
                    </Link>
                </div>
            }
            {currentUser &&
                <Link to='/purchased_items'>
                    <MdShoppingCart size='120' color='black' />
                </Link>
            }
            {currentUser ?
                (<Link to='/'> <BiLogOut size='120' color='black' onClick={handleLogout} /> </Link>) :
                (<Link to='/login'> <BiLogIn size='120' color='black' /> </Link>)
            }
        </div>
    )
}

export default NavBar

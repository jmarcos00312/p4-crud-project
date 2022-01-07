import React from 'react';
import { Link } from "react-router-dom"
import { RiProfileLine } from "react-icons/ri"
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi"
import { AiFillLinkedin } from "react-icons/ai"
import { GiConverseShoe } from "react-icons/gi"
import { AiFillHome } from "react-icons/ai";

export const NavBar = ({ currentUser, setCurrentUser }) => {
    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" });
        setCurrentUser(null)
    }
    

    return (
        <div className="navbar">
            <div className="home">
                <Link to="/">
                    <AiFillHome size='110' color='black' />
                </Link></div>
            <div className="contacts">
                <Link to="/contacts">
                    <AiFillLinkedin size='120' color='black' />
                </Link>
            </div>
            <div className="signup">
                {!currentUser && <Link to='/signup'>
                    <RiProfileLine size='120' color='black' />
                </Link>}</div>
            <div className="shoes">
                {currentUser && <Link to='/newShoes'>
                    <GiConverseShoe size='120' color='black' />
                </Link>}
            </div>
            <div className="login">
                {currentUser ?
                    (<Link to='/'> <BiLogOut size='120' color='black' onClick={handleLogout} /> </Link>) :
                    (<Link to='/login'> <BiLogIn size='120' color='black' /> </Link>)
                }
            </div>
        </div>
    )
}

export default NavBar

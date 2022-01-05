import React from 'react';
import { Link } from "react-router-dom"
import { IoLogInSharp } from "react-icons/io5";
import { GrContact } from "react-icons/gr"
import { RiProfileLine } from "react-icons/ri"


export const NavBar = () => {
    return (
        <div>
            <GrContact size='85' color='black' />
            <Link to='/login'>
                <IoLogInSharp size='100' color='black' />
            </Link>
            <Link to='/signup'>
                <RiProfileLine size='100' color='black' />
            </Link>
        </div>
    )
}

export default NavBar

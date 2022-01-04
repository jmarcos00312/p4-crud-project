import React from 'react';
import {IoLogInSharp} from "react-icons/io5";
import {GrContact} from "react-icons/gr"
import {RiProfileLine} from "react-icons/ri"


export const NavBar = () => {
    return (
        <div>
            <GrContact size='85' color='black' />
            <IoLogInSharp size='100' color='black' />
            <RiProfileLine size='100' color='black' />
        </div>
    )
}

export default NavBar

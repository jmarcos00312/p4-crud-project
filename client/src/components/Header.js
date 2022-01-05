import React from 'react'
import { NavBar } from './NavBar'

export const Header = ({ currentUser, setCurrentUser, setNewShoes }) => {
    return (
        <div>
            <div className="header">
                <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} setNewShoes={setNewShoes} />
            </div>
        </div>
    )
}

export default Header
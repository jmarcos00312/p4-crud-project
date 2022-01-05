import React from "react";
import Header from "./Header";
import Banner from "./Banner";

export default function Home({ currentUser, setCurrentUser, setNewShoes }) {
    return (
        <>
            <Header currentUser={currentUser} setCurrentUser={setCurrentUser} setNewShoes={setNewShoes} />
            <Banner />
        </>
    )
}

import './App.css';
import Sneaker from "./components/Sneakers"
import { useEffect, useState } from "react"
import Login from "./components/Login"
import NewShoes from './components/NewShoes';
import Signup from "./components/Signup"
import Home from "./components/Home"
import Contact from "./components/Contact"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [shoesArray, setShoesArray] = useState([])


  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated) {
    return <div></div>;
  }
  return (
    <>
      <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {/* {!currentUser && <Login setCurrentUser={setCurrentUser} />} */}

      <Routes>
        <Route path="/contacts" element={<Contact />} />
        <Route path="/" element={
          currentUser ? <Sneaker setShoesArray={setShoesArray} shoesArray={shoesArray} /> : <Sneaker />
        } />
        <Route path="/newShoes" element={
          <NewShoes
            currentUser={currentUser}
            shoesArray={shoesArray}
            setShoesArray={setShoesArray} />

        } />
        <Route path="/login" element={
          <div>
            <Login setCurrentUser={setCurrentUser} />
            <Sneaker />
          </div>
        } />
        <Route path="/sneakers" element={<Sneaker />} />
        <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
      </Routes>


    </>
  );
}

export default App;

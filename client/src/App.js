import './App.css';
import Sneaker from "./components/Sneakers"
import { useEffect, useState } from "react"
import Login from "./components/Login"
import NewShoes from './components/NewShoes';
import Signup from "./components/Signup"
import Home from "./components/Home"
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
      <Router>
        <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
        {!currentUser && <Login setCurrentUser={setCurrentUser} />}
        {currentUser && <NewShoes currentUser={currentUser} shoesArray={shoesArray} setShoesArray={setShoesArray} />}
        <Sneaker setShoesArray={setShoesArray} shoesArray={shoesArray} />

        <Routes>
          <Route path="/sneakers" element={<Sneaker />} />
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;

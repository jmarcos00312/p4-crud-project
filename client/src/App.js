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
  const [newShoes, setNewShoes] = useState(false)


  console.log(currentUser);
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
        <Home currentUser={currentUser} setCurrentUser={setCurrentUser} setNewShoes={setNewShoes} />
        {!currentUser && <Login setCurrentUser={setCurrentUser} /> }
        <Sneaker />
        {newShoes && <NewShoes />}

        <Routes>
          <Route path="/newShoes" element={<NewShoes />} />
          <Route path="/sneakers" element={<Sneaker />} />
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;

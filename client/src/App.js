import './App.css';
import Sneaker from "./components/Sneakers"
import { useEffect, useState } from "react"
import Login from "./components/Login"
import Signup from "./components/Signup"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
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
  return (
      <>
     
    <div className="App">
      <div className="home">
        <Router>
          <Routes>
            <Route exact path="/sneakers" element={<Sneaker />} />
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
            <Route path="/signup" element={<Login setCurrentUser={setCurrentUser} />} />
            
          </Routes>
        </Router>
      </div>
    </div>
    </>
  );
}

export default App;

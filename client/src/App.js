import './App.css';
import Home from './components/Home'
import { useEffect, useState } from "react"


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  console.log(currentUser)

  return (
      <>
     
    <div className="App">
      <Home />
    </div>
    </>
  );
}

export default App;

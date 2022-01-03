
import './App.css';
// import 'semantic-ui-css/semantic.min.css'
// import "pure-react-carousel/dist/react-carousel.es.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import { useEffect, useState } from "react"
// import 'signup' from './components'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  console.log(currentUser)


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

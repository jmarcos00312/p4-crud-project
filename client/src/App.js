
import './App.css';
import React, { useState, useEffect } from "react";
import Header from './Header';

function App() {
  const [shoes, setShoes] = useState([])

  useEffect(() => {
    fetch('/items', { credentials: "include",}).then(r => r.json()).then(data => setShoes(data))
  }, [])
  console.log(shoes)

  let everyshoes = shoes.map(shoes => {
    return (
      <div>
        <h1>{shoes.name}</h1>
        <img src={shoes.img_url} />
      </div>
    )
  })
  // let movieList = movies.map(movie => {
  //   return (
  //     <div className='d-flex'>
  //       <div className="row_poster">
  //         <div class="hover-container">
  //           <img src={movie.img_url} alt='movie' onClick={() => history.push("/movies")}></img>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  return (
      <>
      <div>
      <Header />
      </div>
    <div className="App">
      {everyshoes}
      {/* <h1>Hello world</h1> */}
    </div>
    </>
  );
}

export default App;

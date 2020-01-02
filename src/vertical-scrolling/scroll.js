import React from 'react';
import './App.css';
import '../style/styles.css';

function App() {
  return (
    <div className="App">
      <div className="scrolling-wrapper-flexbox max-w-6xl element ">
      <div class="card "><h2 className="bg-black p-2 m-2 w-32">Card</h2></div>
      <div class="card "><h2 className="bg-black p-2 m-2 w-32">Card</h2></div>
      <div class="card "><h2 className="bg-black p-2 m-2 w-32">Card</h2></div>
      <div class="card "><h2 className="bg-black p-2 m-2 w-32">Card</h2></div>
      <div class="card "><h2 className="bg-black p-2 m-2 w-32">Card</h2></div>

      
      <div class="card "><a href="#links" className="bg-black p-2 m-2 w-32 text-white">></a></div>
      <div class="card "><h2 className="bg-black p-2 m-2 w-32 text-white">Card</h2></div>
      <div class="card "><h2 className="bg-black p-2 m-2 w-32 text-white ">Card</h2></div>
      <div class="card "><h2 className="bg-black p-2 m-2 w-32 text-white">Card</h2></div>
      <div id="links"class="card "><h2 className="bg-black p-2 m-2 w-32 text-white">Card</h2></div>

      </div>
    </div>
  );
}

export default App;

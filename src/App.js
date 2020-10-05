import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>todo</h1>
        <a href="#" class="btn btn-outline-info rounded-circle add">+</a>
      </header>
      <div class="container">
        <div class="row">
          <div class="card">
            {/* <img src="" class="card-img-top" alt="" /> */}
            <div class="card-body separate">
              <h6 class="card-title">Card title</h6>
              <h3 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h3>
              <a href="#" class="btn btn-outline-danger delete">Delete</a>
            </div>
          </div>
          <div class="card">
            {/* <img src="" class="card-img-top" alt="" /> */}
            <div class="card-body separate">
              <h6 class="card-title">Card title</h6>
              <h3 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h3>
              <a href="#" class="btn btn-outline-danger delete">Delete</a>
            </div>
          </div>
          <div class="card">
            {/* <img src="" class="card-img-top" alt="" /> */}
            <div class="card-body separate">
              <h6 class="card-title">Card title</h6>
              <h3 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h3>
              <a href="#" class="btn btn-outline-danger delete">Delete</a>
            </div>
          </div>
          <div class="card">
            {/* <img src="" class="card-img-top" alt="" /> */}
            <div class="card-body separate">
              <h6 class="card-title">Card title</h6>
              <h3 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h3>
              <a href="#" class="btn btn-outline-danger delete">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

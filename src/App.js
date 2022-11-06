import './App.css';
import './Grid.css';
import React, { useState }  from 'react';
import Data from './data.json'
import Daily from './components/Daily';

function App() {

return (
<>

    <div class="main-container">
      <div class="grid-container">
        <div class="item1">
          <div class="grid-item">
            <div class="card-head-profile">
              <div id="content">
                <img id="porfile-image" src="/images/image-jeremy.png" />
                <h3>Report for</h3><br></br>
                <p>Jeremy Robson</p>
              </div>
              <div class="card-body-profile">
                <button>Daily</button><br></br>
                <button>Weekly</button><br></br>
                <button>Monthly</button>
              </div>
            </div>
          </div>
        </div>

        < Daily />

      </div>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Your Name Here</a>.
    </div>

</>
);
}

export default App;
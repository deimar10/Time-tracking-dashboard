import '../src/Assets/App.css';
import '../src/Assets/Grid.css';
import '../src/Assets/ActivityDetails.css'
import React, { useState, useEffect } from "react";
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';

function App() {

const [time, setTime] = useState('daily')

const handleClick = (timeState) => {
  setTime(timeState)
}

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
                <button onClick={ () => handleClick('daily')}>Daily</button><br></br>
                <button onClick={ () => handleClick('weekly')}>Weekly</button><br></br>
                <button onClick={ () => handleClick('monthly')}>Monthly</button><br></br>
              </div>
            </div>
          </div>
        </div>

        {(() => {
                  switch (time) {
                    case 'daily':
                      return <Daily handleClick={handleClick} />;
                    case 'weekly': 
                      return <Weekly handleClick={handleClick} />;
                    case 'monthly':
                      return <Monthly handleClick={handleClick} />;
                    default: 
                      return null;
                  }
                })()}
      </div>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Deimar pärn</a>.
    </div>
</>
);
}

export default App;
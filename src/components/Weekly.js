import React, { useState, useEffect } from "react";
import Data from '../data.json';
import Popup from "./Popup";
import '../Assets/Popup.css';

function Weekly() {

  const [activities, setActivities] = useState(Data);

  return (
    <body>
      <div class="item2">
        <div class="second-grid-container">
          {activities.map((details, index) => {
            return (
              <div class="grid-item" key={index}>
                <div class="card-head-work" style={{
                  backgroundColor: details.title === 'Work' ? 'hsl(15, 100%, 70%)' :
                   details.title === 'Play' ? 'hsl(195, 74%, 62%)' : 
                   details.title === 'Study' ? 'hsl(348, 100%, 68%)' :
                   details.title === 'Exercise' ? 'hsl(145, 58%, 55%)' :
                   details.title === 'Social' ? 'hsl(264, 64%, 52%)' :  'hsl(43, 84%, 65%)'
                   }}>
                  <img src={details.image} />
                </div>
                <div class="card-body-work">
                <h3>{details.title}<span><button>...</button></span></h3><br></br>
                  <p>{details.timeframes.weekly.current}hrs</p>
                  <h4>Last week - {details.timeframes.weekly.previous}hrs
                  </h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </body>
  );
}

export default Weekly;

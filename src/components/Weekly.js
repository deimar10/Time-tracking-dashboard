import React, { useState, useEffect } from "react";
import Data from '../data.json';

function Weekly() {

  const [activities, setActivities] = useState(Data);

  return (
    <body>
      <div class="item2">
        <div class="second-grid-container">
          {activities.map((details, index) => {
            return (
              <div class="grid-item" key={index}>
                <div class="card-head-work">
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

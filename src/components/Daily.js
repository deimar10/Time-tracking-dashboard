import React, { useState, useEffect } from "react";
import Data from '../data.json';

console.log(Data)

function Daily() {

  const [activities, setActivities] = useState(Data);

  return (
    <body>
      <div class="item2">
        <div class="second-grid-container">
          {activities.map((details, index) => {
            return (
              <div class="grid-item" key={index}>
            <div class="card-head-work">
              <img src="/images/icon-work.svg" />
              </div>
              <div class="card-body-work">
                <h3>{details.title}</h3><br></br>
                <p>{details.timeframes.daily.current}</p>
                <h4>{details.timeframes.daily.previous}</h4>
              </div>
              </div>
            )
          })}
            </div>
          </div>
    </body>
  );
}

export default Daily;





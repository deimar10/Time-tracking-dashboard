import React, { useState, useEffect } from "react";
import Data from '../data.json';
import Activitydetails from "./Activitydetails";

function Daily() {

  const [activities, setActivities] = useState(Data);
  const [view, setView] = useState(false);
  const [activityDetails, setActivityDetails] = useState();
  
  const handleDetails = (details )=> {
    setActivityDetails (details);
    setView (true);
  }

  return (
    <body>
      {view ? <Activitydetails activityDetails={activityDetails} 
      setView={setView} /> :
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
                  <img  src={details.image} /> 
                </div>
                <div class="card-body-work">
                  <h3>{details.title}<span>
                    <button onClick={ e => handleDetails(details)}>...</button></span></h3><br></br>
                  <p>{details.timeframes.daily.current}hrs</p>
                  <h4>Last week - {details.timeframes.daily.previous}hrs
                  </h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      } 
    </body>
  );
}

export default Daily;





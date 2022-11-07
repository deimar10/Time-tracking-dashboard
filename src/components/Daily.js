import React, { useState, useEffect } from "react";
import Data from '../data.json';
import Popup from './Popup';
import '../Assets/Popup.css';

function Daily() {

  const [activities, setActivities] = useState(Data);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

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
                  <h3>{details.title}<span>
                    <button onClick={togglePopup}>...</button></span></h3><br></br>

                  {isOpen && <Popup
                    content={<>
                    <p>TERE</p>
                    </>}
                    handleClose={togglePopup}
                  />}

                  <p>{details.timeframes.daily.current}hrs</p>
                  <h4>Last week - {details.timeframes.daily.previous}hrs
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

export default Daily;





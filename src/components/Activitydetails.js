import React from "react";
import {FaChevronCircleLeft} from 'react-icons/fa'

function Activitydetails({activityDetails, setView}){

    const handleBack = () => {
        setView (false);
    }
    
    return (
        <>
        <div class="activityDetail-main-container">
        <button id="back" onClick={handleBack}><FaChevronCircleLeft /></button>
        <div class="activityDetail-card-head" style={{
            backgroundColor: activityDetails.title === 'Work' ? 'hsl(15, 100%, 70%)' :
            activityDetails.title === 'Play' ? 'hsl(195, 74%, 62%)' : 
            activityDetails.title === 'Study' ? 'hsl(348, 100%, 68%)' :
            activityDetails.title === 'Exercise' ? 'hsl(145, 58%, 55%)' :
            activityDetails.title === 'Social' ? 'hsl(264, 64%, 52%)' :  'hsl(43, 84%, 65%)'
        }}>
        <img src={activityDetails.image} />
        </div>
        <div class="activityDetail-card-body">
            <h2>{activityDetails.title}</h2>
            <p id="crnt">{activityDetails.timeframes.daily.current}hrs <span>(Daily)</span></p>
            <p id="prvs">Last week - {activityDetails.timeframes.daily.previous}hrs</p>
            <p id="crnt">{activityDetails.timeframes.weekly.current}hrs <span>(Weekly)</span></p>
            <p id="prvs">Last week - {activityDetails.timeframes.weekly.previous}hrs</p>
            <p id="crnt">{activityDetails.timeframes.monthly.current}hrs <span>(Monthly)</span></p>
            <p id="prvs">Last week - {activityDetails.timeframes.monthly.previous}hrs</p>
        </div>
        </div>
            </>
    )
}

export default Activitydetails;
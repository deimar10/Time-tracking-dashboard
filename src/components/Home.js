import React from "react";

function Home() {
return (

    <body> 
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
                <button>daily</button><br></br>
                <button>weekly</button><br></br>
                <button>monthly</button>
            </div>
              </div>
              </div>
          </div>

          <div class="item2">
            <div class="second-grid-container">
              <div class="grid-item">
                <div class="card-head-work">
                <img src="/images/icon-work.svg" />
            <div class="card-body-work">
                <h3>work</h3><br></br>
                <p>32hrs</p>
                <h4>Last week - 36hrs</h4>
            </div>
                </div>
              </div>

              <div class="grid-item">
              <div class="card-head-play">
                  <img src="/images/icon-play.svg" />
            <div class="card-body-play">
                <h3>play</h3><br></br>
                <p>32hrs</p>
                <h4>Last week - 36hrs</h4>
            </div>
              </div>
              </div>

              <div class="grid-item">
              <div class="card-head-study">
                  <img src="/images/icon-study.svg" />
            <div class="card-body-study">
                <h3>study</h3><br></br>
                <p>32hrs</p>
                <h4>Last week - 36hrs</h4>
            </div>
              </div>
              </div>
          
              <div class="grid-item">
              <div class="card-head-exercise">
                  <img src="/images/icon-exercise.svg" />
            <div class="card-body-exercise">
                <h3>exercise</h3><br></br>
                <p>32hrs</p>
                <h4>Last week - 36hrs</h4>
            </div>
              </div>
              </div>
      
              <div class="grid-item">
              <div class="card-head-social">
                  <img src="/images/icon-social.svg" />
            <div class="card-body-social">
                <h3>social</h3><br></br>
                <p>32hrs</p>
                <h4>Last week - 36hrs</h4>
            </div>
              </div>
              </div>
       
              <div class="grid-item">
              <div class="card-head-self-care">
                <img src="/images/icon-self-care.svg" />
            <div class="card-body-self-care">
                <h3>self-care</h3><br></br>
                <p>32hrs</p>
                <h4>Last week - 36hrs</h4>
            </div>
              </div>
              </div>
            </div> 
          </div>  
        </div>
      </div>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
);
}

export default Home;
import React from 'react';
import './Works.css'; 

function Works() {
  return (
     <><section id='works'>
     <h2 className="section-heading" ><i className="fas fa-graduation-cap"></i> My <span>Works</span></h2><main>


      <div className="container" >

        <div className="card">
          <h2 className="card-heading">GUARDIANCE HOME CARE</h2>
          <img src="/guard.png" alt="Card" className="card-image a" />
          <p className="card-description">
             tech used:-
          </p>
          <p className="card-description">
              ReactJs
          </p>
          <p className="card-description">
             CSS
          </p>
          <button
            className="card-button"
            onClick={() => window.open("https://guardianshomecare.in/", "_blank", "noopener,noreferrer")}
          >
           VISIT NOW
          </button>
        </div>
        <div className="card">
          <h2 className="card-heading">ECOMMERCE WEBSITE</h2>
          <img src="/lotus.png" alt="Card" className="card-image a" />
          <p className="card-description">
           Check out for best fashion.
          </p>
          <p className="card-description">
           We offer variety of services.
          </p>
          <p className="card-description">
           From BOOKS To Video content To the latest fashion
          </p>
          <button
            className="card-button"
            onClick={() => window.open("https://www.lotuscreation.org/", "_blank", "noopener,noreferrer")}
          >
           VISIT NOW
          </button>
        </div>
        <div className="card">
          <h2 className="card-heading">MY OWN PROFILE</h2>
          <img src="/myprofile.png" alt="Card" className="card-image a" />
          <p className="card-description">
             tech used:-
          </p>
          <p className="card-description">
              ReactJs
          </p>
          <p className="card-description">
             CSS
          </p>
          <button
            className="card-button"
            onClick={() => window.open("https://myprofile-ten-green.vercel.app/", "_blank", "noopener,noreferrer")}
          >
           VISIT NOW
          </button>
        </div>
        <div className="card">
          <h2 className="card-heading">DOCTOR-PROFILE</h2>
          <img src=" " alt="Card" className="card-image" />
          <p className="card-description">
           COMING SOON...
          </p>
          {/* <button className="card-button">Learn More</button> */}
        </div>
        <div className="card">
          <h2 className="card-heading">WORKOUT APP</h2>
          <img src=" " alt="Card" className="card-image" />
          <p className="card-description">
          COMING SOON...
                    </p>
          {/* <button className="card-button">Learn More</button> */}
        </div>
        <div className="card">
          <h2 className="card-heading">BANK MANAGEMENT SYSTEM</h2>
          <img src=" " alt="Card" className="card-image" />
          <p className="card-description">
          COMING SOON...
          </p>
          {/* <button className="card-button">Learn More</button> */}
        </div>
        
      
        <div className="card">
          <h2 className="card-heading">JWELLERY SHOP</h2>
          <img src=" " alt="Card" className="card-image" />
          <p className="card-description">
          COMING SOON...
          </p>
          {/* <button className="card-button">Learn More</button> */}
          
        </div>
      
      </div>
      
    </main>
    </section></>
  );
}

export default Works;

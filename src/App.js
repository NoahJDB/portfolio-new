import React, { useState } from 'react';
import './App.css';

//Pictures
import noah from './pictures/noah.jpg';

function App() {

  const [selectedMenu, setMenu] = useState('home');

  return (
    <div className="Apdp">

      
      <nav role="navigation">
        <div className="menuToggle">
         <input type="checkbox" /> 
              
              <span></span>
              <span></span>
              <span></span>

          <ul className="menu">
            <li><button onClick={() => setMenu('home')}>Home</button></li>
            
            <li><button onClick={() => setMenu('work')}>Work</button></li>
          
            <li><button onClick={() => setMenu('about')}>About</button></li>
          
          </ul>
        </div>
      </nav>
    
   
 
    <div className="Showclass">
      <div className="Home">
        {selectedMenu === 'home' &&
          <div >
          <h1> Noah de Bont</h1>
            <img src={noah} alt="noah" className="noah"></img>
            <h3>Webdeveloper</h3>
          </div>
        }
      </div>
    <div className="Work">
      {selectedMenu === 'work' &&
        <div>
          <h1>What I worked on</h1>

            <div className="Dashboard">
              <h2>Coqtail Dashboard</h2>
              <h3>This page shows all statistics for the clients of Coqtail.</h3>
              <img></img>
            </div>
        
        </div>
      }
      </div>

      }
      {selectedMenu === 'about' &&
        <div>
          <h1>Product Overview Page</h1>
        </div>
      } 
      </div>

    </div>
  );
}

export default App;

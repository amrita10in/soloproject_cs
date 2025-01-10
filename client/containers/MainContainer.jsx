import React from 'react';
import { useSelector } from 'react-redux';
import AgeComponent from '../components/AgeComponent';
import Appointments from '../components/Appointments';
// import TotalsDisplay  from '../components/TotalsDisplay.jsx';
// import MarketsContainer from '../containers/MarketsContainer.jsx';


const MainContainer = () => {
  // add pertinent state here

  return(
    <div className="container">
      <div className="outerBox">
        <h1 id="header">Welcome to Baby's World</h1>
        <AgeComponent/>
        <Appointments/>
      </div>
    </div>
  );
}

export default MainContainer;
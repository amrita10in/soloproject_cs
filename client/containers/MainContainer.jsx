import React from 'react';
import { useSelector } from 'react-redux';
import AgeComponent from '../components/AgeComponent';
import Appointments from '../components/Appointments';
import Milestones from '../components/Milestones';
import styles from '../stylesheets/styles.module.css';
// import TotalsDisplay  from '../components/TotalsDisplay.jsx';
// import MarketsContainer from '../containers/MarketsContainer.jsx';


const MainContainer = () => {
  // add pertinent state here

  return(
    <div className="container">
      <div className="outerBox" className={styles.outerBox}>
        <AgeComponent/>
        <Appointments/>
      </div>
    </div>
  );
}

export default MainContainer;
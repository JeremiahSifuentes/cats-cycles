import React from 'react';

const MainContent = () => {
  return <div>
      <div className='gallery'>
          <img className='cats-store' alt="Cats Cycles Store Front" src={process.env.PUBLIC_URL + `/CatsImg.png`}></img>
          <a>View more here</a>
          <a>Gallery</a>
      </div>
      <div className='about'>
          <h2 className='about-header'>About</h2>
          <p className='about-content'>Here at Cats Custom Cycles, we offer complete service
in motorcycle parts, accessories, and custom building & fabrication. We are located at 118 Varsity Dr. 
San Antonio, Texas 78228
 and are ready to take care of you.</p>
      </div>
  </div>;
};

export default MainContent;

import React from 'react';
import './HeaderComponents.css';

function HeaderComponent() {
  return (
    <div className='Navimg d-flex justify-content-evenly text-white'>
      <div>
        <nav className='d-flex sticky-top' style={{ fontSize: '1.2vw', margin: '2vw 0vw 0vw 60vw', padding: '2vw', color: 'white' }}>
          <div className='d-flex'>
            <dt className='navmar'></dt>
          </div>
        </nav>
        <div className='intro'>
          <div className=' text-center w-25' style={{ fontSize: '6vw', margin: '5vw 0vw 0vw' }}>
            <dt>Krishna </dt>
            <dt>Prasad</dt>
          </div>
          <br />
          <dt style={{fontSize:"2.2vw", color: '#69d294' }}>Full-Stack Developer</dt>
        </div>
        <div className='' style={{ float: 'right', margin: '0vw 2vw', fontSize:"2vw" }}>
          <dt className='navicons' style={{ margin: '.8vw' }}>
            <span className='bi bi-facebook'></span>
          </dt>
          <dt className='navicons' style={{ margin: '.8vw' }}>
            <span className='bi bi-whatsapp'></span>
          </dt>
          <dt className='navicons' style={{ margin: '.8vw' }}>
            <span className='bi bi-instagram'></span>
          </dt>
          <dt className='navicons' style={{ margin: '.8vw' }}>
            <span className='bi bi-twitter'></span>
          </dt>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;

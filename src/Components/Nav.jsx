import React from 'react'

function Nav() {
  return (
    <div className=''>
        <nav className='d-flex' style={{ fontSize: '1.2vw', margin: '0vw 0vw 0vw 0vw', padding: '2vw', color: 'black', backgroundColor:"gray", width:"100vw" }}>
          <div className='d-flex' style={{margin:"2vw 0vw 0vw 60vw"}}>
            <dt className='navmars'>About</dt>
            <dt className='navmars'>Skills</dt>
            <dt className='navmars'>Experience</dt>
            <dt className='navmars'>Projects</dt>
            <dt className='navmars'>Contact</dt>
          </div>
        </nav>
    </div>
  )
}

export default Nav
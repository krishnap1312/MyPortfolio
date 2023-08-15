import React from 'react';

function Portfolio() {
  return (
    <div className='BaccPortfolio'>
    <dt className='text-center' style={{margin:"5vw 0vw", backgroundColor:"#445069", padding:"4vw", color:"#ffffff"}}>Portfolio - Projects</dt>
      <div className='row justify-content-center'>
      
        <div className='col-md-4 ' style={{margin:"1.5vw", textAlign:"center"}}>
          <div className='Card'>
            <div className='CardHeader'>
              <h1>People's Bank</h1>
            </div>
            <div className=''>
              <p className='CardText' ><span className='CardStyle'>Description:</span> The People's Bank Net Banking Project, executed from April to June 2023, introduces an online platform enabling users 
              to register, open accounts, and access banking services. <br></br> Admins allocate unique account numbers for login, facilitating 
              balance checks, fund transfers, and dummy bill payments. <br></br> Job posters manage vacancies, job seekers apply, and agents 
              oversee accounts. <br></br> Benefits encompass streamlined banking, efficient job posting, real-time data, user-friendliness, and 
              data security. <br></br>The tech stack includes <span style={{color:"#900C3F", fontWeight:"bolder"}}> ReactJS, Bootstrap, MDB for the front-end, and NodeJS, ExpressJS, and MongoDB </span> for 
              the back-end.
              </p>
              <div className=''>
                <div className='CardFooter'>
                  <button className='CardButton ' >Check Detailed Project  <span className='bi bi-box-arrow-up-right'></span></button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='col-md-4' style={{margin:"1.5vw", textAlign:"center"}}>
          <div className='Card'>
            <div className='CardHeader'>
              <h1>Library Management</h1>
            </div>
            <div className=''>
              <p className='CardText'>
              <span className='CardStyle'> Description:</span> Efficiently manage library or bookstore tasks with this web-based system. 
              <br />Features include authentication, catalog management, checkout, reservations, and admin controls.
              <br />Purpose: Showcase web dev and database skills. Create user-friendly interfaces and automate library processes.
              <br />The tech stack includes <span style={{color:"#900C3F", fontWeight:"bolder"}}> ReactJS, Bootstrap, and NodeJS, ExpressJS, and MongoDB </span> for 
              the back-end.
              
              </p>
              <div className='CardFooter'>
                  <button className=' CardButton'>Check Detailed Project <span className='bi bi-box-arrow-up-right'></span></button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Portfolio;

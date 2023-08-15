import React from 'react';

function Ribbion() {
  return (
    <div className='d-flex' style={{ backgroundColor: "#393E46", color: "white", height:"75vh" }}>
      <div className='d-flex justify-content-evenly' style={{margin:"2vw 0vw"}}>
        <div style={{ flex: 1 }}>
          <div style={{ textAlign: "center", margin: "2vw" }}>
            <img style={{ maxWidth: "20%", margin: "2vw 12vw" }} src="/skills.png" alt="" />
            <div className='d-flex justify-content-center'>
              <div className='text-center' style={{ margin: "2vw 4vw", fontSize: "1.2vw" }}>
                <dt>Skills</dt>
                <br />
                <p>Learn about my skills in programming, find info on my language knowledge and more.</p>
                <div style={{ height: "3.2vw" }}>
                  Learn More <span className='bi bi-arrow-right text-dark'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ textAlign: "center", margin: "2vw" }}>
            <img style={{ maxWidth: "20%", margin: "2vw 12vw" }} src="/rating.png" alt="" />
            <div className='d-flex justify-content-center'>
              <div className='text-center' style={{ margin: "2vw 4vw", fontSize: "1.2vw" }}>
                <dt>Experience</dt>
                <br />
                <p>Get to know the timeline of my education and find out more about my working experience.</p>
                <div style={{ height: "3.2vw" }}>
                  Learn More <span className='bi bi-arrow-right text-dark'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ textAlign: "center", margin: "2vw" }}>
            <img style={{ maxWidth: "20%", margin: "2vw 12vw" }} src="/profile.png" alt="" />
            <div className='d-flex justify-content-center'>
              <div className='text-center' style={{ margin: "2vw 4vw", fontSize: "1.2vw" }}>
                <dt>Portfolio</dt>
                <br />
                <p>My portfolio is my biggest pride. Check my previous works and get to know my skills better.</p>
                <div style={{ height: "3.2vw" }}>
                  Learn More <span className='bi bi-arrow-right text-dark'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ribbion;

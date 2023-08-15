import React from 'react'
import "./HeaderComponents.css"

function Languages() {
  return (
    <div  className='Langu'>
        <div className='d-flex justify-content-center'>
            <div className='rounded rounded-4' style={{backgroundColor:"white", margin:"2vw", padding:"2vw"}}>
                <h2 style={{fontSize:"2.5vw"}}>Languages</h2>
            </div>
        </div>
            <div className='d-flex justify-content-center'>
                <div className='d-grid marginLang text-center'>
                    <div>English</div>
                    <div className='LangPro'>Fluent</div>
                </div>
                <div className='d-grid marginLang text-center'>
                    <div>Hindi</div>
                    <div className='LangPro'>Native</div>
                </div>
                <div className='d-grid marginLang text-center'>
                    <div>Telugu</div>
                    <div className='LangPro'>Native</div>
                </div>
                
            </div>
    </div>
  )
}

export default Languages
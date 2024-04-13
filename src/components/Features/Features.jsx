import React from 'react'
import './Features.css'
function Features() {
  return (
    <div className='features-section'>
    <h1 className="text-center f-color ">Features</h1>
      <div className="features">
        <div className="feature1">
            <div className='fn'>01</div>
            <div className="f-title">Money Saving</div>
        </div>
        <div className="feature1">
            <div className='fn'>02</div>
            <div className="f-title">User Friendly</div>
        </div>
        <div className="feature1">
            <div className='fn'>03</div>
            <div className="f-title">Valid Coupons</div>
        </div>
      </div>
    </div>
  )
}

export default Features

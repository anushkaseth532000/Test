import React, { useState} from 'react'

export default function About(props) {


    
    let mystyle = {
        color : props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white',
    }

  return (
<div className="container my-3" >
        <h2 className = 'mb-4' style={{color : props.mode === 'dark'?'white':'black',}} >About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle}data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle} >
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle}data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle}data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>User Friendly</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"                 data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

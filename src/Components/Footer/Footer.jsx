import React from 'react'
import style from './Footer.module.css'
import amazon from '../../Assets/images/freshcart-logo.svg'
import master from '../../Assets/images/master.png'
import paypal from '../../Assets/images/Paypal.png'
import amirca from '../../Assets/images/American.png'
import googel from '../../Assets/images/Googelpng.png'
import appe from '../../Assets/images/Apppng.png'

export default function Footer() {
  return <>
  
  <footer className='fiexed-bottom py-5 bg-body-tertiary mt-5'>
<div className="container">
<h3>Get The Fresh Cart app</h3>
<p>
    We Will Send you a link ,open it on your phone to dowenload the app 
</p>
    


<div className="row align-items-center">
    <div className="col-md-10">
        <input type="email" name="email" id="email" className='w-100 my-3 px-3 py-2 form-control' placeholder='Email..' />
    </div>
    <div className="col-md-2">
        <button className='btn bg-main w-100 text-white'>
            Share app link
        </button>
    </div>
    <div className={`${style.main} d-flex  justify-content-between align-items-center border-top border-bottom my-4 py-4`}>
        <div className="left d-flex gap-3 align-items-center">
            <h5>
                Payment partners 
            </h5>
            <img src={amirca} alt="amazon Logo" />
            <img src={paypal} alt="Paypal Logo" />
            <img src={master} alt="America Logo" />
            <img src={amazon} alt="Master Logo" />
        </div>
        <div className="right d-flex gap-3 align-items-center">
            <h5>
            Get deliveries with FreshCart 
            </h5>
            <img src={appe} alt="Paypal Logo" />
            <img src={googel} alt="America Logo" />
        </div>

    </div>
</div>

</div>
  </footer>
  
  
  </>
}

import React from 'react'
import "../../styles/pricing.css"

const Pricing = () => {
  return (
    <section id='pricing'>
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">Gym <span className="highlights"> Pricing </span> Plan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellat ipsum nisi repudiandae veniam eos magnam labore
                     quisquam sint officiis reprehenderit.</p>
            </div>

            {/*====pricing wrapper=====*/}
            <div className="pricing_wrapper">
                <div className="pricing_item" data-aos='fade-up'
            data-aos-duration='1800'>
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Regular Member</h2>
                        <h2 className="pricing section_title">$50 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                        </ul>

                        <button className="register_btn">Join Now</button>
                    </div>
                </div>


                <div className="pricing_item pricing_item-02" data-aos='fade-up'
            data-aos-duration='2000' >
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Regular Member</h2>
                        <h2 className="pricing section_title">$50 <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                        </ul>
                        <button className="register_btn">Join Now</button>
                    </div>
                </div>

                <div className="pricing_item" data-aos='fade-up'
            data-aos-duration='1500'>
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Regular Member</h2>
                        <h2 className="pricing section_title">$50 <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                        </ul>

                        <button className="register_btn">Join Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Pricing
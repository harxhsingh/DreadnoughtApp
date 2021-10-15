import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../src/img/Aliza Soloman.svg'
import img2 from '../src/img/Bailee Cooper.svg'
import img3 from '../src/img/Jason Miller.svg'

function About() {
  return (
    <>
      <section id='header' className='d-flex align-items-center page_top'>
        <div className='container=fluid nav_bg'>
          <div className='row'>
            <div className='col-10 col-10 mx-auto'>
              <div className="row">
                <div>
                {/* className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' */}
                  <h1>About<strong className='brand-name'> Us</strong></h1>
                  <h4 className='my-3 txtsize'>
                  Our team is comprised of digitally-native entrepreneurs, futurists and operators with strengths in AI, Space Tech, Genomics, AR/VR and Longevity. We decided to launch Dreadnought to super charge the future by helping unlock the potential of future deep tech entrepreneurs.
                  </h4>
                  <div className='mt-100'>
                    <NavLink to="/contact" type="button" className="btn btn-outline-info">Contact Us</NavLink>
                  </div>
                </div>
                <div className='display-flex'>
                  <img src={img1} className="img-fluid animated img_css" alt="home img"/>
                  <img src={img2} className="img-fluid animated img_css" alt="home img"/>
                  <img src={img3} className="img-fluid animated img_css" alt="home img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
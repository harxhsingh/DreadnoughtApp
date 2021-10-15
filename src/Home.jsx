import React from "react";
import { NavLink } from "react-router-dom";
import home_img from '../src/img/dashboard_img.png'

function Home() {
  return (
    <>
      <section id='header' className='d-flex align-items-center page_top'>
        <div className='container=fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className="row">
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                  <h1>A school for<strong className='brand-name'> Deep Tech Founders</strong></h1>
                  <h4 className='my-3 txtsize'>
                    We believe humanity's survival depends on us being a spacefaring civilisation and future deep tech founders will lead the way.
                  </h4>
                  <h4 className='my-3 txtsize'>
                    Get paid to learn the initial 2 months of founder journey that covers everything other than engineering. We trust your coding skills.
                  </h4>
                  <div className='mt-100'>
                    <NavLink to="/service" type="button" className="btn btn-outline-info">Get Started</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={home_img} className="img-fluid animated" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
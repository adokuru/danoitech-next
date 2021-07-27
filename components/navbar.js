export default function navbar({ children }) {
  return (
    <>
      <header className='header-area'>
        <div className='header-top'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-12'>
                <div className='header-top-item d-flex justify-content-between'>
                  <div className='header-left-side'>
                    <p>
                      <i className='fal fa-bells'></i> Are you looking for IT services & a solution provider?
                    </p>
                  </div>
                  <div className='header-right-social d-flex justify-content-end align-items-center'>
                    <ul className='d-none d-lg-block'>
                      <li>
                        <p>
                          <i className='fal fa-flag'></i> English
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className='fal fa-star'></i> Join With Us
                        </p>
                      </li>
                    </ul>
                    <ul className='d-none d-sm-block'>
                      <li>
                        <a href='https://www.facebook.com/danoitech'>
                          <i className='fab fa-facebook-f'></i>
                        </a>
                      </li>
                      <li>
                        <a href='https://www.twitter.com/danoitech'>
                          <i className='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='https://www.instagram.com/danoi_tech'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a href='https://wa.me/2348055636587?text=Hello%20I%27m%20interested%20in%20one%20of%20your%20services'>
                          <i className='fab fa-whatsapp'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
        </div>
        <div className='header-nav'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='navigation'>
                  <nav className='navbar navbar-expand-lg navbar-light'>
                    <a className='navbar-brand' href='/'>
                      <img src='assets/images/logo.png' alt='DanoiTech Logo' />
                    </a>
                    {/* <!-- logo --> */}
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                      <span className='toggler-icon'></span>
                      <span className='toggler-icon'></span>
                      <span className='toggler-icon'></span>
                    </button>
                    {/* <!-- navbar toggler --> */}

                    <div className='collapse navbar-collapse sub-menu-bar' id='navbarSupportedContent'>
                      <ul className='navbar-nav m-auto'>
                        <li className='nav-item active'>
                          <a className='nav-link' href='index.html'>
                            Home{" "}
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a className='nav-link' href='about-us.html'>
                            About Us{" "}
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a className='nav-link' href='services.html'>
                            Services{" "}
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a className='nav-link' href='https://medium.com/@danoitech'>
                            Blog
                          </a>
                        </li>

                        <li className='nav-item'>
                          <a className='nav-link' href='contact.html'>
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- navbar collapse --> */}
                    <div className='navbar-btn d-none d-sm-block'>
                      <a className='main-btn' href='#quotemain'>
                        Consultations
                      </a>
                    </div>
                  </nav>
                </div>
                {/* <!-- navigation --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
        </div>
      </header>
    </>
  );
}

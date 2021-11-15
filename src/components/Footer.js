import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="page-footer font-small unique-color-dark">
        <div>
          <div className="row py-4 d-flex bg-info mt-4  align-items-center">
            <div className="col-md-6 mt-8 text-dark col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">
                Get connected with us on social networks!
              </h6>
            </div>
            <div className="col-md-6 col-lg-7 text-dark text-center text-md-right">
              <a className="fb-ic ">
                <i className="fab fa-facebook-f text-danger mr-4 "> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">BitMarket</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                 BitMarket is on a mission to accelerate the world's  transition to cryptocurrency. Through  the BitMarket website, you can analyse many cryptocurrencies.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="#!">MDBootstrap</a>
              </p>
              <p>
                <a href="#!">MDWordPress</a>
              </p>
              <p>
                <a href="#!">BrandFlow</a>
              </p>
              <p>
                <a href="#!">Bootstrap Angular</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://mdbootstrap.com/"> BitMarket</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

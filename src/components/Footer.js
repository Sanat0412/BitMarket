import React from "react";
import AnotherApi from "./AnotherApi";

const Footer = () => {
  return (
    <footer class="page-footer font-small unique-color-dark">
      <div>
        <div class="container"></div>
      </div>

      <div class="container text-center text-md-left mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Company name</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Products</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
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

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Useful links</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
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

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">Contact</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <i class="fas fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i class="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div className="container border-info">
        <div className="row ">
          <div class="col-md-12 border  py-4">
            <div class="mb-4 sa-4 p-4 flex-center">
              <a class="fb-ic ">
                <i class="fa fa-facebook px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a class="tw-ic">
                <i class="fa fa-twitter px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a class="gplus-ic">
                <i class="fa fa-google-plus px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a class="li-ic">
                <i class="fa fa-linkedin px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a class="ins-ic">
                <i class="fa fa-instagram px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a class="pin-ic">
                <i class="fa fa-pinterest px-5 fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">
        © 2021 Copyright:
        <a href="https://bitmarket.netlify.com"> BitMarket</a>
      </div>
    </footer>
   
  ); <AnotherApi />;
};

export default Footer;

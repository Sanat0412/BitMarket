import React from "react";
import ButtonMailto from "./MailTo";

const Footer = () => {
  return (
    <footer class="page-footer font-small unique-color-dark">
      <div>
        <div class="container"></div>
      </div>
      <div
        class="container text-center text-md-left mt-5"
        // style={{
        //   backgroundImage:
        //     "url(data:image/jpeg;base64,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)",
        //   backgroundSize: "cover",
        // }}
      >
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">BitMarket</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              BitMarket is a cryptocurrency price-tracking website that allows
              you to monitor the price of any cryptocurrency with accurate data
              and real-time updates.
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">
              Products {<sub><span style={{color:"Green"}}>( UpComing ) </span></sub>}
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <a href="#!">LogIn</a>
            </p>
            <p>
              <a href="#!">Watchlist</a>
            </p>
            <p>
              <a href="#!">More Coins</a>
            </p>{" "}
            <p>
              <a href="#!">Help</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">Contact</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <i class="fas fa-home mr-3 fa fa-location"></i> GLA University, Mathura
            </p>
            {/* <p>
              <i class="fas fa-envelope mr-3"></i> BitMarket.india@gmail.com
            </p> */}
            <ButtonMailto
              label={
                <i class="fa fa-envelope mr-3 pb-3"> Mail Me</i>
              }
              mailto="mailto:BitMarket.india@gmail.com"
            />

            <p>
              <i class="fa fa-phone mr-3 "></i> + 91 8800662900
            </p>
            <p>
              <i class="fa fa-phone mr-3"></i> + 91 9528105867
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold pb-3">
              Connect With Us{" "}
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />

            <a
              class="fb-ic "
              href="https://www.facebook.com/Bit-Market-101152832399982"
            >
              <i class="fa fa-facebook px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            <a class="tw-ic" href="https://mobile.twitter.com/BitMarket_co">
              <i class="fa fa-twitter pt-5 px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            <a class="ins-ic" href="https://www.instagram.com/bitmarket_tech/">
              <i class="fa fa-instagram pt-5 px-5 fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2021 Copyright:
        <a href="https://bitmarket.netlify.com"> BitMarket</a>
      </div>
    </footer>
  ); 
};

export default Footer;

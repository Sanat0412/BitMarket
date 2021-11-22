import { useState } from "react";
import React from "react";

export default function AboutUs() {
  const myStyle = {
    color: "skyblue",
    backgroundColor: "black",
    bordeRadius: "2px solid skyblue",
  };
  return (
    <div className="BitMarket" style={myStyle}>
      <h2 className="text-center info">FAQ</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. What are cryptocurrencies?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Cryptocurrencies are a digital asset that started as a medium of
              exchange for people to buy goods and services. Over time, their
              functionality has expanded.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. What is "Market Capitalization" and how is it calculated?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Market Capitalization is one way to rank the relative size of a
              cryptocurrency. It's calculated by multiplying the Price by the
              Circulating Supply.
              <br /> Market Cap = Price X Circulating Supply.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. Beyond a method for payment, what are other functions of
              cryptocurrencies?{" "}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Cryptocurrency value can be pegged to underlying asset such as
              U.S. dollar, central bank digital currencies, privacy coins
              (senders and receivers are anonymous), governance tokens (gives
              owners the right to vote in decisions regarding blockchain’s
              future development), utility tokens, and non-fungible tokens
              (distinct characteristics from all others). This is from a
              developer/development side. Of course, there are also investors
              and speculators who are hoping for appreciation. It is very
              important you know the intent and functionality of cryptocurrency
              you own or are considering owning.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              2. What is "Market Capitalization" and how is it calculated?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Market Capitalization is one way to rank the relative size of a
              cryptocurrency. It's calculated by multiplying the Price by the
              Circulating Supply.
              <br /> Market Cap = Price X Circulating Supply.
            </div>
          </div>
        </div>
        {/* <img
          style={{ width: "100%", height: "350px", float: "left" }}
          src="../WhatsApp Image 2021-11-16 at 11.21.31 AM.jpeg"
        /> */}{" "}
       <h1 style={{ marginTop: 20}}> Connect With Us</h1>
          <div className="row pt-5">
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
                

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

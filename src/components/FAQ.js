import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item text-info bg-dark">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                style={{ backgroundColor: "black", color: "skyblue" }}
              >
                1. Coin Price, Market Capitalization, Volume - What are they?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Coin Price</strong> refers to the current global
                volume-weighted average price of a cryptoasset traded on an
                active cryptoasset exchange as tracked by CoinGecko.
                <br /> <strong>Market Capitalization</strong> is one of the
                metrics used to measure the relative size of a cryptoasset.
                Market Capitalization is calculated by multiplying Coin Price
                with Available Supply.
                <br /> <strong>Volume</strong> is the total trading volume of a
                cryptoasset across all active cryptoasset exchanges tracked by
                CoinGecko.
              </div>
            </div>
          </div>

          <div className="accordion-item text-info bg-dark">
            <h2 className="accordion-header " id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{ backgroundColor: "black", color: "skyblue" }}
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
              <div className="accordion-body">
                Market Capitalization is one way to rank the relative size of a
                cryptocurrency. It's calculated by multiplying the Price by the
                Circulating Supply.
                <br />
                Market Cap = Price X Circulating Supply.
              </div>
            </div>
          </div>

          <div className="accordion-item text-info bg-dark">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ backgroundColor: "black", color: "skyblue" }}
              >
                3. Beyond a method for payment, what are other functions of
                cryptocurrencies?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cryptocurrency value can be pegged to underlying asset such as
                U.S. dollar, central bank digital currencies, privacy coins
                (senders and receivers are anonymous), governance tokens (gives
                owners the right to vote in decisions regarding blockchain’s
                future development), utility tokens, and non-fungible tokens
                (distinct characteristics from all others). This is from a
                developer/development side. Of course, there are also investors
                and speculators who are hoping for appreciation. It is very
                important you know the intent and functionality of
                cryptocurrency you own or are considering owning.
              </div>
            </div>
          </div>
          <div className="accordion-item text-info bg-dark">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={{ backgroundColor: "black", color: "skyblue" }}
              >
                4. How are cryptocurrency transactions recorded?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Cryptocurrency transactions are recorded on a shared, digital
                ledger called a blockchain. This is decentralized technology,
                spread across many computers, that records every transaction.
              </div>
            </div>
            <div className="accordion-item text-info bg-dark">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                  style={{ backgroundColor: "black", color: "skyblue" }}
                >
                  5. Are blockchain and cryptocurrencies the same?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  No. Blockchain is the technology that allows for
                  cryptocurrencies to work. It is a decentralized and digital
                  ledger of transactions used for cryptocurrencies and other
                  assets/functions. It is important to separate the technology
                  behind cryptocurrencies from the actual cryptocurrencies.
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item text-info bg-dark">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
                style={{ backgroundColor: "black", color: "skyblue" }}
              >
                6. I hear cryptocurrencies are used for illicit/illegal
                activities; is this true?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Since cryptocurrency operates on a decentralized network that
                lacks a central authority, it is possible to exchange
                cryptocurrency without registering an identity. Yes, since the
                start there have been criminal activities with cryptocurrencies.
                However, the blockchain publicly records every transaction, and
                while names are not assigned to addresses, you can trace
                activity back to a crypto exchange, which knows the end user.
                The estimates vary for how many transactions are for illegal
                activities and proponents of cryptocurrency point to illegal
                activity with traditional currencies. (Source: NY Times article
                Jan 2020)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import { Container } from "@material-ui/core";
import { Table, Row, Col } from "reactstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CoinTable2 = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%20%2030d"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error("Error"));
  }, []);
  return (
    <div className="CoinTable2">
      <Container>
        <Row>
          <Col md="12">
            <Table className="mt-5" dark>
              <thead>
                <tr>
                  <th>ATH</th>
                  <th>ATH_Change_Percentage</th>
                  <th>ATH_Date</th>
                  <th>ATL</th>
                  <th>ATL_Change_Percentage</th>
                  <th>ATL_Date</th>
                  <th>Max_Supply</th>
                </tr>
              </thead>

              {coins.map((hey) => {
                <tbody>
                  <td>{hey.ath}</td>
                  <td>{hey.ath_change_percentage}</td>
                  <td>{hey.ath_date}</td>
                  <td>{hey.atl}</td>
                  <td>{hey.atl_change_percentage}</td>
                  <td>{hey.atl_date}</td>
                  <td>{hey.max_supply}</td>
                </tbody>;
              })}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoinTable2;

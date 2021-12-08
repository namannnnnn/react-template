import React from "react";
// import LineChart from './BalanceChart'
import {
  Row,
  Col,
  ProgressBar,
  Badge,
  Card,
  Container,
  Table,
  Button,
  Dropdown,
  DropdownButton,
  Nav,
} from "react-bootstrap";

import "./screen.css";
import Chart from "react-google-charts";
import { AiOutlineDownload } from "react-icons/ai";

function Screen() {
  return (
    <div>
      <Container style={{ marginTop: "5%", marginRight: "5%" }}>
        <Row xs={1} md={2}>
          <Col>
            {/* Income */}
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Total Income</Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontWeight: "bold",
                    fontSize: "200%",
                    marginBottom: "3%",
                  }}
                >
                  $123,563{" "}
                  <Badge
                    style={{
                      width: "12%",
                      height: "8%",
                      fontSize: "50%",
                      backgroundColor: "#33CC99",
                      color: "black",
                      marginLeft: "1%",
                    }}
                    pill
                    bg=""
                  >
                    +69%
                  </Badge>
                </Card.Subtitle>

                <Card.Text style={{ color: "#9933FF" }}>
                  <ProgressBar now={60} />
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "100%", marginTop: "3%" }}>
              <Card.Body>
                <p className="text-muted">New Users</p>
                <Card.Title style={{ fontWeight: "bold", fontSize: "200%" }}>
                  94.2%{" "}
                  <Badge
                    style={{
                      width: "12%",
                      height: "8%",
                      fontSize: "50%",
                      backgroundColor: "#33CC99",
                      color: "black",
                      marginLeft: "1%",
                    }}
                    pill
                    bg=""
                  >
                    +6.9%
                  </Badge>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  <Chart
                    style={{ marginTop: "3%" }}
                    width={"100%"}
                    height={"80%"}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["", "Users"],
                      ["2014", 100000],
                      ["2015", 117000],
                      ["2016", 66000],
                      ["2017", 103000],
                      ["2018", 100000],
                      ["2019", 117000],
                      ["2020", 66000],
                      ["2021", 103000],
                    ]}
                    options={{
                      // Material design options
                      chart: {},
                      legend: "none",
                    }}
                    // For tests
                    rootProps={{ "data-testid": "2" }}
                  />
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
          {/* Balance */}
          <Col>
            <Card style={{ width: "100%", height: "100%", marginTop:'%' }}>
              <Card.Body>
                <Card.Title style={{ marginLeft: "4%" }}>
                  Balance
                  <DropdownButton
                    variant="outline-primary"
                    id="dropdown-button"
                    title="Time span"
                    style={{
                      display: "inline-block",
                      width: "8%",
                      height: "5%",
                      textAlign: "center",
                      marginLeft: "63%",
                    }}
                  >
                    <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Yearly</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Daily</Dropdown.Item>
                  </DropdownButton>{" "}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <Container>
                    <Row>
                      <Col>
                        <h6>Earnings</h6>
                        <Card
                          body
                          style={{
                            fontColor: "black",
                            fontWeight: "bold",
                            fontSize: "200%",
                          }}
                        >
                          43.41%
                          <Badge
                            style={{
                              width: "24%",
                              height: "16%",
                              fontSize: "40%",
                              backgroundColor: "#33CC99",
                              color: "black",
                              marginLeft: "1%",
                            }}
                            pill
                            bg=""
                          >
                            +2.5%
                          </Badge>
                        </Card>
                      </Col>
                      <Col>
                        <h6>Sales Value</h6>
                        <Card
                          body
                          style={{
                            fontColor: "black",
                            fontWeight: "bold",
                            fontSize: "200%",
                          }}
                        >
                          $9,900
                          <Badge
                            style={{
                              width: "27%",
                              height: "16%",
                              fontSize: "40%",
                              backgroundColor: "#33CC99",
                              color: "black",
                              marginLeft: "1%",
                            }}
                            pill
                            bg=""
                          >
                            +13.5%
                          </Badge>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Card.Subtitle>
                <Card.Text style={{ marginTop: "15%" }}>
                  <Chart
                    style={{ width: "100%" }}
                    width={"100%"}
                    height={"100%"}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Month", "Expenses"],
                      ["", 1000],
                      ["", 1170],
                      ["", 660],
                      ["", 1030],
                      ["", 1000],
                      ["", 1170],
                      ["", 660],
                      ["", 1030],
                      ["", 1000],
                      ["", 1170],
                      ["", 660],
                      ["", 1030],
                    ]}
                    options={{
                      title: "",

                      vAxis: { minValue: 0 },
                      // For the legend to fit, we make the chart area smaller
                      chartArea: { width: "87%", height: "90%" },
                      legend: "none",
                      // lineWidth: 25
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Transactions */}
        <Row xs={1} md={1} style={{ paddingTop: "3%" }}>
          <Card style={{ width: "100%", marginTop:'%' }}>
            <Card.Body>
              <Card.Title>
                <div>
                  <p className="childd">Recent Transactions</p>
                  <Button
                    variant="outline-primary"
                   
                    style={{
                      display: "inline-block",
                      width: "8%",
                      height: "5%",
                      textAlign: "center",
                      marginLeft: "77%",
                    }}
                  ><AiOutlineDownload /> Export</Button>{" "}
                </div>
              </Card.Title>

              <Card.Subtitle className="mb-2 text-muted">
                <Nav variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/">Incoming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Invoices</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Subtitle>
              <Card.Text style={{alignItems: 'center'}}>
                <Table striped bordered hover >
                  <thead>
                    <tr>
                      <th>InvoiceID</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>M0345D1234</td>
                      <td>08/04/2021</td>
                      <td>Code 5928MDOI</td>
                      <td>
                        <Badge
                          style={{
                            width: "39%",
                            height: "18%",
                            fontSize: "70%",
                            backgroundColor: "#33CC99",
                            color: "black",
                            marginLeft: "1%",
                          }}
                          pill
                          bg=""
                        >
                          Completed
                        </Badge>
                      </td>
                      <td>$699</td>
                    </tr>
                    <tr>
                      <td>M0345D1235</td>
                      <td>08/04/2021</td>
                      <td>Code 5928MDOI</td>
                      <td>
                        <Badge
                          style={{
                            width: "39%",
                            height: "18%",
                            fontSize: "70%",
                            backgroundColor: "#33CC99",
                            color: "black",
                            marginLeft: "1%",
                          }}
                          pill
                          bg=""
                        >
                          Completed
                        </Badge>
                      </td>
                      <td>$1200</td>
                    </tr>
                    <tr>
                      <td>M0345D1236</td>
                      <td>08/04/2021</td>
                      <td>Code 5928MDOI</td>
                      <td>
                        <Badge
                          style={{
                            width: "39%",
                            height: "18%",
                            fontSize: "70%",
                            backgroundColor: "#33CC99",
                            color: "black",
                            marginLeft: "1%",
                          }}
                          pill
                          bg=""
                        >
                          Completed
                        </Badge>
                      </td>
                      <td>$2700</td>
                    </tr>
                    <tr>
                      <td>M0345D1237</td>
                      <td>08/04/2021</td>
                      <td>Code 5928MDOI</td>
                      <td>
                        <Badge
                          style={{
                            width: "39%",
                            height: "18%",
                            fontSize: "70%",
                            backgroundColor: "#33CC99",
                            color: "black",
                            marginLeft: "1%",
                          }}
                          pill
                          bg=""
                        >
                          Completed
                        </Badge>
                      </td>
                      <td>$2500</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Screen;

// import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
// import { useMediaQuery, MediaQuery } from 'react-responsive';

function App() {
  const interval = setTimeout(() => {
    window.location.reload(true);
  }, 3 * 60 * 1000);
  // ReactDOM.render(Example,document.getElementById('test'));
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Container fluid className="Container">
            <Row>
              <Col>
                <h4>太平山(望向東北偏北面)</h4>
                <Image fluid src='https://www.hko.gov.hk/wxinfo/aws/hko_mica/vpb/latest_HD_VPB.jpg' />
              </Col>
              <Col>
                <h4>太平山(望向東面)</h4>
                <Image fluid src='https://www.hko.gov.hk/wxinfo/aws/hko_mica/vpa/latest_HD_VPA.jpg' />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>環球貿易廣場(望向西南面)</h4>
                <Image fluid src='https://www.hko.gov.hk/wxinfo/aws/hko_mica/ic2/latest_HD_IC2.jpg' />
              </Col>
              <Col>
                <h4>環球貿易廣場(望向東南面)</h4>
                <Image fluid src='https://www.hko.gov.hk/wxinfo/aws/hko_mica/ic1/latest_HD_IC1.jpg' />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    </div>
  );
}

export default App;

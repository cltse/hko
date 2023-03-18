// import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
// import { useMediaQuery, MediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

const imageData = [
  {
    title: '太平山(望向東北偏北面)',
    src: 'https://www.hko.gov.hk/wxinfo/aws/hko_mica/vpb/latest_HD_VPB.jpg',
  },
  {
    title: '太平山(望向東面)',
    src: 'https://www.hko.gov.hk/wxinfo/aws/hko_mica/vpa/latest_HD_VPA.jpg',
  },
  {
    title: '環球貿易廣場(望向西南面)',
    src: 'https://www.hko.gov.hk/wxinfo/aws/hko_mica/ic2/latest_HD_IC2.jpg',
  },
  {
    title: '環球貿易廣場(望向東南面)',
    src: 'https://www.hko.gov.hk/wxinfo/aws/hko_mica/ic1/latest_HD_IC1.jpg',
  },
];

const ImageCol = ({ title, src }) => (
  <div>
    <h4>{title}</h4>
    <Image fluid src={src} />
  </div>
);

const App = () => {
  const interval = setTimeout(() => {
    window.location.reload(true);
  }, 3 * 60 * 1000);

  const [isMobile, setIsMobile] = useState(false);
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'iphone', 'ipod', 'ipad', 'blackberry', 'windows phone', 'iemobile'];
      return mobileKeywords.some((keyword) => userAgent.includes(keyword));
    };
    setIsMobile(checkMobile());
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1000);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDesktop(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#282c34',
            color: '#fff',
          }}
        >
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }

  const isTwoByTwo = isMobile ? false : !isSmallDesktop;

  function getOutputContainer(isTwoByTwo) {
    if(isTwoByTwo) {
      // console.log("two by two");
      return (
        <Container fluid className="Container">
        <Row>
          <Col>
            <Row>
              <ImageCol title={imageData[0].title} src={imageData[0].src} />
              <ImageCol title={imageData[1].title} src={imageData[1].src} />
            </Row>
          </Col>
          <Col>
            <Row>
              <ImageCol title={imageData[2].title} src={imageData[2].src} />
              <ImageCol title={imageData[3].title} src={imageData[3].src} />
            </Row>
          </Col>
        </Row>
      </Container>
      )
    }
    else {
      // console.log("four by one");
      return (
      <Container fluid className="Container">
      <Row>
        <Col>
          <ImageCol title={imageData[0].title} src={imageData[0].src} />
          <ImageCol title={imageData[1].title} src={imageData[1].src} />
          <ImageCol title={imageData[2].title} src={imageData[2].src} />
          <ImageCol title={imageData[3].title} src={imageData[3].src} />
        </Col>
      </Row>
    </Container>
      )
    }
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          {getOutputContainer(isTwoByTwo)}
        </header>
      </div>
    </div>
  );
}

export default App;

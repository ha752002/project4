import React from "react";
import Card from "../../components/Card";
import { Row, Col } from "react-bootstrap";

const Map = () => {
  return (
    <div>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic</h4>
              </div>
            </Card.Header>
            <div className="card-body">
              <p>Creating basic google map</p>
              <iframe
                className="w-100"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.737827428569!2d105.84757617603337!3d21.003143888656517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad628c8db653%3A0x632b9dd2c91c7aa7!2sBa%20%C4%90%C3%ACnh%20office%20building!5e0!3m2!1svi!2s!4v1698898570401!5m2!1svi!2s"
                height="500"
                allowFullScreen=""
              ></iframe>
            </div>
          </Card>
        </Col>
      </Row>
      {/* <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Street View</h4>
              </div>
            </Card.Header>
            <div className="card-body">
              <p>Street View google map</p>
              <iframe
                className="w-100"
                title="map1"
                src="https://www.google.com/maps/embed?pb=!4v1576670414304!6m8!1m7!1sCAoSLEFGMVFpcFBmeGNVWUhFYmRqNWFzLTlsTjgyQUVMbTY1ckNqcmdMRDFjcy16!2m2!1d37.41885!2d-122.0798!3f191.60895907234024!4f-16.305518968749!5f0.4000000000000002"
                height="500"
                allowFullScreen=""
              ></iframe>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Satellite</h4>
              </div>
            </Card.Header>
            <div className="card-body">
              <p>Stellite View google map</p>
              <iframe
                className="w-100"
                title="map2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.6523460203307!2d-121.8326811833386!3d38.44960145310393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085259f4fcf781d%3A0x80a4c8c2bb5a0123!2s835%20Woodvale%20Dr%2C%20Dixon%2C%20CA%2095620%2C%20USA!5e1!3m2!1sen!2sin!4v1576670825530!5m2!1sen!2sin"
                height="500"
                allowFullScreen=""
              ></iframe>
            </div>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};

export default Map;

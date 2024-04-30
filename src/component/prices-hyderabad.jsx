import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function PricesHyderabad() {


  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3 mt-3">
              <h2>About Prices</h2>
              <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricesHyderabad;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import Name from './component/Name';
import Price from './component/Price';
import Description from './component/Description';
import Image from './component/Image';




const firstName = "Marvellous"; // Change this or leave as ""

function App() {
  return (
    <>
      <div className="App" style={{ margin: "2rem" }}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Image />
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <h5>Hello, {firstName ? firstName : "there"}!</h5>
          {firstName && <img src="https://via.placeholder.com/100" alt="welcome" />}
        </div>
      </div>
    </>
  );
}

export default App;

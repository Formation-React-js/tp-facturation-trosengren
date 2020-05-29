import React from 'react';
import { Card } from 'react-bootstrap';
import { Planet } from '..';
import ApiContainer from '../api-container';


const Compagnie = ({ id }) => {
  return (
    <ApiContainer
      id={id}
    >
      {(compagnie) =>
        <Card>
          <Card.Header as="h3">{compagnie.name}</Card.Header>
          <Card.Body>
            <Card.Text>Height: {compagnie.siren}</Card.Text>
            <Card.Text>Mass: {compagnie.iban}</Card.Text>
            <Card.Text>IsClient : {compagnie.isClient}</Card.Text>
            <Card.Text>Homeworld:
              {/* <Planet.Link id={parseApiUrl(person.homeworld).id} /> */}
            </Card.Text>
          </Card.Body>
        </Card>
      }
    </ApiContainer>
  );
}

// Person.Link = Link;
    
export default Compagnie;

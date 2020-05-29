import React, {useEffect, useState, useMemo } from 'react';
import { invoicesApi, companiesApi } from '../utils/api';
import { Layout, InvoicePreview } from '../components';
import { Spinner, ListGroup, Card } from 'react-bootstrap';


const InvoiceListPage = ({ match }) => {

const idCompagnie = match.params.id;
    
  const [data, setData] = useState(null);
  const [compagnie, setCompagnie] = useState(null);
  const [isClient, setIsClient] = useState(null);

  
    useEffect( () => {
        companiesApi.read(idCompagnie)
        .then( response => {
            setCompagnie(response)
            setIsClient(response.data.isClient)
        
        })        
    },
     []);

    if (compagnie === null || data === null){
        
        if(compagnie !== null ){
                
            if(isClient !== null){
                if(isClient){
                    console.log('is client');
                    invoicesApi.readByClient(idCompagnie)
                    .then(response => setData(response));
                }else{
                    console.log('is not client');
                    invoicesApi.readByAccountant(idCompagnie)
                    .then(response => setData(response));
                }
            }
                


                
            
        }
        
        return (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
    
          );



    }



  // console.log('data : ' + data.props);

    if (data === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>

      );
    }

  return (
    <Layout>
    <Card bg={compagnie.data.isClient ? 'success' : 'danger'}>
    <Card.Header as="h3">{compagnie.data.name}</Card.Header>
    <Card.Body>
      <Card.Text>siren: {compagnie.data.siren}</Card.Text>
      <Card.Text>iban: {compagnie.data.iban}</Card.Text>
      <Card.Text>Is Client: {compagnie.data.isClient.toString()}
      </Card.Text>
      <Card.Text>
      <ListGroup>
        {/* La méthode map permet de transformer chaque élément du tableau de départ en
        un composant JSX qui reçoit ses données comme props */}
        {data.map(
          (invoice, index) =>
            <ListGroup.Item key={index}>
              <InvoicePreview

                data={invoice.data}
                id={index}
              />
            </ListGroup.Item>
        )}


      </ListGroup>
      </Card.Text>
    </Card.Body>
  </Card>

    </Layout>
  );
};

export default InvoiceListPage;

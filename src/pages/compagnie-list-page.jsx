import React, {useEffect, useState } from 'react';
import { companiesApi } from '../utils/api';
import { Layout, CompagniePreview } from '../components';
import { Spinner, ListGroup } from 'react-bootstrap';

const CompagnieListPage = (props) => {

  
  const [data, setData] = useState(null);


    useEffect( () => {
    companiesApi.readAll()
    .then(response => setData(response))
    },
     []);



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
      <ListGroup>
        {/* La méthode map permet de transformer chaque élément du tableau de départ en
        un composant JSX qui reçoit ses données comme props */}
        {data.map(
          (compagnie, index) =>
            <ListGroup.Item key={index}>
              <CompagniePreview
                data={compagnie.data}
                idCompagnie={compagnie.ref['@ref'].id}
                id={index}
              />
            </ListGroup.Item>
        )}


      </ListGroup>
    </Layout>
  );
};

export default CompagnieListPage;

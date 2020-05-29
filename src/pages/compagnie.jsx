import React, {useEffect, useState } from 'react';
import { companiesApi } from '../utils/api';
// import NotFoundPage from './not-found';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { Spinner } from 'react-bootstrap';

// Le composant page article généré par un composant Route hérite automatiquement des
// données du router via ses props. La propriété "match" contient les informations
// liées aux paramètres qui ont été trouvés dans l'URL demandée.
const CompagniePage = ({ match }) => {
  const id = match.params.id;
  
  console.log('id : ' + id);

  const [compagnie, setCompagnie] = useState(null);

    useEffect( () => {
    companiesApi.read(id).then(response => setCompagnie(response))
  }, []);


  if (typeof compagnie === 'undefined') {
    return (
         <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
        );
  }

  return (
    <Layout>
      <compagnie>
        <h1>{compagnie.name}</h1>
        <p>{compagnie.siren}</p>
      </compagnie>
      <Link to="/compagnies">
        <button>Retour</button>
      </Link>
    </Layout>
  );
}

export default CompagniePage;

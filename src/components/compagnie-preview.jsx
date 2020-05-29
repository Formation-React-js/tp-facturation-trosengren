import React, {useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Le nom "props" peut être remplacé par une série de propriétés entre accolades
// pour les extraire directement de l'objet et les assigner à des constantes.
// La ligne 9 est l'équivalent de:
// const ArticlePreview = (props) => {
//   const { title, content, date } = props;
const CompagniePreview = ({ data, idCompagnie, id }) => {

  console.log({ data, idCompagnie, id });
  
  return (
    <Card bg={data.isClient ? 'success' : 'danger'}>
    <Card.Header as="h3">{data.name}</Card.Header>
    <Card.Body>
      <Card.Text>siren: {data.siren}</Card.Text>
      <Card.Text>id: {idCompagnie}</Card.Text>
      <Card.Text>iban: {data.iban}</Card.Text>
      <Card.Text>Is Client: {data.isClient.toString()}
      </Card.Text>
      <Card.Text>
        <Link to />
      </Card.Text>
    </Card.Body>
  </Card>
          
  );
}

// La bibliothèque PropTypes nous permet de valider la présence et le type des props
// passés à nos composants
CompagniePreview.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CompagniePreview;

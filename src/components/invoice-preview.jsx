import React, {useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Le nom "props" peut être remplacé par une série de propriétés entre accolades
// pour les extraire directement de l'objet et les assigner à des constantes.
// La ligne 9 est l'équivalent de:
// const ArticlePreview = (props) => {
//   const { title, content, date } = props;
const InvoicePreview = ({ data, id }) => {

  console.log({data, id });
  
  return (
    <Card>
    <Card.Header as="h3">{data.client}</Card.Header>
    <Card.Body>
      <Card.Text>Date de création : {data.createdAt.toString().substring(0, 10)}</Card.Text>
      <Card.Text>Due : {data.due.toString().substring(0, 10)}</Card.Text>
      <Card.Text>Time : {data.time}</Card.Text>
      <Card.Text>Unité : {data.unit}</Card.Text>
      <Card.Text>Rate : {data.rate}</Card.Text>
    </Card.Body>
  </Card>
          
  );
}


export default InvoicePreview;

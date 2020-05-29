import React, { useState, useEffect } from 'react';
import { Card, Form,Button } from 'react-bootstrap';
import { Layout } from '../components';
import { companiesApi } from '../utils/api';
import { Redirect } from 'react-router-dom';

const CompagnieForm = (props) => {

const [name, setName] = useState('');
const [iban, setIban] = useState('');
const [siren, setSiren] = useState('');
const [isClient, setIsClient] = useState(false);
const [isCreated, setIsCreated] = useState(false);

console.log('isCreated : '+isCreated)
if(isCreated !== null && isCreated){
    props.history.push('/compagnies');
}

const addCompagnie = (event) => {
    event.preventDefault();
    console.log({name, iban, siren, isClient})
    console.log({event})

    companiesApi.create({name, iban, siren, isClient})
    .then( () => {setIsCreated(true)})
    .catch( (error) => console.log(error.message));

};



    return (

    
        <Layout>
            <Form onSubmit={addCompagnie}>
                <Form.Group>
                    <Form.Label>Name : </Form.Label>
                    <Form.Control type="text" value={name} onChange={(event) =>setName(event.target.value) }></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>IBAN : </Form.Label>
                    <Form.Control type="text" value={iban} onChange={(event) =>setIban(event.target.value) }></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>SIREN : </Form.Label>
                    <Form.Control type="text" value={siren} onChange={(event) =>setSiren(event.target.value) }></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Is Client : " value={isClient} onChange={(event) =>setIsClient(event.target.checked) }></Form.Check>
                </Form.Group>
                <Button variant="primary" type="submit">
            Submit
          </Button>
            </Form>
        </Layout>
                  
          );



    }


export default CompagnieForm;

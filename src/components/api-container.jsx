import React, { Component, useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { companiesApi } from '../utils/api';

class ApiContainer extends Component {

    componentDidMount = () => {
        const { type, id} = this.props;
    
      const object = this.props[type].data[id];
    // console.log("type : " + type);
    // console.log("id : " + id);


    if (typeof object === 'undefined') {
         return companiesApi.readClients().then(response => response.json());
    }

        // if (typeof object === 'undefined') {
        //   fetch(`https://swapi.dev/api/${type}/${id}`)
        //   .then(response => {
        //     if (response.status === 404) {
        //       throw new Error('Not found');
        //     }
        //     return response.json();
        //   })
        //   .then(data => fetchObjectSuccess(type, id, data))
        //   .catch(error => fetchObjectError(type, id, error));
        // }
      }


      render = () => {
        const [data, setData] = useState(null);
        useEffect( () => {
            companiesApi.readClients().then(response => setData(response))
          }, []);





        // const object = null;

        // const { children, type, id } = this.props;
    
        // const object = this.props[type].data[id];
        // console.log("render : "+ this.props[type]);    
        // // Tant que la requête à l'API n'a pas répondu, afficher un loader
        // if (typeof object === 'undefined') {
        //   return (
        //     <Spinner animation="border" role="status">
        //       <span className="sr-only">Loading...</span>
        //     </Spinner>
        //   );
        // }
    
        // Dès que la requête a répondu, renvoie l'affichage normal du
        // composant supérieur, en lui passant les données de l'API
        // comme paramètre
        return (          <ul>
            {data.map( (item, index) =>
              <li key={index}>
                {JSON.stringify(item.data)}
              </li>
            )}
          </ul>);
        // return children(object);
      }
    


}

export default ApiContainer;
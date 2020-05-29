import crud from './crud';

export default {
  ...crud('invoices'),

  readByAccountant: (id) => {
    return fetch(`/.netlify/functions/invoices-by-accountant/${id}`)
    .then(response => response.json());
  },

  readByClient: (id) => {
    return fetch(`/.netlify/functions/invoices-by-client/${id}`)
    .then(response => response.json());
  },
};

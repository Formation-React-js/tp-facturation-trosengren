import React from 'react';
import { companiesApi } from './utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CompagniePage, CompagnieListPage, CompagnieForm, InvoiceListPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/compagnies" />
        <Route path="/compagnies/:id" component={CompagniePage} />
        <Route exact path="/compagnies" component={CompagnieListPage} />
        <Route path="/compagnies-ajout" component={CompagnieForm} />
        <Route path="/invoices/:id" component={InvoiceListPage} />
      </Switch>
    </BrowserRouter>
  );
}


//266753380678894086
//http://localhost:8888/invoices/266753380678894086
export default App;

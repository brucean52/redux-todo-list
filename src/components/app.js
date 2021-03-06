import React from 'react';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import List from './list';
import AddForm from './add_form';
import ViewItem from './view_item';

const App = () => (
    <div className="container">
        <Route exact path="/" component={List}/>
        <Route path="/add-item" component={AddForm}/>
        <Route path="/item/:id" component={ViewItem}/>
    </div>
);

export default App;

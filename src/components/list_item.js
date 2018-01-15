import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteItem, getItems } from '../actions/';

const ListItem =  props => {
    //console.log("List Item props:", props);

    const handleDelete = () => {
        props.deleteItem(props._id).then(()=>{
            //console.log('item deleted');
            props.getItems();
        })
    }
    return(
        <li className="list-group-item">
        <Link to={`/item/${props._id}`} >{props.title}</Link>
        <button onClick={handleDelete} className="btn btn-outline-danger">Delete</button>
        <button className="btn btn-outline-warning">Complete</button>
        </li>
    );
}

export default connect(null, {deleteItem, getItems})(ListItem);
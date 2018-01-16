import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from '../actions'

import ListItem from './list_item';

class List extends Component {
    
    componentDidMount(){
        this.props.getItems();
    }

    render(){
        //console.log("List props: ", this.props);

        const listItems = this.props.list.map((item, index) => {
            //console.log('list items', item);
            return(

                    <ListItem key={index} {...item}/>
           );
        });
        return(
            <div id="accordion" role="tablist">
                <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                        Collapsible Group Item #1
                        </a>
                    </h5>
            </div>

        );
    }
}

function mapStateToProps(state){
    return{
        list: state.todo.list
    }
}

export default connect(mapStateToProps, { getItems })(List);
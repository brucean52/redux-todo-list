import types from '../actions/types';

const DEFAULT_STATE = {
    list: [
        {
            title: 'Make Muffins',
            details: 'Build it and they will come'
        },
        {
            title: 'Lift Weights',
            details: 'Bro Science Life.'
        }
    ]
}

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.ADD_ITEM:
            return{ list: [action.payload, ...state.list]}
        default:
            return state;
    }
}
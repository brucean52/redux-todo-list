
export default store => next => action => {
    //Code goes here
    console.log('logger: ', action);

    next(action);
    console.log('next state', store.getState());
    return action;
}

//same as this
// export default function(store){
//     return function(next){
//         return function(action){
//             //code goes here
//         }
//     }
// }
import {ADD_EVENT} from '../constants/action-type';
const initialState={
    events:[{name:'Avinash is creating a redux app'}]
}
const rootReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_EVENT:
            return {...state,events:[...state.events,action.payload]};
        default:
            return state;
    }
};
export default rootReducer;
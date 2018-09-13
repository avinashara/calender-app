import {ADD_EVENT,SET_SEL_DATE,MONTHS_NAME,TODAY, getGetOrdinal,SET_SEL_TYPE} from '../constants/constant';
const initialState={
    events:[],
    selectedDate:`${MONTHS_NAME[TODAY.getMonth()]} ${getGetOrdinal(TODAY.getDate())}, ${TODAY.getFullYear()}`,
    selType:'M'
}
const rootReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_EVENT:
            return {...state,events:[...state.events,action.payload]};
        case SET_SEL_TYPE:
            return {...state,selType:action.payload};
        case SET_SEL_DATE:
            let date=action.payload;
            return {...state,selectedDate:`${MONTHS_NAME[date.getMonth()]} ${getGetOrdinal(date.getDate())}, ${date.getFullYear()}`};
        default:
            return state;
    }
};
export default rootReducer;
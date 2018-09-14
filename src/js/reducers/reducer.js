import {ADD_EVENT,SET_SEL_DATE,MONTHS_NAME,TODAY, getGetOrdinal,SET_SEL_TYPE,SET_CUR_DATE,SET_FORCE_UPDATE_SEL_TYPE,GET_CALENDAR_DATA} from '../constants/constant';
const initialState={
    events:[],
    selectedDate:`${MONTHS_NAME[TODAY.getMonth()]}, ${TODAY.getFullYear()}`,
    selType:'M',
    currDate: TODAY,
    calendarData:[]
}
const rootReducer=(state=initialState,{type,payload})=>{
    switch (type){
        case ADD_EVENT:
            return {...state,events:[...state.events,payload]};
        case SET_SEL_TYPE: 
                let selectedDate=null;  
                if(payload ==='M'){
                    selectedDate=`${MONTHS_NAME[TODAY.getMonth()]}, ${TODAY.getFullYear()}`;
                }else{
                    selectedDate=`${MONTHS_NAME[TODAY.getMonth()]} ${getGetOrdinal(TODAY.getDate())}, ${TODAY.getFullYear()}`;
                }                 
            return {...state,selType:payload,selectedDate:selectedDate};
        case SET_SEL_DATE:
            return {...state, selectedDate:payload,currDate:new Date()};
        case SET_CUR_DATE:            
            return {...state, currDate:payload.newDate,selectedDate:payload.text};
        case SET_FORCE_UPDATE_SEL_TYPE:
            let selectedDateText=`${MONTHS_NAME[payload.currDate.getMonth()]} ${getGetOrdinal(payload.currDate.getDate())}, ${payload.currDate.getFullYear()}`;
            return {...state, selType:'D',currDate:payload.currDate,selectedDate:selectedDateText};
        case GET_CALENDAR_DATA:
            return {...state, calendarData:payload} 
        default:
            return state;
    }
};
export default rootReducer;
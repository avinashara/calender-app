import {ADD_EVENT, SET_SEL_DATE,SET_SEL_TYPE,SET_FORCE_UPDATE_SEL_TYPE,SET_CUR_DATE,GET_CALENDAR_DATA} from '../constants/constant';

export const addEvents=event=>({type:ADD_EVENT,payload:event});
export const setSelectedDate=event=>({type:SET_SEL_DATE, payload:event});
export const setSelType=event=>({type:SET_SEL_TYPE, payload:event});
export const setCurDate=event=>({type:SET_CUR_DATE, payload:event});
export const setForceUpdateSelType=event=>({type:SET_FORCE_UPDATE_SEL_TYPE, payload:event});
export const setCalendarData=event=>({type:GET_CALENDAR_DATA, payload:event});
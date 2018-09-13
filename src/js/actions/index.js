import {ADD_EVENT, SET_SEL_DATE,SET_SEL_TYPE} from '../constants/constant';

export const addEvents=event=>({type:ADD_EVENT,payload:event});
export const setSelectedDate=event=>({type:SET_SEL_DATE, payload:event});
export const setSelType=event=>({type:SET_SEL_TYPE, payload:event});
export const ADD_EVENT='ADD_EVENT';
export const SET_SEL_DATE='SET_SEL_DATE';
export const SET_SEL_TYPE='SET_SEL_TYPE';
export const SET_FORCE_UPDATE_SEL_TYPE='SET_FORCE_UPDATE_SEL_TYPE';
export const GET_CALENDAR_DATA='GET_CALENDAR_DATA';
export const MONTHS_NAME = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
export const DAYS_NAME=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
export const TODAY= new Date();
export const SET_CUR_DATE= new Date();

export function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
 } 

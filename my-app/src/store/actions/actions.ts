import * as actionType from './actionType'

export const setUserinfo =(username:any)=>({type:actionType.SET_USERFINFO,data:username})
export const setUserproj =(userproj:any)=>({type:actionType.SET_USERPROJ,data:userproj})
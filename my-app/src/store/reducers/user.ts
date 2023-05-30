import * as actionType from '../actions/actionType'

const initState ={             
  userInfo:'',
  userProj:'',
}

const fn = (state = initState,action)=>{
  switch (action.type){
    case actionType.SET_USERFINFO: 
      return{
        ...state,
        userInfo:action.data
      }

    case actionType.SET_USERPROJ:
      return{
        ...state,
        userProj:action.data,
      }
    
    default:       
      return state
  }
}

export default fn
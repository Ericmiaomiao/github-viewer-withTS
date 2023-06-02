import {createSlice} from '@reduxjs/toolkit'

export interface Userstate{
  userInfo:{
    [prop:string]:any
  },
  userProj:{
    [prop:string]:any
  },
}
const initialState:Userstate = {
  userInfo:null,
  userProj:null,
} 
const user = createSlice({
  name:'user',  
  initialState,
  reducers:{       
    setUserInfo (state,action){
      state.userInfo = action.payload
    },
    setUserProj (state,action){
      state.userProj = action.payload
    },
    sortByShare(state){
      let userProj = state.userProj
      for(let i =1;i<userProj.length; i++){
        for(let j =0; j<userProj.length-i;j++){
          if(userProj[j].forks_count<userProj[j+1].forks_count){
            let temp = userProj[j];      //定义一个临时变量temp
            userProj[j] = userProj[j + 1];
            userProj[j + 1] = temp;
          }
        }
      }
    },
    sortByStar(state){
      let userProj = state.userProj
      for(let i =1;i<userProj.length; i++){
        for(let j =0; j<userProj.length-i;j++){
          if(userProj[j].stargazers_count<userProj[j+1].stargazers_count){
            let temp = userProj[j];      //定义一个临时变量temp
            userProj[j] = userProj[j + 1];
            userProj[j + 1] = temp;
          }
        }
      }
    }
  }
})

// 导出action函数
export const {setUserInfo,setUserProj,sortByShare,sortByStar} = user.actions

// 导出reducer，用来创建store 
export default user.reducer
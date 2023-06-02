import {createSlice} from '@reduxjs/toolkit'

export interface Projstate{
  userName:string,
  projName:string,
  projContent:any[],
}

const initialState:Projstate= {
  userName:'',
  projName:'',
  projContent:[]
} 

const projDetail = createSlice({
  name:'projDetail',  
  initialState,
  reducers:{       
    setUserName(state,action){
      state.userName = action.payload
    },
    setProjName(state,action){
      state.projName = action.payload
    },
    setProjContent(state,action){
      state.projContent = action.payload
    }
  }
})

// 导出action函数
export const {setUserName,setProjName,setProjContent} = projDetail.actions

// 导出reducer，用来创建store 
export default projDetail.reducer
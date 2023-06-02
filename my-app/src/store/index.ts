import {configureStore} from '@reduxjs/toolkit'
 
import user from './reducers/user'
import projDetail from './reducers/projDetail'
        
const store = configureStore({
  reducer:{
    user,
    projDetail
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
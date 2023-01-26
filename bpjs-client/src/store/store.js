import { configureStore } from '@reduxjs/toolkit'
import actionReducer from './action'

export default configureStore({
  reducer: {
    action: actionReducer
  },
})
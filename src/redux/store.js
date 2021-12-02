import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import itemsReducer from '../redux/itemsSlice'
import getUsersSaga from './userSaga'

const saga = createSagaMiddleware()

export default configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: [saga],
})

saga.run(getUsersSaga)

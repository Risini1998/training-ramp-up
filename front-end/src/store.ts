import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './slices/homeSlice'
import userReducer from './slices/userSlice'
import createSagaMiddleware from 'redux-saga'
import { HomeSaga } from './sagas/HomeSaga'
import { UserSaga } from './sagas/UserSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    students: studentReducer,
    user: userReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware)
})

sagaMiddleware.run(HomeSaga)
sagaMiddleware.run(UserSaga)

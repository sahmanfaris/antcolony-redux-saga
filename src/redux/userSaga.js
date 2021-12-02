import { call, put, takeEvery } from 'redux-saga/effects'
import { getItemsSuccess } from './itemsSlice'

// call allows us to call our urls and api's
// put allows us to call our actions
// takeEvery enables us to watch in action and trigger our function whenever that action is called

function* workGetUsersFetch() {
  const res = yield call(() =>
    fetch('https://jsonplaceholder.typicode.com/users')
  )
  const users = yield res.json()
  yield put(getItemsSuccess(users))
}

// watcher saga
export default function* getUsersSaga() {
  yield takeEvery('items/getItemsFetch', workGetUsersFetch)
}

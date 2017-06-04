// @flow
import {
  fork
} from 'redux-saga/effects'

import * as homeSagas from './home'
import * as detailSagas from './detail'

function handlerSagas (handler: Function, obj: Object): Array {
  const forkArr = []
  Object.keys(obj).map(key => {
    forkArr.push(handler(obj[key]))
  })
  return forkArr
}

export default function * rootSaga(): void {
    yield [
      ...handlerSagas(fork, homeSagas),
      ...handlerSagas(fork, detailSagas)
      ]
}

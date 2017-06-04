// @flow
import {
  fork
} from 'redux-saga/effects'

import * as homeSagas from './home'
import * as detailSagas from './detail'

function forkSagas (obj: Object): Array {
  const forkArr = []
  Object.keys(obj).map(key => {
    forkArr.push(fork(obj[key]))
  })
  return forkArr
}

export default function * rootSaga(): void {
    yield [
      ...forkSagas(homeSagas),
      ...forkSagas(detailSagas)
      ]
}

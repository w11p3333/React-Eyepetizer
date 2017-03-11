import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/count'
import initState from 'STORE/initState'

export default createReducer(initState.count, ACTION_HANDLERS)

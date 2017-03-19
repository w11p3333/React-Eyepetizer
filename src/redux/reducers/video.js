import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/video'
import initState from 'STORE/initState'

export default createReducer(initState.videos, ACTION_HANDLERS)

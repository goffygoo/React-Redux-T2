import {combineReducers} from 'redux'
import landingPage from './landingPageReducer'
import page from './pageReducer'
import album from './albumReducer'

export default combineReducers({
    landingPage,
    page,
    album,
})
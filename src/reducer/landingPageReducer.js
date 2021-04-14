const { ERROR, LOADING, INIT, GET10 } = require('./../action/actiontypes')

const initialstate = {
    initialised: false,
    loaded: false,
    photos: []
}

const func = function(state = initialstate, action){
    switch(action.type){
        case INIT:
            return{
                ...state,
                initialised: true,
                photos: action.data,
                loaded: true
            }
        case LOADING:
            return{
                ...state,
                loaded: false
            }
        case GET10:
            return{
                ...state, 
                photos: [...state.photos, ...action.data], loaded: true
            }
        case ERROR:
            return {
                ...state, 
                error: action.data,
                loaded: false
            }
        default:
            return state;
    }
}

export default func
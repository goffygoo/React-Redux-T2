const { GETALL, LOADINGALL } = require('./../action/actiontypes')

const initialstate = {
    allphoto: [],
    loadedAll: false
}

const func = function(state = initialstate, action){
    switch(action.type){
        case GETALL:
            return{
                ...state,
                allphoto: action.data,
                loadedAll: true
            }
        case LOADINGALL:
            return{
                ...state,
                loadedAll: false
            }
        default:
            return state;
    }
}

export default func
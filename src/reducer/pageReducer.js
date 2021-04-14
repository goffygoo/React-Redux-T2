const { INC_PAGE, SET_Y } = require('./../action/actiontypes')

const initialstate = {
    pageNumber: 1,
    y: 0
}

const func = function(state = initialstate, action){
    switch(action.type){
        case INC_PAGE:
            return{
                ...state, pageNumber: action.data
            }
        case SET_Y:
            return{
                ...state, y: action.data
            }
        default:
            return state;
    }
}

export default func
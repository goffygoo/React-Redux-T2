const { INC_PAGE, SET_Y } = require("./actiontypes");


export const changeY = y => {
    return {
        data: y,
        type: SET_Y
    }
}


export const incPage = page => {
    return {
        data: page + 1,
        type: INC_PAGE
    }
}

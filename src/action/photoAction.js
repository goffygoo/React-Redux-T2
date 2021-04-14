const { ERROR, LOADING, INIT, GET10, GETALL, LOADINGALL } = require("./actiontypes");

export const initialize = () => dispatch => {

  const url = `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10`
  dispatch({
    type: LOADING
  })
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        data: response,
        type: INIT,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        data: "Error Ocurred",
        type: ERROR,
      });
    });
}

export const get10 = (page) => dispatch => {
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
  dispatch({
    type: LOADING
  })
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        data: response,
        type: GET10,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        data: "Error",
        type: ERROR,
      });
    });
}

export const getAll = () => dispatch => {
  const url = "https://jsonplaceholder.typicode.com/photos"
  dispatch({
    type: LOADINGALL
  })
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        data: response,
        type: GETALL
      });
    })
    .catch((err) => {
      console.log(err)
    });
}

import axios from "axios";

export const FETCH_STAFF_START = "FETCH_STAFF_START"
export const FETCH_STAFF_SUCCESS = "FETCH_STAFF_SUCCESS"
export const FETCH_STAFF_FAILURE = "FETCH_STAFF_FAILURE"

export const ADD_STAFF_START = "ADD_STAFF_START"
export const ADD_STAFF_SUCCESS = "ADD_STAFF_SUCCESS"
export const ADD_STAFF_FAILURE = "ADD_STAFF_FAILURE"

export const TIP_STAFF_START = "TIP_STAFF_START"
export const TIP_STAFF_SUCCESS = "TIP_STAFF_SUCCESS"
export const TIP_STAFF_FAILURE = "TIP_STAFF_FAILURE"


export const getStaff = () => dispatch => {
  dispatch({ type: FETCH_STAFF_START });
  axios
    .get("http://localhost:3333/items")
    .then(res => dispatch ({ type: FETCH_STAFF_SUCCESS, payload: res.data }))
    .catch(err => dispatch ({ type: FETCH_STAFF_FAILURE, payload: err }));
}

export const addStaff = staff => dispatch => {
  dispatch({ type: ADD_STAFF_START });
  axios
    .post("http://localhost:3333/items", staff)
    .then(res => dispatch ({ type: ADD_STAFF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_STAFF_FAILURE, payload: err }));
}

export const addTip = staff => dispatch => {
  dispatch({ type: TIP_STAFF_START });
    axios
      .put(`http://localhost:3333/items/`, staff)
      .then(res => dispatch ({ type: TIP_STAFF_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: TIP_STAFF_FAILURE, payload: err }));
}
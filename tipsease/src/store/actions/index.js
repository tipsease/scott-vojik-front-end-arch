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

export const FETCH_TIPS_START = "FETCH_TIPS_START"
export const FETCH_TIPS_SUCCESS = "FETCH_TIPS_SUCCESS"
export const FETCH_TIPS_FAILURE = "FETCH_TIPS_FAILURE"


export const getStaff = () => dispatch => {
  dispatch({ type: FETCH_STAFF_START });
  axios
    .get("https://tipsease-backend.herokuapp.com/api/tippees")
    .then(res => dispatch ({ type: FETCH_STAFF_SUCCESS, payload: res.data }))
    .catch(err => dispatch ({ type: FETCH_STAFF_FAILURE, payload: err }));
}

export const getTips = (id) => dispatch => {
  dispatch({ type: FETCH_TIPS_START });
  axios
    .get(`https://tipsease-backend.herokuapp.com/api/tippees/${id}/tips`)
    .then(res => console.log("TIPS!", res.data))
    .then(res => dispatch ({ type: FETCH_TIPS_SUCCESS, payload: res.data }))
    .catch(err => dispatch ({ type: FETCH_TIPS_FAILURE, payload: err }));
}

export const addStaff = staff => dispatch => {
  dispatch({ type: ADD_STAFF_START });
  axios
    .post("https://tipsease-david-freitag-backend.herokuapp.com/api/tippees/", staff)
    .then(res => dispatch ({ type: ADD_STAFF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_STAFF_FAILURE, payload: err }));
}

export const addTip = (id, tip) => dispatch => {
  dispatch({ type: TIP_STAFF_START });
    axios
      .post(`https://tipsease-backend.herokuapp.com/api/tippees/${id}/tips/`, tip)
      .then(res => dispatch ({ type: TIP_STAFF_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: TIP_STAFF_FAILURE, payload: err }));
}
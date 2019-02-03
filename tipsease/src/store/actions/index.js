import axios from "axios";

export const FETCH_STAFF_START = "FETCH_STAFF_START"
export const FETCH_STAFF_SUCCESS = "FETCH_STAFF_SUCCESS"
export const FETCH_STAFF_FAILURE = "FETCH_STAFF_FAILURE"

export const getStaff = () => dispatch => {
  dispatch({ type: FETCH_STAFF_START });
  axios
    .get("https://my.api.mockaroo.com/tipsease.json?key=8747b760")
    .then(res => dispatch ({ type: FETCH_STAFF_SUCCESS, payload: res.data }))
    .catch(err => dispatch ({ type: FETCH_STAFF_FAILURE, payload: err }));
}
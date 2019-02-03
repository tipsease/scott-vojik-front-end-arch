import { 
  FETCH_STAFF_START,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE
} from "../actions"


const initialState = {
  staff: [],
  error: '',
  isAddingStaff: false
}

const staff = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_STAFF_SUCCESS:
      return {
        ...state,
        staff: action.payload
      }
    case FETCH_STAFF_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default staff
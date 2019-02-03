import { 
  FETCH_STAFF_START,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,
  ADD_STAFF_START,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAILURE,
} from "../actions"


const initialState = {
  staff: [],
  error: '',
  isAddingStaff: false,
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
    case ADD_STAFF_START:
      return {
        ...state,
        isAddingStaff: true,
        error: ''
      }
    case ADD_STAFF_SUCCESS:
      return {
        ...state,
        staff: action.payload,
        isAddingStaff: false,
        error: '',
      }
    case ADD_STAFF_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default staff
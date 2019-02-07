import { 
  FETCH_STAFF_START,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,
  ADD_STAFF_START,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAILURE,
  TIP_STAFF_START,
  TIP_STAFF_SUCCESS,
  TIP_STAFF_FAILURE,
  FETCH_TIPS_START,
  FETCH_TIPS_SUCCESS,
  FETCH_TIPS_FAILURE
} from "../actions"


const initialState = {
  staff: [],
  error: '',
  isAddingStaff: false,
  isEditing: false,
  tips: [],
  isPatron: null,
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
    case TIP_STAFF_START:
      return {
        ...state,
        error: '',
      }
    case TIP_STAFF_SUCCESS:
      return {
        ...state,
        error: '',
        tips: action.payload
      }
    case TIP_STAFF_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_TIPS_START:
      return {
        ...state,
        error: ''
      }
    case FETCH_TIPS_SUCCESS:
      return {
        ...state,
        tips: action.payload,
        error: ''
      }
    case FETCH_TIPS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default staff
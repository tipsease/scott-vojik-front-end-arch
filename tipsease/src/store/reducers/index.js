import { 
  FETCH_STAFF_START,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,
  ADD_STAFF_START,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAILURE,
  EDIT_STAFF_START,
  EDIT_STAFF_SUCCESS,
  EDIT_STAFF_FAILURE,
} from "../actions"


const initialState = {
  staff: [],
  error: '',
  isAddingStaff: false,
  isEditing: false,
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
    case EDIT_STAFF_START:
      return {
        ...state,
        isEditing: true,
        error: '',
      }
    case EDIT_STAFF_SUCCESS:
      return {
        ...state,
        staff: action.payload,
        isEditing: false,
        error: ''
      }
    case EDIT_STAFF_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default staff
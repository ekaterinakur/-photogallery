import { 
  SET_PHOTO_LIST, 
  SET_NEW_PHOTO_LIST, 
  SET_PHOTO_INFO, 
  SET_USER_INFO,
  SET_LOADING_STATUS 
} from "./actions";

const initialState = {
  photos: [],
  photo: null,
  user: null,
  currentPage: 1,
  isLoading: true
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTO_LIST:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        currentPage: state.currentPage + 1,
        isLoading: false
      };
    case SET_NEW_PHOTO_LIST:
      return {
        ...state,
        photos: action.payload,
        currentPage: 1,
        isLoading: false
      };
    case SET_PHOTO_INFO: 
      return {
        ...state,
        photo: action.payload
      };
    case SET_USER_INFO: 
      return {
        ...state,
        user: action.payload
    };
    case SET_LOADING_STATUS: 
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}

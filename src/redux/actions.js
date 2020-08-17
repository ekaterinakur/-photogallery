import axios from 'axios';
import categories from '../categories';

export const SET_PHOTO_LIST = 'SET_PHOTO_LIST';
export const SET_NEW_PHOTO_LIST = 'SET_NEW_PHOTO_LIST';
export const SET_PHOTO_INFO = 'SET_PHOTO_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

let axiosInstance = axios.create({    
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Accept-Version': 'v1',
    'Authorization': 'Client-ID aYObTg30xza36OvDr_jIoNsNPfcQP2vZxnCf2r_ho5A'
  }
});

export function getPhotoList(category = null, query = null, page = 1) {

  return function(dispatch) {

    if (page === 1) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: true
      })
    }

    let endpoint;

    if (category && category !== 'all') {
      const categoryId = categories.find(cat => cat.query === category).id;
      endpoint = '/collections/' + categoryId + '/photos';
    } else if (query) {
      endpoint = '/search/photos';
    } else {
      endpoint = '/photos';
    }

    let actionType = (query || page === 1) ? SET_NEW_PHOTO_LIST : SET_PHOTO_LIST;
debugger
    let params = {
      per_page: 15,
      page
    }

    if (query) {
      params.query = query;

      if (categories) {
        const categoryId = categories.find(cat => cat.query === category).id;
        params.collections = categoryId;
      }
    }

    axiosInstance.get(endpoint, { params })   
    .then(res => {
      dispatch({
        type: actionType,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: SET_NEW_PHOTO_LIST,
        payload: {currentPage: 1, items: []}
      })
  
      console.error(err)
    });
  }
};

export function getPhotoInfo(id) {
  return function(dispatch) {
    axiosInstance.get('/photos/' + id)
      .then(res => {
        dispatch({
          type: SET_PHOTO_INFO,
          payload: res.data
        })
      })
      .catch(err => console.error(err))
  }
};

export function getUserInfo(username) {
  return function(dispatch) {
    axiosInstance.get('/users/' + username)
      .then(res => {
        dispatch({
          type: SET_USER_INFO,
          payload: res.data
        })
      })
      .catch(err => console.error(err))
  }
};

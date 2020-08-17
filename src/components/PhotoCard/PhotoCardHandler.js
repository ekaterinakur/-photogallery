import { connect } from 'react-redux';
import { getPhotoInfo } from '../../redux/actions';
import PhotoCard from './PhotoCard';

function mapStateToProps(state) {
  return {
    photo: state.photo,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPhotoInfo: (userId) => dispatch(getPhotoInfo(userId)),
  }
}

const PhotoCardHandler = connect(mapStateToProps, mapDispatchToProps)(PhotoCard);

export default PhotoCardHandler;
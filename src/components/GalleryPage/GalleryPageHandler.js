import { connect } from 'react-redux';
import { getPhotoList } from '../../redux/actions';
import GalleryPage from './GalleryPage';

function mapStateToProps(state) {
  return {
    photos: state.photos,
    isLoading: state.isLoading,
    currentPage: state.currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPhotoList: (category, searchString, nextPage) => dispatch(getPhotoList(category, searchString, nextPage)),
  }
}

const GalleryPageHandler = connect(mapStateToProps, mapDispatchToProps)(GalleryPage);

export default GalleryPageHandler;
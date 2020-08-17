import { connect } from 'react-redux';
import { getPhotoList } from '../../redux/actions';
import FilesSearch from './Search';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return {
    getPhotoList: (category, searchString) => dispatch(getPhotoList(category, searchString))
  }
}

const SearchHandler = connect(mapStateToProps, mapDispatchToProps)(FilesSearch);

export default SearchHandler;

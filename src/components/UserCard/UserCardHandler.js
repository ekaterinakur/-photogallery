import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/actions';
import UserCard from './UserCard';

function mapStateToProps(state) {
  return {
    user: state.user,
    isLoading: state.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: (username) => dispatch(getUserInfo(username)),
  }
}

const UserCardHandler = connect(mapStateToProps, mapDispatchToProps)(UserCard);

export default UserCardHandler;
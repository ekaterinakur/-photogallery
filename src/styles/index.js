import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
    marginTop: 65
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  menuLink: {
    padding: '0 10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black'
  },
  photoCard: {
    boxShadow: 'none'
  },
  photoCardMedia: {
    height: 0,
    paddingTop: '56.25%'
  },
  photoCardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photoCardLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black'
  },
  photoCardAvatar: {
    marginRight: 10
  },
  userCard: {
    boxShadow: 'none',
    display: 'flex',
  },
  userCardDetails: {
    flex: '1 0 auto', 
    textAlign: 'left'
  },
  userCardImage: {
    width: 151,
  },
  textField: {
    marginBottom: 40
  },
  menuDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menuMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  listLink: {
    display: 'inline-block'
  }
}));

export default useStyles;

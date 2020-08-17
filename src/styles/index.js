import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
    marginTop: 65
  },
  appbar: {
    backgroundColor: '#9226FF !important'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  headerLogo: {
    width: 50,
    marginBottom: '-10px'
  },
  menuLink: {
    padding: '0 10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#000'
  },
  bannerImg: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: 30
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
    color: '#000'
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
    flex: '0 0 200px'
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
  photoList: {
    marginBottom: '30px !important'
  },
  listLink: {
    display: 'inline-block',
    width: '100%',
    paddingTop: '56.25%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
}));

export default useStyles;

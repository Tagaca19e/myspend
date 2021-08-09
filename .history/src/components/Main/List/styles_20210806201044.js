import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%),
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
    color: 'white'
  },
}));
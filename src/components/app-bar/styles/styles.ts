import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Button:{
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  popover:{
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  }
}));


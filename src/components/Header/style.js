import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  header: {
    background: '#FFFFFF',
    padding: theme.spacing(3, 0),
    position: 'fixed',
    width: '100%',
    zIndex: 10,
    top: 0,
    left: 0
  }
}))

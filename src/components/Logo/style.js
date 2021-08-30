import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none'
  },
  icon: {
    background: '#1bc47d',
    color: '#FFFFFF',
    borderRadius: '50%',
    width: 30,
    height: 30,
    fontSize: 30,
    padding: '4px'
  },
  text: {
    fontSize: 28,
    fontWeight: 900,
    color: '#2D2D2D',
    letterSpacing: '-1px',
    margin: theme.spacing(0, 0, 0, 1)
  }
}))

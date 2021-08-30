import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  pageWrap: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '60px 0 0 0',
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    }
  }
}))

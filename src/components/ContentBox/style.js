import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  contentBox: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    gap: theme.spacing(2),
    '& > div': {
      width: 'calc(100% / 3)',
      maxWidth: '400px',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
}))

import { makeStyles } from '@material-ui/core'
import { ArrowRight } from '@material-ui/icons'

export const useStyles = makeStyles((theme) => ({
  userList: {
    background: '#FFFFFF'
  },
  title: {
    display: 'flex'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflowY: 'auto',
    maxHeight: 420,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(0,2),
    [theme.breakpoints.down('sm')]: {
      maxHeight: 210
    },
    '&::-webkit-scrollbar': {
      width: 12
    },
    '&::-webkit-scrollbar-track': {
      background: '#FFFFFF'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(215,219,231,1)',
      borderRadius: 2,
      borderLeft: '8px solid #FFFFFF'
    }
  },
  button: {
    textTransform: 'initial',
    width: '100%',
    '& .MuiButton-label': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: theme.spacing(2),
      width: '100%',
      alignItems: 'center'
    }
  },
  position: {
    textAlign: 'center',
    width: 30,
    '&.longWidth': {
      width: 50
    }
  },
  text: {
    fontSize: 13,
    fontWeight: 700,
    color: '#8A94A6',
    fontFamily: '"Noto Sans", sans-serif',
    padding: theme.spacing(1, 0)
  },
  resultText: {
    fontSize: 13,
    fontWeight: 700,
    color: '#16325C',
    fontFamily: '"Noto Sans", sans-serif'
  },
  name: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '& p': {
      margin: theme.spacing(0, 0, 0, 1)
    }
  },
  points: {
    textAlign: 'center',
    width: 50,
    '&.pointsTitle': {
      width: 80
    }
  },
  image: {
    width: 30,
    height: 30,
    overflow: 'hidden',
    borderRadius: '50%'
  }
}))

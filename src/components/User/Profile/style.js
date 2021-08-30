import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  userProfile: {
    padding: theme.spacing(0.5),
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    '& .avatar': {
      width: 60,
      height: 60
    },
    '& .userName': {
      fontSize: 18,
      lineHeight: '22px',
      fontFamily: '"Noto Sans", sans-serif',
      fontWeight: 700,
      color: '#16325C',
      margin: 0
    },
    '& .programName': {
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: '"Noto Sans", sans-serif',
      fontWeight: 700,
      color: '#8A94A6',
      margin: 0
    }
  },
  scores: {
    margin: theme.spacing(3, 0, 0, 0),
    padding: theme.spacing(4, 0),
    borderTop: '1px solid #D7DBE7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& .number': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .icon': {
        fontSize: 20,
        margin: theme.spacing(0, 1, 0, 0),
        '&.iconSpacing': {
          margin: theme.spacing(0, 0),
        },
        '&.blue': {
          color: '#1C8EFF'
        },
        '&.gray': {
          color: '#8A94A6'
        }
      },
      '& .value': {
        fontSize: 18,
        lineHeight: '22px',
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 700,
        color: '#16325C',
        margin: 0
      }
    },
    '& .text': {
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: '"Noto Sans", sans-serif',
      fontWeight: 700,
      color: '#8A94A6',
      margin: 0,
      textAlign: 'center'
    }
  },
  levels: {
    margin: theme.spacing(0),
    padding: theme.spacing(4, 0),
    borderTop: '1px solid #D7DBE7',
    '& .topLevels': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& .value': {
        fontSize: 16,
        lineHeight: '22px',
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 700,
        color: '#16325C',
        margin: 0
      },
      '& .nextTier': {
        fontSize: 12,
        lineHeight: '16px',
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 700,
        color: '#B5BAC8',
        margin: 0,
        display: 'flex',
        '& > span:not(.noStyle)': {
          color: '#16325C',
          display: 'flex',
          margin: theme.spacing(0, 0, 0, 1)
        },
        '& .iconInfo': {
          fontSize: 14,
          width: 14,
          height: 14,
          margin: theme.spacing(0, 0, 0, 1)
        }
      }
    }
  },
  stepper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    margin: theme.spacing(1, 0, 0, 0),
    '&::before': {
      content: "''",
      background: '#CCCCCC',
      width: '100%',
      height: 2,
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translate(0, -50%)'
    },
    '& .step': {
      background: '#FFFFFF',
      position: 'relative',
      zIndex: 1,
      width: 20,
      height: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .iconStep': {
        fontSize: 12,
        width: 12,
        height: 12,
        color: '#B5BAC8'
      },
      '& .iconStepSelected': {
        fontSize: 12,
        width: 12,
        height: 12,
        color: '#1C8EFF'
      }
    }
  },
  badges: {
    margin: theme.spacing(0),
    padding: theme.spacing(4, 0, 1, 0),
    borderTop: '1px solid #D7DBE7',
    '& ul': {
      margin: 0,
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing(1),
      '& li': {
        position: 'relative',
        width: 40,
        height: 40,
        '& .circle': {
          display: 'block',
          width: 40,
          height: 40,
          background: '#1bc47d',
          borderRadius: '50%'
        },
        '& .badgeIcon': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#ffffff',
          fontSize: 30,
        }
      }
    }
  }
}))

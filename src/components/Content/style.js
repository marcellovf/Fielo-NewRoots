import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  content: {
    backgroundImage: (props) => props.image && `url(${props.image})`,
    backgroundColor: '#CCCCCC',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 0)
  }
}))

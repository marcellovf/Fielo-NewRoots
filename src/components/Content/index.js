import { useStyles } from './style'

export const Content = ({ children, backgroundImage }) => {
  const classes = useStyles({ image: backgroundImage })

  return <div className={classes.content}>{children}</div>
}

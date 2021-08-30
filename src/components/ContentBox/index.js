import { useStyles } from './style'

export const ContentBox = ({ children, backgroundImage }) => {
  const classes = useStyles({ image: backgroundImage })

  return <div className={classes.contentBox}>{children}</div>
}

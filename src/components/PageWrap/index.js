import { useStyles } from './style'

export const PageWrap = ({ children }) => {
  const classes = useStyles()
  
  return <div className={classes.pageWrap}>{children}</div>
}

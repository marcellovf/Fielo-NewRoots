import { useStyles } from './style'

export const ListBox = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.listBox}>{children}</div>
}

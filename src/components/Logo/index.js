import Link from 'next/link'

import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined'
import { Typography } from '@material-ui/core'

import { useStyles } from './style'

export const Logo = () => {
  const classes = useStyles()

  return (
    <Link href="/">
      <a className={classes.logo}>
        <EcoOutlinedIcon className={classes.icon} />
        <Typography variant="body1" className={classes.text}>
          NewRoots
        </Typography>
      </a>
    </Link>
  )
}

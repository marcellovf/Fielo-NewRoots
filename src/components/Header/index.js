import { Container, Grid } from '@material-ui/core'
import { Logo } from '../Logo'

import { useStyles } from './style'

export const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Container>
        <Grid container>
          <Logo />
        </Grid>
      </Container>
    </div>
  )
}

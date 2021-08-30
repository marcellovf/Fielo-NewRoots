import clsx from 'clsx'
import { useRouter } from 'next/router'

import {
  Avatar,
  Button,
  Typography
} from '@material-ui/core'

import { useStyles } from './style'

export const UserList = ({ users }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.userList}>
      <div className={classes.title}>
        <div className={clsx(classes.position, 'longWidth')}>
          <Typography variant="body2" className={classes.text}>
            Pos.
          </Typography>
        </div>
        <div className={classes.name}>
          <Typography variant="body2" className={classes.text}>
            Member
          </Typography>
        </div>
        <div className={clsx(classes.points, 'pointsTitle')}>
          <Typography variant="body2" className={classes.text}>
            Points
          </Typography>
        </div>
      </div>
      {users && (
        <ul className={classes.list}>
          {users.map((user, index) => (
            <li key={user.id}>
              <Button
                className={classes.button}
                onClick={() => router.push(`/user/${user.id}`)}
              >
                <span className={classes.position}>
                  <Typography variant="body2" className={classes.resultText}>
                    {index + 1}
                  </Typography>
                </span>
                <span className={classes.name}>
                  <Avatar
                    alt={user.name}
                    src={user.image}
                    width="30"
                    height="30"
                    className={classes.image}
                  />
                  <Typography variant="body2" className={classes.resultText}>
                    {user.name}
                  </Typography>
                </span>
                <span className={classes.points}>
                  <Typography variant="body2" className={classes.resultText}>
                    {user.points}
                  </Typography>
                </span>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

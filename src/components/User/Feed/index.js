import clsx from 'clsx'

import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded'
import FlagRoundedIcon from '@material-ui/icons/FlagRounded'
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import { Typography } from '@material-ui/core'

import { useStyles } from './style'

export const UserFeed = ({ profileInfo }) => {
  const classes = useStyles()
  return (
    <div className={classes.userFeed}>
      <div className={classes.title}>
        <Typography variant="body2" className="sectionTitle">
          Activity Feed
        </Typography>
        <Typography variant="body2" className="showFilters">
          Show Filters
        </Typography>
      </div>
      <div className={classes.list}>
        {profileInfo &&
        profileInfo.userFeed &&
        profileInfo.userFeed.length >= 1 ? (
          <ul>
            {profileInfo.userFeed.map((userFeed) => (
              <li key={userFeed.id}>
                <div className="iconSep">
                  {userFeed.icon === 'received' && (
                    <RadioButtonCheckedIcon
                      className={clsx(classes.icon, 'received')}
                    />
                  )}
                  {userFeed.icon === 'incetive' && (
                    <FlagRoundedIcon
                      className={clsx(classes.icon, 'incetive')}
                    />
                  )}
                  {userFeed.icon === 'module' && (
                    <BookmarkRoundedIcon
                      className={clsx(classes.icon, 'module')}
                    />
                  )}
                  {userFeed.icon === 'redeemed' && (
                    <HttpsRoundedIcon
                      className={clsx(classes.icon, 'redeemed')}
                    />
                  )}
                </div>
                <div className="textSep">
                  <Typography variant="body2" className="date">
                    {userFeed.date}
                  </Typography>
                  <Typography variant="body2" className="description">
                    {userFeed.description}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>Erro</div>
        )}
      </div>
    </div>
  )
}

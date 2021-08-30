import { useEffect, useState } from 'react'

import { Avatar, Badge, Typography } from '@material-ui/core'
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined'
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined'
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded'
import EcoRoundedIcon from '@material-ui/icons/EcoRounded'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import LayersRoundedIcon from '@material-ui/icons/LayersRounded'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import ViewDayRoundedIcon from '@material-ui/icons/ViewDayRounded'

import { useStyles } from './style'

export const UserProfile = ({ profileInfo }) => {
  const classes = useStyles()
  const steps = [
    { pos: 3, value: 'Bronze' },
    { pos: 2, value: 'Silver' },
    { pos: 1, value: 'Gold' },
    { pos: 0, value: 'Platinum' }
  ].reverse()
  const [activeStep, setActiveStep] = useState(steps.length - 1)

  const getStepPosition = (positionName) =>
    steps
      .filter((step) => step.value === positionName)
      .map((step) => step.pos)[0]

  useEffect(() => {
    setActiveStep(getStepPosition(profileInfo.userInfo.level))
  }, [])

  const nextStep = steps.filter(step => step.pos === activeStep - 1 && activeStep - 1 >= 0)[0]

  return (
    <div className={classes.userProfile}>
      <div className={classes.userInfo}>
        <Avatar
          alt={profileInfo.userInfo.name}
          src={profileInfo.userInfo.image}
          className="avatar"
        />
        <Typography variant="h1" className="userName">
          {profileInfo.userInfo.name}
        </Typography>
        <Typography variant="body2" className="programName">
          {profileInfo.userInfo.program}
        </Typography>
      </div>
      <div className={classes.scores}>
        <div className="points">
          <div className="number">
            <AllInclusiveOutlinedIcon className="icon blue" />
            <Typography variant="body2" className="value">
              {profileInfo.userScores.points}
            </Typography>
          </div>
          <Typography variant="body2" className="text">
            Points
          </Typography>
        </div>
        <div className="miles">
          <div className="number">
            <Typography variant="body2" className="value">
              {profileInfo.userScores.miles}
            </Typography>
          </div>
          <Typography variant="body2" className="text">
            Miles
          </Typography>
        </div>
        <div className="currency">
          <div className="number">
            <AttachMoneyOutlinedIcon className="icon gray iconSpacing" />
            <Typography variant="body2" className="value">
              {profileInfo.userScores.currency}
            </Typography>
          </div>
          <Typography variant="body2" className="text">
            Currency
          </Typography>
        </div>
      </div>
      <div className={classes.levels}>
        <div className="topLevels">
          <Typography variant="body2" className="value">
            {profileInfo.userInfo.level}
          </Typography>
          <Typography variant="body2" className="nextTier">
            <span className="noStyle">Next Tier</span>{' '}
            <span>
              <span>{nextStep.value}</span> <InfoOutlinedIcon className="iconInfo" />
            </span>
          </Typography>
        </div>
        <div className={classes.stepper}>
          {steps.map((step) => (
            <div className="step" key={step.pos}>
              {step.pos === activeStep ? (
                <RadioButtonCheckedIcon className="iconStepSelected" />
              ) : (
                <RadioButtonUncheckedIcon className="iconStep" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.badges}>
        <ul>
          <li>
            <Badge 
              alt="Icon"
              className="circle"
            />
            <LayersRoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Badge 
              alt="Icon"
              className="circle"
            />
            <StarRoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Badge 
              alt="Icon"
              className="circle"
            />
            <Brightness7RoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Badge 
              alt="Icon"
              className="circle"
            />
            <FavoriteRoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Badge 
              alt="Icon"
              className="circle"
            />
            <EcoRoundedIcon className="badgeIcon" />
          </li>
          <li>
            <Badge 
              alt="Icon"
              className="circle"
            />
            <ViewDayRoundedIcon className="badgeIcon" />
          </li>
        </ul>
      </div>
    </div>
  )
}

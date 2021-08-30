import _get from 'lodash/get'
import moment from 'moment'

import { addThousandsDots, generateIcon, sortByFieldName } from '../../services/Utils'

export const getUserList = (users) => {
  if (users.length != 0) {
    const userData = users.map(user => {
      return {
        id: _get(user, 'id', ''),
        image: _get(user, 'image', ''),
        name: _get(user, 'name', ''),
        points: _get(user, 'balance.points', '')
      }
    })
    const ordenedUsers = userData.sort(sortByFieldName('points'))
    return ordenedUsers.reverse()
  }
  return []
}

export const getUserInfo = (userState) => {
  const activityFeed = _get(userState, 'activities', '')
  const levelData = _get(userState, 'level', '');
  const levelValue = levelData.sort(sortByFieldName('order'))[0].name

  const user = {
    userInfo: {
      id: _get(userState, 'id', ''),
      image: _get(userState, 'image', ''),
      name:  _get(userState, 'name', ''),
      program:  _get(userState, 'program.name', ''),
      level: levelValue
    },
    userScores: {
      points: _get(userState, 'balance.points', ''),
      miles: _get(userState, 'balance.miles', ''),
      currency: addThousandsDots(_get(userState, 'balance.currency', ''))
    },
    userFeed: activityFeed.map( activity => {
      return {
        id: activity.id,
        date: moment(activity.date, "YYYY-MM-DD").fromNow(),
        description: activity.description,
        icon: generateIcon(activity.description)
      }
    })
  }
  
  return user
}

import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'Flashcards/notifications'

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

const createNotification = () => {
  return {
    title: 'Time to study!',
    body: 'With just some minutes per day you will go far',
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

// method adapted from the local notifications lesson on the course
export const setLocalNotification = () => {
  return AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(data => {
      return JSON.parse(data)
    })
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(tomorrow.getHours())
              tomorrow.setMinutes(tomorrow.getMinutes())
              tomorrow.setSeconds(tomorrow.getSeconds())

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
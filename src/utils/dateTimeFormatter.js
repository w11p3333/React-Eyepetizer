import moment from 'moment'
export default function dateFormatter (milliseconds) {
  const durationObj = moment.duration(milliseconds)
  const minutes = durationObj.minutes()
  const seconds = durationObj.seconds()

  let formatString = ''
  if (minutes && minutes > 0) {
    formatString += (minutes > 10) ? `${minutes}'` : `0${minutes}'`
    formatString += ' '
  }
  formatString += (seconds > 10) ? `${seconds}"` : `0${seconds}"`

  return formatString
}

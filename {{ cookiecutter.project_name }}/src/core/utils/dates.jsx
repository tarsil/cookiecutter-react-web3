import * as moment from "moment"

export const generalDateFormat = (date) => {
  return moment(String(date)).format("YYYY-MM-DD")
}

export const generalDateFormatWithTime = (date) => {
  return moment(String(date)).format("YYYY-MM-DD H:mm:ss")
}

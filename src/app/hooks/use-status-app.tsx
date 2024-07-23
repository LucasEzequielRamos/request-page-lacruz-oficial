import { useState } from 'react'
import { APP_STATUS } from '../lib/consts'

export function useAppStatus () {
  const [appStatus, setAppStatus] = useState(APP_STATUS.IDLE)

  return {
    appStatus, setAppStatus, APP_STATUS
  }
}

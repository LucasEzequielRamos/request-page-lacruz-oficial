import { useState } from 'react'

export function useAppStatus () {
  const APP_STATUS = {
    IDLE: 'idle',
    ERROR: 'error',
    TYPING: 'typing',
    ALREADY_SEND: 'already_send',
    SENDING: 'sending',
    SENDED: 'sended'
  }

  const [appStatus, setAppStatus] = useState(APP_STATUS.IDLE)

  return {
    appStatus, setAppStatus, APP_STATUS
  }
}

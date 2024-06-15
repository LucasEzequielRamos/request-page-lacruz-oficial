'use client'
import { useState } from 'react'
import { REASONS } from '../lib/consts'

const useSetReason = () => {
  const [reason, setReason] = useState<string>()
  console.log(reason)

  return {
    reason, setReason, REASONS
  }
}

export default useSetReason

'use client'
import { useState } from 'react'
import { REASONS } from '../lib/consts'

const useSetReason = () => {
  const [reason, setReason] = useState<string>()

  return {
    reason, setReason, REASONS
  }
}

export default useSetReason

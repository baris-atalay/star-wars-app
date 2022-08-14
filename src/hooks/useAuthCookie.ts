import { useState, useMemo, useCallback } from 'react'
import Cookies from 'js-cookie'
import { authenticateMock } from '@/api/login'

const useAuthCookie = () => {
  const [authCookie, setAuth] = useState(Cookies.get('swa_session_id'))

  const setAuthCookie = useCallback((session: string) => {
    setAuth(Cookies.set('swa_session_id', session))
  }, [])

  const removeAuthCookie = useCallback(() => {
    Cookies.remove('swa_session_id')
    setAuth(undefined)
  }, [])

  const checkAuth = useCallback(() => {
    authenticateMock(authCookie || '')
      .then(() => true)
      .catch(() => false)
  }, [authCookie])

  return { authCookie, setAuthCookie, removeAuthCookie, checkAuth }
}

export default useAuthCookie

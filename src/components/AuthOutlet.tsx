import { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import useAuthCookie from '@/hooks/useAuthCookie'
import LogutAppBar from '@/components/LogutAppBar'

const AuthOutlet = () => {
  const { authCookie } = useAuthCookie()

  if (!authCookie) return <Navigate to='/' />

  return (
    <>
      <LogutAppBar />
      <Outlet />
    </>
  )
}

export default AuthOutlet

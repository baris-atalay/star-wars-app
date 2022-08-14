import { useEffect, useState } from 'react'
import Login from '@/pages/Login'
import Resource from '@/pages/Resource'
import Detail from '@/pages/Detail'
import ResourceList from '@/pages/ResourceList'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthOutlet from '@/components/AuthOutlet'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<AuthOutlet />}>
        <Route path='/resources' element={<ResourceList />} />
        <Route path='/resources/:resourceName' element={<Resource />} />
        <Route path='/resources/:resourceName/:resourceId' element={<Detail />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App

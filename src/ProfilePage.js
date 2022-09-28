import React from 'react'

import { useAuth } from './auth'

export const ProfilePage = () => {
  const auth = useAuth();

  console.log(auth)

  return (
    <>
      <h1>Bienvenido, { auth.user.username }</h1>
    </>
  )
}

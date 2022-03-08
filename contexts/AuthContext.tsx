import { createContext, useEffect, useState } from 'react'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { api } from '../services/api'
import { AxiosResponse } from 'axios'

interface User {
  [key: string]: any
}

type SignInData = {
  username: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInData) => Promise<void>
  singOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }:any) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  // useEffect(() => {
  //   const { 'vonborsteltoken.token': token } = parseCookies()

  //   if (token) {
  //     api.post('/users/get-user-info').then((response:AxiosResponse) => {
  //       setUser(response.data)
  //     })
  //   }
  // }, [])

  async function signIn({ username, password }: SignInData) {
    const response = await api.post('/users/custom-login', {
      username: username,
      password: password,
    })

    setCookie(undefined, 'vonborsteltoken.token', response.data.id, {
      maxAge: 60 * 60 * 60 * 1, // 1 day
    })

    api.defaults.headers['X-Access-Token'] = response.data.id

    setUser(response.data.user)

    Router.push('/home')
  }

  function singOut() {
    destroyCookie(undefined, 'vonborsteltoken.token')
    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, singOut }}>
      {children}
    </AuthContext.Provider>
  )
}

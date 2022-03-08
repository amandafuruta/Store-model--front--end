import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: GetServerSidePropsContext) {
  const { 'vonborsteltoken.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://vonborstel-admin.letscomunica.com.br/api/',
  })

  api.interceptors.request.use((config) => {
    if (token && config && config.headers) {
      config.headers['X-Access-Token'] = token
    }
    console.log(config)
    return config
  })

  if (token) {
    api.defaults.headers['X-Access-Token'] = token
  }

  return api
}

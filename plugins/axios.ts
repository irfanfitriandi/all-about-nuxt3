import axios from 'axios'

export default defineNuxtPlugin((_nuxtApp) => {
  axios.defaults.withCredentials = false
  //   axios.defaults.baseURL = 'https://biroperjalanan.datacakra.com/api'

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxNjgxM2M5LTM5ZDEtNDgyOC04NzM2LTdlNTFhYjA2NjMxMiIsImVtYWlsIjoidGVzQG1haWwuY29tIiwibmFtZSI6InRlcyIsImlhdCI6MTcwOTUzMjg0OSwiZXhwIjoxNzA5NjE5MjQ5fQ.6BhC1z5Tr7cmJW5Ai7TcyYsXOjkCN2kYbqCt5GWEbKQ'
  axios.defaults.headers.common.Authorization = 'Bearer ' + token
  return {
    provide: {
      axios,
    },
  }
})

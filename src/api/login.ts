const userMock = {
  email: 'admin@example.com',
  password: 'admin',
}

export const authenticateMock = (session: string) => {
  const userSession = btoa(`${userMock.email}:${userMock.password}`)
  return new Promise((resolve, reject) => {
    userSession === session ? resolve('session authenticated') : reject('session invalid')
  })
}

export const loginMock = (email: string, password: string) => {
  return new Promise<string>((resolve, reject) => {
    if (userMock.email === email && userMock.password === password) {
      resolve(btoa(`${userMock.email}:${userMock.password}`))
    } else {
      reject('Email or password is invalid.')
    }
  })
}

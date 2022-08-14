import { useState } from 'react'
import { Container, Box, Typography, TextField, Button, Alert, Grow } from '@mui/material'
import { loginMock } from '@/api/login'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    const data = new FormData(event.currentTarget)

    try {
      const loginSession = await loginMock(
        data.get('email') as string,
        data.get('password') as string,
      )

      Cookies.set('swa_session_id', loginSession)

      navigate('/resources')
    } catch (error) {
      setError(error as string)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        {}
        <Box height={'48px'} mt={1}>
          <Grow in={!!error}>
            <Alert severity='error'>{error}</Alert>
          </Grow>
        </Box>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='password'
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login

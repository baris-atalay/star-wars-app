import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import useAuthCookie from '@/hooks/useAuthCookie'
import { useNavigate } from 'react-router-dom'

const LogutAppBar = () => {
  const { removeAuthCookie } = useAuthCookie()
  const navigate = useNavigate()

  const handleLogout = () => {
    removeAuthCookie()
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            May the Force be with you
          </Typography>
          <Button color='inherit' onClick={handleLogout}>
            Logut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default LogutAppBar

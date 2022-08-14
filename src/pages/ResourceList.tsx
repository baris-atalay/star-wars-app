import { useQuery } from '@tanstack/react-query'
import { getResourceList } from '@/api'
import { Container, List, ListItem, ListItemText, Typography, Box, Fade } from '@mui/material'
import { Link } from 'react-router-dom'

const ResourceList = () => {
  const { data: resourceList } = useQuery<Record<string, string>>(['resources'], getResourceList)

  return (
    <Container component='main' maxWidth='md'>
      <Box my={4}>
        <Typography variant='h2' component='h1' mt={4}>
          Star Wars Resources
        </Typography>
        <Fade in={!!resourceList} timeout={500}>
          <List>
            {resourceList &&
              Object.keys(resourceList).map((resource) => (
                <ListItem key={resource} button component={Link} to={resource}>
                  <ListItemText primary={resource} />
                </ListItem>
              ))}
          </List>
        </Fade>
      </Box>
    </Container>
  )
}

export default ResourceList

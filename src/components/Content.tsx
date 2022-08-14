import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { List, ListItem, ListItemText, Typography, Button, Box, Container } from '@mui/material'
import { ResourcesEnum, ResourceUnion } from '@/types/resources'
import { requestResource } from '@/api'
import cleanAttribute from '@/utils/cleanAttribute'

type Params = {
  resourceName: ResourcesEnum.Planets
  resourceId: string
}

const Content = () => {
  const { resourceName, resourceId } = useParams<Params>()

  const { data: resourceData } = useQuery([resourceName, resourceId], () =>
    requestResource<ResourceUnion>(resourceName, resourceId),
  )

  const title = useMemo(
    () =>
      (resourceData && 'name' in resourceData && resourceData.name) ||
      (resourceData && 'title' in resourceData && resourceData.title) ||
      '',
    [resourceData],
  )

  const attributes = useMemo<[string, string][]>(
    () => Object.entries(resourceData || {}).filter(([key, value]) => typeof value === 'string'),
    [resourceData],
  )

  // TODO: Loop all related data
  //
  //   const relatedAttributes = useMemo<[string, string][]>(
  //     () => Object.entries(resourceData || {}).filter(([key, value]) => typeof value !== 'string'),
  //     [resourceData],
  //   )

  return (
    <Container component='main' maxWidth='md'>
      <Box my={4}>
        <Typography variant='h2' component='h1' mt={4}>
          {title}
        </Typography>
        <List>
          {attributes.map(([attribute, value]) => {
            return (
              <ListItem key={attribute}>
                <ListItemText primary={cleanAttribute(attribute)} secondary={value} />
              </ListItem>
            )
          })}
        </List>
        <Box textAlign='center'>
          <Button size='large' variant='contained' sx={{ mt: 3, mb: 3 }}>
            <Link to={`/resources/${resourceName}`}>Back to {resourceName}</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Content

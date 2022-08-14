import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Box,
  TextField,
  Fade,
} from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ResourcesType } from '@/types/resources'
import useQueryResourceList from '@/hooks/useQueryResourceList'
import { useDebounce } from 'use-debounce'

type Params = {
  resourceName: ResourcesType
}

const Resource = () => {
  const { resourceName } = useParams<Params>()
  const [search, setSearch] = useState('')
  const [searchDebounce] = useDebounce(search, 600)

  const resourceResult = useQueryResourceList(resourceName, !!resourceName)
  const searchResult = useQueryResourceList(
    `${resourceName}?search=${searchDebounce}`,
    !!searchDebounce,
  )

  const {
    data: resourceList,
    fetchNextPage,
    hasNextPage,
  } = useMemo(
    () => (searchDebounce ? searchResult : resourceResult),
    [searchDebounce, resourceResult, searchResult],
  )

  const loadMore = () => fetchNextPage()

  const title = useMemo(
    () => (resourceName || '')?.charAt(0).toUpperCase() + (resourceName || '')?.slice(1),
    [resourceName],
  )

  return (
    <Container component='main' maxWidth='md'>
      <Box my={4}>
        <Typography variant='h2' component='h1' mt={4}>
          {title}
        </Typography>
        <Fade in={!!resourceList.pages} timeout={500}>
          <Box>
            <Box component='form' my={4}>
              <TextField
                id='outlined-required'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                label='Search'
                placeholder='Type Something...'
                fullWidth
              />
            </Box>
            <List>
              {resourceList.pages &&
                resourceList.pages?.map((resourcePage) =>
                  resourcePage.results.map((resource) => {
                    // Fixing union type mismatch warning
                    const resourceTitle =
                      ('name' in resource && resource?.name) ||
                      ('title' in resource && resource?.title) ||
                      ''

                    let resourceUrl = new URL(resource.url).pathname.split('/').slice(-2, -1)[0]

                    return (
                      <ListItem
                        key={resourceTitle}
                        button
                        component={Link}
                        to={`/resources/${resourceName}/${resourceUrl}`}
                      >
                        <ListItemText primary={resourceTitle} />
                      </ListItem>
                    )
                  }),
                )}
            </List>
            <Box textAlign='center'>
              <Button
                disabled={!hasNextPage}
                onClick={loadMore}
                size='large'
                variant='contained'
                startIcon={<ExpandMoreIcon />}
                sx={{ mt: 3, mb: 3 }}
              >
                Load More
              </Button>
            </Box>
            <Box textAlign='center'>
              <Button
                variant='outlined'
                size='large'
                startIcon={<ArrowBackOutlinedIcon />}
                component={Link}
                to='/resources'
                sx={{ mt: 3, mb: 3 }}
              >
                Back to List
              </Button>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Container>
  )
}

export default Resource

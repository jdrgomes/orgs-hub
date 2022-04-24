import { Container, Heading, List } from 'src/components'

import { useOrgs } from 'src/hooks'

import { Grid } from './style'

export function Home() {
  const { orgs, loading } = useOrgs()

  return (
    <Container>
      {loading ? (
        'loading...'
      ) : (
        <>
          <Heading title="Organizations" description="lorem ipsum" />
          <Grid>
            <List orgs={orgs} />
          </Grid>
        </>
      )}
    </Container>
  )
}

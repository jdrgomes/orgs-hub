import { Container, Heading, List } from 'src/components'

import { useOrgs } from 'src/hooks'

export function Home() {
  const { orgs, loading } = useOrgs()

  return (
    <Container>
      {loading ? (
        'loading...'
      ) : (
        <>
          <Heading title="Organizations" description="lorem ipsum" />
          <List orgs={orgs} />
        </>
      )}
    </Container>
  )
}

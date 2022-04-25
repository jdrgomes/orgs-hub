import { Container, Loading, List } from 'src/components'

import { useOrgs } from 'src/hooks'

import { HomeWrapper, Title, Description } from './style'

export function Home() {
  const { orgs, loading } = useOrgs()

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HomeWrapper>
            <Title>Organizations</Title>
            <Description>
              are shared accounts where businesses and open-source projects can
              collaborate across many projects at once.
            </Description>
          </HomeWrapper>

          <Container>
            <List orgs={orgs} />
          </Container>
        </>
      )}
    </main>
  )
}

import { useParams } from 'react-router-dom'
import { Container, Heading } from 'src/components'

import { useOrgsDetails } from 'src/hooks'

export function OrgDetail() {
  const { org = '' } = useParams()
  const { orgsDetails, loading } = useOrgsDetails(org)

  return (
    <Container>
      {loading ? (
        'loading...'
      ) : (
        <>
          <Heading title="Organization Detail" />
          <div>assdsd</div>
        </>
      )}
    </Container>
  )
}

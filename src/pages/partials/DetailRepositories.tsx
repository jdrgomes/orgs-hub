import { OrgRepo } from 'src/types'
import { Container, CardRepository } from 'src/components'

import { DetailRepoTitle } from '../style'

type DetailRepoProps = {
  orgsRepositories: OrgRepo[]
}

export function DetailRepositories({ orgsRepositories }: DetailRepoProps) {
  return (
    <Container>
      <DetailRepoTitle>
        {orgsRepositories ? 'Popular repositories' : 'No repositories'}
      </DetailRepoTitle>

      <CardRepository orgsRepositories={orgsRepositories} />
    </Container>
  )
}

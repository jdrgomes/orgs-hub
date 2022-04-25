import { useParams } from 'react-router-dom'

import { useOrgsDetails, useOrgsRepositories } from 'src/hooks'
import { OrgDetail, OrgRepo } from 'src/types'

import { DetailHeader } from './partials/DetailHeader'

import { DetailRepositories } from './partials/DetailRepositories'

export function Detail() {
  const { org = '' } = useParams()
  const { orgsDetails, loading } = useOrgsDetails(org)
  const { orgsRepositories, loading: reposLoading } = useOrgsRepositories(org)

  return (
    <div>
      {loading || reposLoading ? (
        'loading...'
      ) : (
        <>
          <DetailHeader orgsDetails={orgsDetails as OrgDetail} />
          <DetailRepositories
            orgsRepositories={orgsRepositories as OrgRepo[]}
          />
        </>
      )}
    </div>
  )
}

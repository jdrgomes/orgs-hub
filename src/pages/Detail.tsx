import { useParams } from 'react-router-dom'

import { OrgHeader } from 'src/components'

import { useOrgsDetails } from 'src/hooks'
import { OrgDetail } from 'src/types'

export function Detail() {
  const { org = '' } = useParams()
  const { orgsDetails, loading } = useOrgsDetails(org)

  return (
    <div>
      {loading ? (
        'loading...'
      ) : (
        <OrgHeader orgsDetails={orgsDetails as OrgDetail} />
      )}
    </div>
  )
}

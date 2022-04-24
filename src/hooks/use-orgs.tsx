import { useState, useEffect } from 'react'

import { getAllOrgs, getOrgDetail } from 'src/services'
import { Organization, OrgDetail } from 'src/types'

export function useOrgs() {
  const [orgs, setOrgs] = useState<Organization[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getAllOrgs()
      .then(data => {
        setOrgs(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err.message)
        setLoading(false)
      })
  }, [])

  return {
    orgs,
    loading,
  }
}

export function useOrgsDetails(orgName: string) {
  const [orgsDetails, setOrgsDetails] = useState<OrgDetail>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getOrgDetail(orgName)
      .then(data => {
        setOrgsDetails(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err.message)
        setLoading(false)
      })
  }, [orgName])

  return {
    orgsDetails,
    loading,
  }
}

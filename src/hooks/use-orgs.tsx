import { useState, useEffect } from 'react'

import { getAllOrgs, getOrgDetail, getOrgRepositories } from 'src/services'
import { Organization, OrgDetail, OrgRepo } from 'src/types'

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

export function useOrgsRepositories(orgName: string) {
  const [orgsRepositories, setOrgsRepositories] = useState<OrgRepo[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getOrgRepositories(orgName)
      .then(data => {
        setOrgsRepositories(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err.message)
        setLoading(false)
      })
  }, [orgName])

  return {
    orgsRepositories,
    loading,
  }
}

import React from 'react'
import { Link } from 'react-router-dom'

import { Organization } from 'src/types'

import { Grid } from '../../pages/style'
import { Card } from '../Card/Card'

type ListProps = {
  orgs: Organization[]
}

export function List({ orgs }: ListProps) {
  const sortOrgs = (data: Organization[]) =>
    data.sort((a, b) => a.login.localeCompare(b.login))

  return (
    <Grid>
      {sortOrgs(orgs).map((org: Organization) => (
        <Link
          to={`detail/${org.login}`}
          key={org.id}
          style={{ textDecoration: 'none' }}
        >
          <Card
            user={org.login}
            avatar={org.avatar_url}
            description={org.description}
          />
        </Link>
      ))}
    </Grid>
  )
}

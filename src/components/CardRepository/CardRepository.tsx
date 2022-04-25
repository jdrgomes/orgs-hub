import { OrgRepo } from 'src/types'
import { StarIcon, ForkIcon } from 'src/assets'

import { Grid } from 'src/pages/style'
import {
  CardRepo,
  RepoHeader,
  RepoDescription,
  RepoFooterInfo,
  RepoFooter,
} from './style'

type CardRepositoryProps = {
  orgsRepositories: OrgRepo[]
}

export function CardRepository({ orgsRepositories }: CardRepositoryProps) {
  return (
    <Grid>
      {orgsRepositories?.map((repo: OrgRepo) => (
        <CardRepo key={repo.id}>
          <RepoHeader>
            <h2 className="repo-name">{repo.name}</h2>
            <span className="repo-label">Public</span>
          </RepoHeader>
          <RepoDescription>{repo.description}</RepoDescription>

          <RepoFooter>
            {repo.language && (
              <RepoFooterInfo>
                <span className="lang-circle" />
                {repo.language}
              </RepoFooterInfo>
            )}

            <RepoFooterInfo>
              <StarIcon />
              {repo.stargazers_count}
            </RepoFooterInfo>
            <RepoFooterInfo>
              <ForkIcon />
              {repo.forks_count}
            </RepoFooterInfo>
          </RepoFooter>
        </CardRepo>
      ))}
    </Grid>
  )
}

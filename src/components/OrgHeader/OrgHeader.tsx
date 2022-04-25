import { Container } from 'src/components'
import { OrgDetail } from 'src/types'

import { LocationIcon, BlogIcon, EmailIcon } from 'src/assets'

import {
  Wrapper,
  OrgHeaderElements,
  Avatar,
  DetailOrgName,
  DetailOrgDescription,
  DetailsAddtionalInfos,
} from './style'

type OrgHeaderProps = {
  orgsDetails: OrgDetail
}

export function OrgHeader({ orgsDetails }: OrgHeaderProps) {
  return (
    <div>
      <Wrapper>
        <Container>
          <OrgHeaderElements>
            <div>
              <Avatar
                src={orgsDetails?.avatar_url}
                alt="organization avatar image"
              />
            </div>

            <div>
              <DetailOrgName>
                {orgsDetails?.name || orgsDetails?.login}
              </DetailOrgName>
              <DetailOrgDescription>
                {orgsDetails?.description && orgsDetails?.description}
              </DetailOrgDescription>

              <DetailsAddtionalInfos>
                <div className="extra-infos">
                  <LocationIcon />
                  <p>{orgsDetails?.location || 'N/A'}</p>
                </div>
                <div className="extra-infos">
                  <BlogIcon />
                  <p>{orgsDetails?.blog || 'N/A'}</p>
                </div>
                <div className="extra-infos">
                  <EmailIcon />
                  <p>{orgsDetails?.email || 'N/A'}</p>
                </div>
              </DetailsAddtionalInfos>
            </div>
          </OrgHeaderElements>

          {/* <div>
        <div>{`Gists ${orgsDetails?.public_gists || 0}`}</div>
        <div>{`Repositories ${orgsDetails?.public_repos || 0}`}</div>
        <div>{`Followers ${orgsDetails?.followers || 0}`}</div>
        <div>{`Following ${orgsDetails?.following || 0}`}</div>
      </div> */}
        </Container>
      </Wrapper>
    </div>
  )
}

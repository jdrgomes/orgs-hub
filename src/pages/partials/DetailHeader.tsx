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
  ExtraInfos,
} from '../style'

type OrgHeaderProps = {
  orgsDetails: OrgDetail
}

export function DetailHeader({ orgsDetails }: OrgHeaderProps) {
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
                <ExtraInfos>
                  <LocationIcon />
                  <p>{orgsDetails?.location || 'N/A'}</p>
                </ExtraInfos>
                <ExtraInfos>
                  <BlogIcon />
                  <p>{orgsDetails?.blog || 'N/A'}</p>
                </ExtraInfos>
                <ExtraInfos>
                  <EmailIcon />
                  <p>{orgsDetails?.email || 'N/A'}</p>
                </ExtraInfos>
              </DetailsAddtionalInfos>
            </div>
          </OrgHeaderElements>
        </Container>
      </Wrapper>
    </div>
  )
}

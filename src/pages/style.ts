import styled from 'styled-components'

export const HomeWrapper = styled.main`
  background-color: #f6f8fa;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  background: -webkit-linear-gradient(-70deg, #9867f0 0%, #ed4e50 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Source Sans Pro';
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`

export const Description = styled.h2`
  max-width: 47.25rem;
  font-size: 20px;
  font-weight: normal;
  line-height: 32px;
  color: #66717f;
  margin-top: 2rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0 4rem 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const DetailRepoTitle = styled.h1`
  margin: 2rem 0 2rem 0;
  font-size: 16px;
  font-weight: 400;
`

export const Wrapper = styled.section`
  margin: 0;
  padding: 16px 0 16px 0;
  background-color: #f6f8fa;
`

export const OrgHeaderElements = styled.div`
  width: 100%;
  display: flex;
`

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 24px;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

export const DetailOrgName = styled.h1`
  margin: 0.4rem 0;
  font-weight: 600;
  font-size: 24px;
`

export const DetailOrgDescription = styled.p`
  margin-top: 0.5rem;
  color: #75797f;
`

export const DetailsAddtionalInfos = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 0.4rem;

  @media screen and (min-width: 660px) {
    flex-direction: row;
    gap: 1rem;
  }
`

export const ExtraInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin: 0 0 0 0.2rem;
  }
`

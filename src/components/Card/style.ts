import styled from 'styled-components'

export const CardWrapper = styled.div`
  padding: 1.2rem;
  display: flex;
  border: 1px solid;
  border-color: #e7ebee;
  border-radius: 6px;
  font-family: 'Roboto';

  :hover {
    border-color: #9867f0;
  }
`

export const Avatar = styled.img`
  max-width: 3rem;
  border-radius: 0.5rem;
`

export const CardInfos = styled.div`
  margin: 0;
  padding: 0 1rem 0 1rem;
`

export const CardTitle = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: #000;
  font-family: 'Source Sans Pro';
`

export const CardDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
  color: #7a8189;
  font-weight: normal;
  font-family: 'Source Sans Pro';
`

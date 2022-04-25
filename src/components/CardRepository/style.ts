import styled from 'styled-components'

export const CardRepo = styled.div`
  padding: 16px;
  border-color: #e7ebee;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
`

export const RepoHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .repo-name {
    font-weight: 600;
    font-size: 14px;
    color: #0969da;
  }

  .repo-label {
    display: inline-block;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
    color: #616a73;
  }
`

export const RepoDescription = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #57606a;
`

export const RepoFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #616a73;
`

export const RepoFooterInfo = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  font-size: 13px;

  .lang-circle {
    background-color: #eee;
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid #e7ebee;
    border-radius: 50%;
  }
`

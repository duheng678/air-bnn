import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  .logo {
    cursor: pointer;
    color: ${props => props.theme.color.primaryColor};
    margin-left: 24px;
  }
`

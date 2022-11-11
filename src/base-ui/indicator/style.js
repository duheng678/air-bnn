import styled from 'styled-components'

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  .i-content {
    display: flex;

    position: relative;
    transform: transition 200ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`

import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  font-size: 14px;
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    right: 0;
    z-index: 999;
  }

  .content {
    transition: all 200ms ease;
    position: relative;
    background-color: ${props =>
      props.theme.isAlpha ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props =>
      props.theme.isAlpha ? 'rgba(233,233,233,0)' : 'rgba(233,233,233,1)'};
    z-index: 99;
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
  > .cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
  }
`

export const SearchAreaWrapper = styled.div`
  height: ${props => (props.isSearch ? '100px' : '0')};
  transition: height 200ms ease;
`

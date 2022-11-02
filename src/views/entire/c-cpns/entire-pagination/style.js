import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  margin-top: 100px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
      margin: 0 10px;
      &.Mui-selected {
        background-color: #000;
        color: #fff;
      }

      &:hover {
        text-decoration: underline;
      }
    }
    .css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon {
      font-size: 22px;
    }
    .desc {
      margin-top: 16px;
    }
  }
`

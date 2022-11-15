import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  padding-right: 20px;
  color: ${props => (props.theme.isAlpha ? '#fff' : '#484848')};

  .btns {
    display: flex;
    align-items: center;
    .btn {
      height: 18px;
      line-height: 18px;
      box-sizing: content-box;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: ${props => (props.theme.isAlpha ? 'rgba(255,255,255,0.3)' : '#fff')};
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: ${props => props.theme.text.primaryColor};
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
      .top,
      .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding-left: 10px;
          color: #4f4f4f;
          font-weight: 400;
          &:hover {
            background-color: #f7f7f7;
          }
        }
        .register {
          color: #000;
          font-weight: 600;
        }
      }
    }
  }
`

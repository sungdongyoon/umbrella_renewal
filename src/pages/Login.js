import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 40%;
  height: 55%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LoginTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #87C700;
  margin-bottom: 30px;
  h1 {
    font-size: 25px;
  }
`;

const LoginWrap = styled.div`
  border-radius: 5px;
  flex: 6;
  display: flex;
  flex-direction: column;
`;

const SelectMember = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    &:first-child {
      border-bottom: none;
    }
    span {
      font-size: 20px;
    }
  }
`;

const LoginForm = styled.form`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-top: none;
  .loginWrap {
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20%;
    .inputWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 3;
      label {
        width: 20%;
        font-size: 20px;
      }
      input {
        width: 70%;
        height: 70%;
        border: 1px solid #ddd;
        outline: none;
        &:focus {
          border: 2px solid #87C700;
        }
      }
    }
    button {
      flex: 3;
      border: none;
      border-radius: 5px;
      background-color: #87C700;
      color: #fff;
      font-size: 18px;
      letter-spacing: 3px;
      cursor: pointer;
    }
  }
`;

const Join = styled.div`
  position: absolute;
  left: 0;
  bottom: -5%;
  font-size: 12px;
  b {
    color: #87C700;
    font-weight: bold;
    cursor: pointer;
  }
`;

const SearchIdPw = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: -5%;
  font-size: 12px;
  span {
    padding: 0 10px;
    cursor: pointer;
    &:first-child {
      border-right: 1px solid #000;
    }
  }
`;


const Login = () => {
  return (
    <Container>
      <Wrap>
        <LoginTitle>
          <h1>로그인</h1>
        </LoginTitle>
        <LoginWrap>
          <SelectMember>
            <div>
              <span>회원</span>
            </div>
            <div>
              <span>비회원</span>
            </div>
          </SelectMember>
          <LoginForm>
            <div className='loginWrap'>
              <div className='inputWrap'>
                <label for="id">ID</label>
                <input id='id' type='text'/>
              </div>
              <div className='inputWrap'>
                <label for="pw">PW</label>
                <input id='pw' type='password'/>
              </div>
              <button>로그인</button>
            </div>
          </LoginForm>
        </LoginWrap>
        <Join>
          <span>
            아직 회원이 아니신가요? <b>회원가입</b>
          </span>
        </Join>
        <SearchIdPw>
          <span>
            아이디 찾기
          </span>
          <span>
            비밀번호 찾기
          </span>
        </SearchIdPw>
      </Wrap>
    </Container>
  )
}

export default Login;

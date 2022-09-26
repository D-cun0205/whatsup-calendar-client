import React from "react";
import Button from "../button/Button";
import './Login.scss';

const Login = () => {
  return (
    <>
      <div className="temp_place"></div>
      <h1>Whatsup</h1>
      <Button size="medium" color="kakao">카카오 로그인</Button>
      <Button size="medium" color="naver">네이버 로그인</Button>
    </>
  )
}

export default Login;
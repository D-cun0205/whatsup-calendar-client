import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import './Login.scss';

const Login = () => {
  return (
    <>
      <div className="white-space_height_40"></div>
      <h1>Whatsup</h1>
      <div className="white-space_height_20"></div>
        <Link to="/main">
          <Button size="medium" color="kakao">카카오 로그인</Button>
        </Link>
        <div className="margin-top_3">
          <Button size="medium" color="naver">네이버 로그인</Button>
        </div>
    </>
  )
}

export default Login;
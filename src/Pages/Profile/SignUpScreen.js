import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Đăng nhập</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email hoặc số điện thoại"
        ></input>
        <input ref={passwordRef} type="password" placeholder="Mật khẩu"></input>
        <button onClick={signIn} type="submit">
          Đăng nhập
        </button>
        <h4>
          <span className="signupScreen__gray">Bạn mới tham gia Netflix? </span>
          <span onClick={register} className="signupScreen__link">
            Đăng ký ngay.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;

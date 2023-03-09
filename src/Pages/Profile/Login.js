import React, { useState } from "react";
import "./Login.css";
import SignupScreen from "./SignUpScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <div className="btn">
          <button className="loginScreen__button">Tiếng Việt</button>
          <button className="loginScreen__button">Đăng Nhập</button>
        </div>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>
              Chương trình truyền hình, phim không giới hạn và nhiều nội dung
              khác.
            </h1>
            <h2>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h2>
            <p>
              Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
              cách thành viên của bạn.
            </p>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Địa chỉ email"></input>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Bắt đầu
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;

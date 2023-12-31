import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../store/slices/loader.slice";

function LoginCard() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [infoFalse, setInfoFalse] = useState(true);
  const [isViewPassword, setIsViewPassword] = useState(false);

  const submit = (data) => {
    axios
      .post(
        `https://concesionarioback-production.up.railway.app/api/v1/auth/login`,
        data
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(setLoading(true));
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response);
        setInfoFalse(false);
      });
  };

  return (
    <form className="loginCard" onSubmit={handleSubmit(submit)}>
      <div className="loginCard__img">
        <img
          src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000"
          alt="user"
        />
      </div>
      <p className="warning">We'll never share your email with anyone else.</p>

      <div className="loginCard__inputs">
        <div className="loginCard__inputs--container">
          <label>Email</label>
          <div className="input">
            <input
              type="email"
              placeholder="Enter email"
              required
              {...register("email")}
            />
          </div>
        </div>

        <div className="loginCard__inputs--container">
          <label>Password</label>
          <div className="input">
            <input
              type={isViewPassword ? "text" : "password"}
              placeholder="Enter password"
              required
              {...register("password")}
            />

            <p>
              {isViewPassword ? (
                <i
                  className="fa-solid fa-eye-slash"
                  onClick={() => setIsViewPassword(!isViewPassword)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye"
                  onClick={() => setIsViewPassword(!isViewPassword)}
                ></i>
              )}
            </p>
          </div>
        </div>
        {!infoFalse && <p className="incorrect">Incorrect email or password</p>}
      </div>

      <button className="loginCard__button" variant="primary" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginCard;

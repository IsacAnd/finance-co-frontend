import "../styles/register.css";
import templateImg from "../public/img/template-logo.png";
import backButton from "../public/img/circle-arrow-left-solid.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../services/authService";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.confirmPassword !== formData.password) return;

      const resp = await authService.register(formData);

      if (resp.error) return;

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="template-container">
        <img src={templateImg} alt="template-logo" />
      </div>
      <a id="backtologin" onClick={() => navigate("/login")}>
        <img src={backButton} alt="" />
      </a>
      <img src="../img/financeco-svg.png" alt="" />
      <div className="register-box">
        <h2>Cadastre-se</h2>
        <div className="input-container">
          <p>Usuário</p>
          <input
            className="register-input"
            type="text"
            name="username"
            id="user-input"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <p>Email</p>
          <input
            className="register-input"
            type="text"
            name="email"
            id="email-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <p>Senha</p>
          <input
            className="register-input password-input"
            type="password"
            name="password"
            id="password-input"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <p>Confime sua senha</p>
          <input
            className="register-input password-input"
            type="password"
            name="confirmPassword"
            id="confirm-password-input"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="remind-me">
          <input type="checkbox" id="remindme" />
          <p>Lembrar de mim</p>
        </div>
        <input
          type="submit"
          name="register"
          id="register-submit"
          value="Cadastrar"
          onClick={handleSubmit}
        />
        <a onClick={() => navigate("/login")} id="login-link">
          Já possui uma conta? Clique aqui
        </a>
      </div>
    </div>
  );
}

export default Register;

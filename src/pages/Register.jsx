import "../styles/register.css";
import templateImg from "../public/img/template-logo.png";
import backButton from "../public/img/circle-arrow-left-solid.svg";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="template-container">
        <img src={templateImg} alt="template-logo" />
      </div>
      <a href="./login.html" id="backtologin">
        <img src={backButton} alt="" />
      </a>
      <img src="../img/financeco-svg.png" alt="" />
      <div className="register-box">
        <h2>Cadastre-se</h2>
        <div className="input-container">
          <p>Usuário</p>
          <input
            className="register-input"
            clclassNameass="register-input"
            type="text"
            name="user"
            id="user-input"
          />
        </div>
        <div className="input-container">
          <p>Email</p>
          <input
            className="register-input"
            type="text"
            name="user"
            id="email-input"
          />
        </div>
        <div className="input-container">
          <p>Senha</p>
          <input
            className="register-input"
            type="password"
            name="user-password"
            id="password-input"
          />
        </div>
        <div className="input-container">
          <p>Confime sua senha</p>
          <input
            className="register-input"
            type="password"
            name="user-password-confirm"
            id="password-input"
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
          onclick="register()"
        />
        <a onClick={() => navigate("/login")} id="login-link">
          Já possui uma conta? Clique aqui
        </a>
      </div>
    </div>
  );
}

export default Register;

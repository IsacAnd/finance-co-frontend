import "../styles/login.css";
import financoLogo from "../public/img/financeco-svg.png";
import templateImg from "../public/img/template-logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container-login">
      <div className="login-template-container">
        <img src={templateImg} alt="template logo" />
      </div>
      <div className="login-container">
        <img src={financoLogo} alt="" />
        <div className="login-box">
          <h2>Login</h2>
          <div className="login-input-container">
            <p>Usuário</p>
            <input
              className="login-input"
              type="text"
              name="user"
              id="user-input"
              placeholder="Digite o seu nome de usuário"
            />
          </div>
          <div className="login-input-container">
            <p>Senha</p>
            <input
              className="login-input"
              type="password"
              name="user-password"
              id="password-input"
              placeholder="Digite a sua senha"
            />
          </div>
          <div className="remind-me">
            <input type="checkbox" id="remindme" />
            <p>Lembrar de mim</p>
          </div>
          <input type="submit" name="login" id="login-submit" value="Entrar" />
          <a onClick={() => navigate("/register")} id="register-link">
            Criar uma conta
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

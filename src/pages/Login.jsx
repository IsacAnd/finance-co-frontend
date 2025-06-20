import "../styles/login.css";
import financoLogo from "../public/img/financeco-svg.png";
import templateImg from "../public/img/template-logo.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import authService from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { ToastContext } from "../context/ToastContext";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await authService.login(formData);

      if (token.message) {
        showToast("Credenciais inválidas", "fail");
        return;
      }

      login(token);
      showToast("Logado com sucesso!", "success");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || error.message || "Erro no login";
      showToast(errorMessage, "fail");
      console.error(error);
    }
  };

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
            <p>Email</p>
            <input
              className="login-input"
              type="text"
              name="email"
              id="user-input"
              placeholder="Digite o seu email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="login-input-container">
            <p>Senha</p>
            <input
              className="login-input password-input"
              type="password"
              name="password"
              id="password-input"
              placeholder="Digite a sua senha"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="login-remind-me">
            <input type="checkbox" id="remindme" />
            <p>Lembrar de mim</p>
          </div>
          <input
            onClick={handleSubmit}
            type="submit"
            name="login"
            id="login-submit"
            value="Entrar"
          />
          <a onClick={() => navigate("/register")} id="register-link">
            Criar uma conta
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

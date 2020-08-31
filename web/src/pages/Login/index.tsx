import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import "./styles.css";

import HeartIcon from "../../assets/images/icons/purple-heart.svg";
import eyeIcon from "../../assets/images/icons/eye.svg";
import notEyeIcon from "../../assets/images/icons/not-eye.svg";
import PageLogo from "../../components/PageLogo";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [typePass, setTypePass] = useState("password");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function toogleTypePass() {
    setTypePass(typePass === "password" ? "text" : "password");
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (!email || !pass) {
      return alert("Preencha todos os campos!");
    }

    await signIn(email, pass);
  }

  return (
    <div id="box-login">
      <PageLogo />
      <div className="login">
        <div className="form-login">
          <form onSubmit={handleLogin}>
            <fieldset>
              <legend>Fazer login</legend>
              <div className="input-block-login">
                <label htmlFor="email" className={email && "onValue"}>
                  E-mail
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  className="first"
                />
              </div>
              <div className="input-block-login">
                <label htmlFor="password" className={pass && "onValue"}>
                  Senha
                </label>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type={typePass}
                  name="password"
                  className="last"
                />
                <img
                  src={typePass === "password" ? eyeIcon : notEyeIcon}
                  onClick={toogleTypePass}
                  alt="Ver Senha"
                />
              </div>
              <div className="more-info">
                <div className="check-box">
                  <input
                    type="checkbox"
                    name="check-box-input"
                    checked
                    id="check-box-input"
                  />
                  <label htmlFor="check-box-input">Lembrar-me</label>
                </div>
                <Link to="forgot-password">Esqueci minha senha</Link>
              </div>
              <input type="submit" value="Entrar" />
            </fieldset>
          </form>
        </div>

        <footer>
          <p>
            Não tem conta? <Link to="/signup">Cadastre-se</Link>
          </p>
          <span>
            É de graça <img src={HeartIcon} alt="" />
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Login;

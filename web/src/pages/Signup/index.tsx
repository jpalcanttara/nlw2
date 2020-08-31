import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import eyeIcon from "../../assets/images/icons/eye.svg";
import backIcon from "../../assets/images/icons/back-purple.svg";
import notEyeIcon from "../../assets/images/icons/not-eye.svg";
import api from "../../services/api";
import PageSuccess from "../../components/PageSuccess";
import PageLogo from "../../components/PageLogo";

const Signup: React.FC = () => {
  const [typePass, setTypePass] = useState("password");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [success, setSuccess] = useState(false);

  function toogleTypePass() {
    setTypePass(typePass === "password" ? "text" : "password");
  }

  async function handleCreateUser(e: FormEvent) {
    e.preventDefault();

    if (!name || !email || !pass || !lastName) {
      return alert("Preencha todos os campos");
    }

    try {
      await api.post("users", {
        email,
        name,
        last_name: lastName,
        password: pass,
      });

      setSuccess(true);
    } catch (error) {
      alert("Algo deu errado!");
    }
  }
  return !success ? (
    <div id="box-signup">
      <div className="signup">
        <header>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        </header>
        <div className="form-login">
          <form onSubmit={handleCreateUser}>
            <fieldset>
              <legend>Cadastro</legend>
              <p>Preencha os dados abaixo para começar</p>
              <div className="input-block-login">
                <label htmlFor="name" className={name && "onValue"}>
                  Nome
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="first"
                />
              </div>
              <div className="input-block-login">
                <label htmlFor="lastName" className={lastName && "onValue"}>
                  Sobrenome
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="lastname"
                />
              </div>
              <div className="input-block-login">
                <label htmlFor="email" className={email && "onValue"}>
                  E-mail
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
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
              <input type="submit" value="Concluir cadastro" />
            </fieldset>
          </form>
        </div>
      </div>
      <PageLogo />
    </div>
  ) : (
    <PageSuccess
      title="Cadastro concluído"
      text="Agora agora você faz parte da plataforma Proffy. Tenha uma ótima experiência."
      button={<Link to="/Login">Fazer Login</Link>}
    />
  );
};

export default Signup;

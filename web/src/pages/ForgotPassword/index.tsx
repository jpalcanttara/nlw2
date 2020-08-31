import React, { useState } from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back-purple.svg";
import PageLogo from "../../components/PageLogo";

import "./styles.css";
import PageSuccess from "../../components/PageSuccess";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  return !success ? (
    <div id="forgot-pass">
      <div className="forgot">
        <header>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        </header>
        <form>
          <fieldset>
            <legend>Eita, esqueceu sua senha?</legend>
            <p>Não esquenta, vamos dar um geito nisso.</p>
            <div className="input-block-forgot">
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
            <input type="submit" disabled={email.length < 9} />
          </fieldset>
        </form>
      </div>
      <PageLogo />
    </div>
  ) : (
    <PageSuccess
      title="Redefinição enviada!"
      text="Boa, agora é só checar o e-mail que foi enviado para você
  redefinir sua senha e aproveitar os estudos."
      button={<Link to="/">Voltar ao login</Link>}
    />
  );
};

export default ForgotPassword;

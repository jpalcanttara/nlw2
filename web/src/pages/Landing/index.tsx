import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import SairIcon from "../../assets/images/icons/sair-icon.svg";

import "./styles.css";

const userDefaut = {
  avatar: "",
  name: "",
  bio: "",
  email: "",
  id: 1,
  last_name: "",
  whatsapp: null,
};

const Landing: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();
  const [totalConnections, settotalConnections] = useState(0);
  const [user, setUser] = useState(userDefaut);

  useEffect(() => {
    const user = localStorage.getItem("@Proffy:user");
    user && setUser(JSON.parse(user));
    api
      .get("connections")
      .then((response) => {
        const { total } = response.data;
        settotalConnections(total);
      })
      .catch((err) => console.log(err));
  }, []);

  function goToProfile() {
    history.push("/profile");
  }

  return (
    <div id="page-landing">
      <header>
        <div id="profile-info" onClick={goToProfile}>
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <div className="avatar-none">
              {user.name.substring(1, 0)}
              {user.last_name.substring(1, 0)}
            </div>
          )}
          <span>{`${user.name} ${user.last_name}`}</span>
        </div>
        <img src={SairIcon} onClick={signOut} alt="Logout" />
      </header>
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
      </div>
      <main>
        <p>
          Seja bem-vindo.<strong>O que deseja fazer?</strong>
        </p>
        <span className="total-connections desktop">
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections mobile">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </main>
    </div>
  );
};

export default Landing;

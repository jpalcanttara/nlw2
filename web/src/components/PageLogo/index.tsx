import React from "react";

import LogoImg from "../../assets/images/logo.svg";

import "./styles.css";

const PageLogo: React.FC = () => {
  return (
    <div className="logo">
      <div className="content-logo">
        <img src={LogoImg} alt="Proffy" />
        <p>Sua plataforma de estudos online.</p>
      </div>
    </div>
  );
};

export default PageLogo;

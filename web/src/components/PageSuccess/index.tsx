import React, { ReactNode } from "react";

import successImg from "../../assets/images/icons/success-check-icon.svg";

import "./styles.css";

interface PageSuccessProps {
  title: string;
  text: string;
  button: ReactNode;
}

const PageSuccess: React.FC<PageSuccessProps> = ({ title, text, button }) => {
  return (
    <div id="page-success">
      <img src={successImg} alt="Imagem de sucesso" />
      <h1>{title}</h1>
      <p>{text}</p>
      {button}
    </div>
  );
};

export default PageSuccess;

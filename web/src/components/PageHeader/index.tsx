import React from "react";

import { Link, useHistory } from "react-router-dom";

import logoImg from "../../assets/images/logo-purple.svg";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  page: string;
  title?: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
  page,
}) => {
  const { goBack } = useHistory();
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <img src={backIcon} onClick={goBack} alt="Voltar" />
        <span>{page}</span>
        <Link to="/">
          <img src={logoImg} alt="Proffy" />
        </Link>
      </div>
      <div className="header-content">
        {title && <strong>{title}</strong>}
        {description && <p>{description}</p>}

        {children}
      </div>
    </header>
  );
};

export default PageHeader;

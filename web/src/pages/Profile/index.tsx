import React from "react";
import PageHeader from "../../components/PageHeader";

import cameraIcon from "../../assets/images/icons/camera.svg";

import "./styles.css";

const Profile: React.FC = () => {
  return (
    <div id="profile">
      <PageHeader page="Meu perfil">
        <div className="profile-content-center">
          <div className="avatar-change">
            <img
              src="https://pbs.twimg.com/profile_images/1168849079398522880/WFV1kd3G_400x400.jpg"
              alt="avatar"
            />
            <button>
              <img src={cameraIcon} alt="Adicionar Foto" />
            </button>
          </div>
        </div>
        <div className="profile-name">
          <h2>Jon Gonçalves</h2>
          <span>Matemática</span>
        </div>
      </PageHeader>
    </div>
  );
};

export default Profile;

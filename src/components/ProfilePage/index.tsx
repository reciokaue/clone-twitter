import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed/index'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Kaue Recio</h1>
        <h2>@kaue_recio</h2>

        <p>
          Developer at <a href="#"> any company</a>, still
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Sorocaba SP, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 18 de junho de 2004
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>000</strong>
          </span>
          <span>
            <strong>000 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  );
}

export default ProfilePage;
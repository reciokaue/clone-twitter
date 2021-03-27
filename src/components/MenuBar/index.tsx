import React from 'react';

import Button from '../Button'

import { 
  Container,
  Topside,
  Logo,
  MenuButtons,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo/>

        <MenuButtons>
            <HomeIcon/>
            <span>Pagina Inicial</span>
        </MenuButtons>

        <MenuButtons>
            <BellIcon/>
            <span>Notificacoes</span>
        </MenuButtons>
        
        <MenuButtons>
            <EmailIcon/>
            <span>Mensagens</span>
        </MenuButtons>
        
        <MenuButtons>
            <FavoriteIcon/>
            <span>Favoritados</span>
        </MenuButtons>

        <MenuButtons className="active">
            <ProfileIcon/>
            <span>Perfil</span>
        </MenuButtons>
        
        <Button>
          <span>Tweetar</span>
        </Button>

      </Topside>

      <Botside>
        <Avatar/>

        <ProfileData>
          <strong>Kaue Recio</strong>
          <span>@Kaue_Recio</span>
          
          <ExitIcon/>
        </ProfileData>

      </Botside>
    </Container>
  );
}

export default MenuBar;
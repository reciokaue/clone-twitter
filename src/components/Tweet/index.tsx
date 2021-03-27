import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
  RetweetIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/>
        Voce retweetou
      </Retweeted>
      <Body>
        <Avatar/>

        <Content>

          <Header>
            <strong>Kaue Recio</strong>
            <span>@Kaue_Recio</span>
            <Dot/>
            <time>00/00/0000</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon/>
              000
            </Status>
            <Status>
              <RetweetIcon/>
              000
            </Status>
            <Status>
              <LikeIcon/>
              000
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
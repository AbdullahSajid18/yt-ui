import React from 'react'
import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Card from '../components/Card'
import Comments from '../components/Comments';

const Container = styled.div`
 display: flex;
 gap: 24px;
`;

const Content = styled.div`
 flex: 5;
`;
const VideoWrapper = styled.div`
 
`;

const Title = styled.h1`
 font-size: 18px;
 font-weight: 400;
 margin-top: 20px;
 margin-bottom: 10px;
 color: ${({theme})=> theme.text}
`;

const Details = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

const Info = styled.span`
 color: ${({theme})=> theme.textSoft}
`;

const Buttons = styled.div`
 display: flex;
 gap: 20px;
 color: ${({theme}) => theme.text};
`;

const Hr = styled.hr`
 border: 0.5px solid ${({theme}) => theme.soft};
`;

const Button = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 cursor: pointer;
`;

const Recommendation = styled.div`
 flex: 2;
`;

const Channel = styled.div `
 display: flex;
 justify-content: space-between;
 margin-top: 10px;
`;

const ChannelInfo = styled.div`
 display: flex;
 gap: 20px;
`;

const Image = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;
`;

const ChannelDetail = styled.div`
 display: flex;
 flex-direction: column;
 color: ${({theme})=> theme.text};
`;

const ChannelName = styled.span`
 font-weight: 500;
`;

const ChannelCounter = styled.span`
 margin-top: 5px;
 margin-bottom: 20px;
 color: ${({theme})=> theme.textSoft};
 font-size: 12px; 
`;

const Description = styled.p`
 font-size: 14px;
`;

const Subscribe = styled.button`
 background-color: #cc1a00;
 font-weight: 500;
 color: white;
 border: none;
 border-radius: 4px;
 height: max-content;
 padding: 10px 20px;
 cursor: pointer;
`;

const VideoPage = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views • 7 days ago</Info>
          <Buttons>
            <Button><ThumbUpOffAltIcon /> 123</Button>
            <Button><ThumbDownOffAltIcon /> Dislike</Button>
            <Button><ReplyOutlinedIcon /> Share</Button>
            <Button><PlaylistAddOutlinedIcon /> Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://i.pinimg.com/564x/d8/14/21/d814215d0860c9bc95ea663d93dbb4b0.jpg'/>
            <ChannelDetail>
              <ChannelName>SHETRO</ChannelName>
              <ChannelCounter>2K subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora animi eligendi non quod porro minima voluptates aut nesciunt minus unde.</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recommendation>
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
      </Recommendation>
    </Container>
  )
}

export default VideoPage

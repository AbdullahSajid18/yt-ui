import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 gap: 10px;
 margin: 30px 0px;
`;

const Avatar = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;
`;

const Details = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 color: ${({theme})=> theme.text};
`;

const Name = styled.span`
 font-size: 13px;
 font-weight: 500;
`;

const Date = styled.span`
 font-size: 12px;
 font-weight: 400;
 color: ${({theme})=> theme.textSoft};
 margin-left: 5px;
`;

const Text = styled.span`
 font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src='https://i.pinimg.com/564x/d8/14/21/d814215d0860c9bc95ea663d93dbb4b0.jpg'/>
        <Details>
            <Name>Abdullah <Date>1 day ago</Date></Name>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, totam. Ipsam, tempore! Praesentium aspernatur enim quam nesciunt obcaecati eos, temporibus eveniet ullam iure ab ipsa molestias vero, voluptatibus voluptate animi.</Text>
        </Details>
    </Container>
  )
}

export default Comment
import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';


const Container = styled.div``;

const NewComment = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
`;

const Avatar = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;
`;

const Input = styled.input`
 border: none; 
 border-bottom: 1px solid ${({theme})=> theme.soft};
 background-color: transparent;
 outline: none;
 padding: 5px;
 width: 100%;
`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src='https://i.pinimg.com/564x/d8/14/21/d814215d0860c9bc95ea663d93dbb4b0.jpg' />
            <Input placeholder='Add a comment...!'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments
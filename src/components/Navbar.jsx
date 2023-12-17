import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  height: 60px;
`;

const Wrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 height: 100%;
 padding: 0px 20px;
 positon: relative;
`;
const Search = styled.div`
 position: absolute;
 width: 40%;
 left: 0;
 right: 0;
 margin: auto;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5px;
 border: 1px solid #ccc;
 border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
`;

const Button = styled.div`
 width: 100px;
 padding: 5px 15px;
 background-color: transparent;
 border: 1px solid #3eadff;
 color: #3eadff;
 border-radius: 3px;
 font-weight: 500;
 cursor: pointer;
 display: flex;
 align-items: center;
 gap: 5px;
`;

const User = styled.div `
 display: flex;
 align-items: center;
 gap: 10px;
 font-weight: 500;
 color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

export const Navbar = () => {


  const {currentUser} = useSelector(state => state.user)

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <YoutubeSearchedForIcon />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallIcon />
            <Avatar />
            {currentUser.name}
          </User>
        ) :<Link to='signin' style={{textDecoration: 'none'}}>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
        </Link>}
      </Wrapper>
    </Container>
  )
}

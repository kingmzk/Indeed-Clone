import React from "react";
import Header from "../Components/Header";
import { Box, Typography, Button, styled } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { routePath } from "../Routes/route";

const Component = styled(Box)({
  display:'flex',
  height: '100vh',
  alignItems: "center",
  margin: '0 300px',
  '& > div': {
    width:'50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& > p':{
      fontSize: 56,
      linHeight: 1.25,
      letterSpacing: -1
    },
    '& > button':{
      width: 220,
      height: 60,
      background: 'rgb(37,87,167)',
      textTransform: 'none',
      fontSize: 17,
      fontWeight: 700,
      marginTop: 48
    }
  }
});

function Home() {

  const navigate = useNavigate();

  const Logo =
    "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";
  return (
    <>
      <Header />
      <Component>
        <Box>
          <Typography>Let's make your next <br/> great hire. Fast.</Typography>
          <Button variant="contained" onClick= {() => navigate(routePath.create)} >Post A job</Button>
        </Box>
        <Box>
          <img src={Logo} alt="Image" style={{width:600}} />
        </Box>
      </Component>
    </>
  );
}

export default Home;

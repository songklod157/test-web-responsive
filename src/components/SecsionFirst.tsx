'use client'
import styled from "@emotion/styled";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Container = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "345px",
  backgroundColor: "white",
  "@media (max-width: 425px)": {
    flexDirection: "column",
  },
}));
const HeadTitleWarp = styled(Stack)(() => ({
  marginTop: "0px",
  "@media (max-width: 768px)": {
    marginLeft:'-70px',
  },
}));
const HeadTitle = styled(Typography)(() => ({
  variant: "h1",
  fontSize: "90px",
  fontWeight: "400",
  color: "#E7E7E7",
}));
const BodyContentWrap = styled(Stack)(() => ({
  marginTop: "59px",
  "@media (max-width: 768px)": {
    marginLeft:'-70px',
  },
}));
const BodyContentNum = styled(Typography)(() => ({
  variant: "h2",
  fontSize: "18px",
  fontWeight: "400",
  color: "#000",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1.5px",
}));
const DividerNum = styled(Divider)(() => ({
  borderBottomWidth: 5,
  borderRadius:'2.5px',
  background: '#603EBE',
  width:'19px'
  
}));
const BodyContent = styled(Typography)(() => ({
  variant: "h2",
  fontSize: "36px",
  fontWeight: "400",
  color: "#C2C2C2",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1.5px",
}));
const Info = styled(Typography)(() => ({
  marginTop:'31px',
  fontSize: "20px",
  fontWeight: "400",
  color: "#000",
  fontStyle: "normal",
  lineHeight: "28px",
  "@media (max-width: 768px)": {
    fontSize: "18px",
  },
}));
const SecsionFirst = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <HeadTitleWarp>
            <HeadTitle>ATHLETS</HeadTitle>
          </HeadTitleWarp>
          <BodyContentWrap>
            <Stack direction="row" alignItems="center" spacing="10px">
              <Stack direction="column" alignItems='center'>
              <BodyContentNum>
                01
              </BodyContentNum>
              <DividerNum />
              </Stack>
              <BodyContent>CONNECTION</BodyContent>
            </Stack>
            <Info>Connect with coaches directly, you can ping coaches to view profile.</Info>
          </BodyContentWrap>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecsionFirst;

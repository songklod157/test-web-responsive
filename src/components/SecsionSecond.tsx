"use client";
import styled from "@emotion/styled";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Container = styled(Box)(() => ({
  width: "100%",
  height: "256px",
  backgroundColor: "#F5F4F9",
}));
const BodyContentWrap = styled(Stack)(() => ({
  width: "100%",
  height: "256px",
  justifyContent: "center",
  alignItems: "center",
  
  "@media (max-width: 768px)": {
    marginLeft:'-70px',
    marginRight: "30px",
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
  borderRadius: "2.5px",
  background: "#603EBE",
  width: "19px",
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
  marginTop: "21px",
  fontSize: "20px",
  fontWeight: "400",
  color: "#000",
  fontStyle: "normal",
  lineHeight: "28px",
  "@media (max-width: 768px)": {
    fontSize: "18px",
  },
}));
const SecsionSecond = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <BodyContentWrap>
            <div>
              <Stack direction="row" alignItems="center" spacing="10px">
                <Stack direction="column" alignItems="center">
                  <BodyContentNum>02</BodyContentNum>
                  <DividerNum />
                </Stack>
                <BodyContent>COLLABORATION</BodyContent>
              </Stack>
              <Info>
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </Info>
            </div>
          </BodyContentWrap>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecsionSecond;

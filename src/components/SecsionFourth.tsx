"use client";
import styled from "@emotion/styled";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Container = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "485px",
  backgroundColor: "white",
}));
const ContainerWrap = styled(Box)(() => ({
  width: "100%",
}));
const HeadTitleWarp = styled(Stack)(() => ({
  marginTop: "100px",
  paddingLeft: "20%",
  "@media (max-width: 768px)": {
    paddingLeft: "10%",
  },
}));
const HeadTitle = styled(Typography)(() => ({
  variant: "h1",
  fontSize: "90px",
  fontWeight: "400",
  color: "#E7E7E7",
}));
const BodyContentWrap = styled(Stack)(() => ({
  marginTop: "68px",
  width: "100%",
  paddingLeft: "20%",
  "@media (max-width: 768px)": {
    paddingLeft: "10%",
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
}));
const SecsionFourth = () => {
  return (
    <Container>
      <ContainerWrap>
        <Grid container>
          <Grid item xs={6}>
            <HeadTitleWarp>
              <HeadTitle>PLAYERS</HeadTitle>
            </HeadTitleWarp>
            <BodyContentWrap>
              <Stack direction="row" alignItems="center" spacing="10px">
                <Stack direction="column" alignItems="center">
                  <BodyContentNum>01</BodyContentNum>
                  <DividerNum />
                </Stack>
                <BodyContent>CONNECTION</BodyContent>
              </Stack>
              <Info>
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </Info>
            </BodyContentWrap>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </ContainerWrap>
    </Container>
  );
};

export default SecsionFourth;

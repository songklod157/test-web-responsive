"use client";
import styled from "@emotion/styled";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Container = styled(Box)(() => ({
  width: "100%",
  height: "245px",
  backgroundColor: "#F5F4F9",
}));
const ContainerWrap = styled(Box)(() => ({
  width: "100%",
}));
const BodyContentWrap = styled(Box)(() => ({
  width: "100%",
  marginTop:'52px',
  paddingLeft: "20%",
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
const SecsionFifth = () => {
  return (
    <Container>
      <ContainerWrap>
        <Grid container>
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
                  Work with recruiter to increase your chances of finding
                  talented athlete.
                </Info>
              </div>
            </BodyContentWrap>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </ContainerWrap>
    </Container>
  );
};

export default SecsionFifth;

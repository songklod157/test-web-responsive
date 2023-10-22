import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FristSlide from "./FristSlide";
import SecondSlide from "./SecondSlide";
import Image from "next/image";
import image1 from "../../images/graphic-desktop.png";
import image2 from "../../images/basketball.png";
const Container = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  backgroundColor: "white",
  flexDirection: "column",
}));
const HeadTitleWarp = styled(Stack)(() => ({
  marginTop: "0px",
  marginLeft: "18px",
}));
const HeadTitleWarp2 = styled(Stack)(() => ({
    marginTop: "19px",
    marginLeft: "18px",
  }));
const HeadTitle = styled(Typography)(() => ({
  variant: "h2",
  fontSize: "50px",
  fontWeight: "400",
  color: "#E7E7E7",
  lineHeight: "normal",
}));
const FirstSec = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "284px",
  backgroundColor: "white",
}));
const ContainerImageFrist = styled("div")(() => ({
  top: "60px",
  left: "25%",
  position: "absolute",
}));
const ContentImage = styled(Image)(() => ({
  width: "218px",
  height: "281px",
}));
const ContentImageSecond = styled(Image)(() => ({
    width: "302px",
    height: "249px",
  }));
  const ContainerImageSecond = styled("div")(() => ({
    position: "absolute",
    top: "660px",
    left: "7%",
  }));

const SecsionMobile = () => {
  return (
    <Container>
      <ContainerImageFrist>
        <Stack direction="row">
          <ContentImage src={image1} alt={"athlets"} />
        </Stack>
      </ContainerImageFrist>
      <FirstSec>
        <HeadTitleWarp>
          <HeadTitle>ATHLETS</HeadTitle>
        </HeadTitleWarp>
      </FirstSec>
      <FristSlide />
      <ContainerImageSecond>
            <Stack direction="row">
              <ContentImageSecond src={image2} alt={"player"} />
            </Stack>
          </ContainerImageSecond>
      <FirstSec>
        <HeadTitleWarp2>
          <HeadTitle>PLAYERS</HeadTitle>
        </HeadTitleWarp2>
      </FirstSec>
      <SecondSlide />
    </Container>
  );
};

export default SecsionMobile;

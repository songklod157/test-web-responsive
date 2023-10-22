"use client";
import styled from "@emotion/styled";
import { Avatar, Box, Stack } from "@mui/material";
import SecsionFirst from "@/components/SecsionFirst";
import SecsionSecond from "@/components/SecsionSecond";
import SecsionThird from "@/components/SecsionThird";
import SecsionFourth from "@/components/SecsionFourth";
import SecsionFifth from "@/components/SecsionFifth";
import SecsionSixth from "@/components/SecsionSixth";
import { useEffect, useState } from "react";
import image1 from "../../images/graphic-desktop.png";
import image2 from "../../images/basketball.png";
import Image from "next/image";
import SecsionMobile from "@/components/SecsionMobile";

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
const ContainerImageFrist = styled("div")(() => ({
  marginLeft: "5%",
  marginTop: "3%",
  position: "absolute",
}));
const ContainerImageSecond = styled("div")(() => ({
  position: "absolute",
  top: "898px",
  right: "0px",
  "@media (max-width: 1440px)": {
    right: "-5% ",
  },
  "@media (max-width: 1260px)": {
    right: "-10% ",
    top: "928px",
  },
  "@media (max-width: 1024px)": {
    right: "-20%",
    top: "1028px",
  },
  "@media (max-width: 880px)": {
    right: "-30%",
    top: "1028px",
  },
  "@media (max-width: 768px)": {
    right: "-35%",
    top: "1028px",
  },
}));
const ContentImage = styled(Image)(() => ({
  width: "678px",
  height: "950px",
  "@media (max-width: 1440px)": {
    width: "628px",
    height: "900px",
  },
  "@media (max-width: 1260px)": {
    width: "582px",
    height: "860px",
  },
  "@media (max-width: 1024px)": {
    width: "520px",
    height: "800px",
  },
  "@media (max-width: 880px)": {
    width: "500px",
    height: "750px",
    marginLeft: "-10%",
  },
  "@media (max-width: 768px)": {
    width: "498px",
    height: "699px",
    marginLeft: "-40%",
  },
}));
const ContentImageSecond = styled(Image)(() => ({
  width: "991px",
  height: "815px",
  "@media (max-width: 1440px)": {
    width: "901px",
    height: "725px",
  },
  "@media (max-width: 1260px)": {
    width: "819px",
    height: "635px",
  },
  "@media (max-width: 1024px)": {
    width: "720px",
    height: "545px",
  },
  "@media (max-width: 880px)": {
    width: "691px",
    height: "568px",
  },
  "@media (max-width: 768px)": {
    width: "691px",
    height: "568px",
  },
}));

export default function Home() {
  const [screenSize, setScreenSize] = useState(getCurrentDevice());
  const [mobile, setMobile] = useState(false);
  console.log(mobile);
  function getCurrentDevice() {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
      };
    }
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDevice());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  useEffect(() => {
    if (screenSize!.width < 425) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [screenSize]);
  return (
    <Container>
      {!mobile ? (
        <>
          <ContainerImageFrist>
            <Stack direction="row">
              <ContentImage src={image1} alt={"athlets"} />
            </Stack>
          </ContainerImageFrist>
          <SecsionFirst />
          <SecsionSecond />
          <SecsionThird />
          <ContainerImageSecond>
            <Stack direction="row">
              <ContentImageSecond src={image2} alt={"player"} />
            </Stack>
          </ContainerImageSecond>
          <SecsionFourth />
          <SecsionFifth />
          <SecsionSixth />
        </>
      ) : (
        <SecsionMobile />
      )}
    </Container>
  );
}

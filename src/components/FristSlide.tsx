import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
const FristSlide = () => {
  return (
    <div id="slider">
      <input type="radio" name="slider" id="slide1" checked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <div id="slides">
        <div id="overflow">
          <div className="inner">
            <div className="slide slide_1">
              <Stack
                direction="column"
                alignItems="center"
                sx={{ padding: "18px" }}
              >
                <Stack direction="row" alignItems="center" spacing="10px">
                  <Stack direction="column" alignItems="center">
                    <Typography
                      fontSize="14px"
                      color="#000"
                      fontWeight="400"
                      letterSpacing="1.5px"
                    >
                      01
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: 5,
                        borderRadius: "2.5px",
                        background: "#603EBE",
                        width: "19px",
                      }}
                    />
                  </Stack>
                  <Typography
                    fontSize="28px"
                    color="#C2C2C2"
                    fontWeight="400"
                    letterSpacing="1.5px"
                  >
                    CONNECTION
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    marginTop: "20px",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#000",
                    fontStyle: "normal",
                    textAlign: "start",
                  }}
                >
                  Connect with coaches directly, you can ping coaches to view
                  profile.
                </Typography>
              </Stack>
            </div>
            <div className="slide slide_2">
              <div className="slide-content">
                <Stack
                  direction="column"
                  alignItems="center"
                  sx={{ padding: "18px" }}
                >
                  <Stack direction="row" alignItems="center" spacing="10px">
                    <Stack direction="column" alignItems="center">
                      <Typography
                        fontSize="14px"
                        color="#000"
                        fontWeight="400"
                        letterSpacing="1.5px"
                      >
                        02
                      </Typography>
                      <Divider
                        sx={{
                          borderBottomWidth: 5,
                          borderRadius: "2.5px",
                          background: "#603EBE",
                          width: "19px",
                        }}
                      />
                    </Stack>
                    <Typography
                      fontSize="28px"
                      color="#C2C2C2"
                      fontWeight="400"
                      letterSpacing="1.5px"
                    >
                      COLLABORATION
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#000",
                      fontStyle: "normal",
                      textAlign: "start",
                    }}
                  >
                    Work with other student athletes to increase visability.
                    When you share and like other players videos it will
                    increase your visability as a player. This is the team work
                    aspect to Surface 1.
                  </Typography>
                </Stack>
              </div>
            </div>
            <div className="slide slide_3">
              <div className="slide-content">
                <Stack
                  direction="column"
                  alignItems="center"
                  sx={{ padding: "18px" }}
                >
                  <Stack direction="row" alignItems="center" spacing="10px">
                    <Stack direction="column" alignItems="center">
                      <Typography
                        fontSize="14px"
                        color="#000"
                        fontWeight="400"
                        letterSpacing="1.5px"
                      >
                        03
                      </Typography>
                      <Divider
                        sx={{
                          borderBottomWidth: 5,
                          borderRadius: "2.5px",
                          background: "#fff",
                          width: "19px",
                        }}
                      />
                    </Stack>
                    <Typography
                      fontSize="28px"
                      color="#C2C2C2"
                      fontWeight="400"
                      letterSpacing="1.5px"
                    >
                      GROWTH
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#fff",
                      fontStyle: "normal",
                      textAlign: "start",
                    }}
                  >
                    Resources and tools for you to get better as a student
                    Athelte. Access to training classes, tutor sessions, etc
                  </Typography>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
      </div>
      <div id="bullets">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
      </div>
    </div>
  );
};

export default FristSlide;

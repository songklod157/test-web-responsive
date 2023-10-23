import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const SecondSlide = () => {
  return (
    <div id="slider2">
      <input type="radio" name="slider2" id="slide2_1" checked />
      <input type="radio" name="slider2" id="slide2_2" />
      <input type="radio" name="slider2" id="slide2_3" />
      <div id="slides2">
        <div id="overflow2">
          <div className="inner2">
            <div className="slide2 slide2_1">
              <div className="slide-content2">
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
                      lineHeight: "normal",
                    }}
                  >
                    Connect with coaches directly, you can ping coaches to view
                    profile.
                  </Typography>
                </Stack>
              </div>
            </div>
            <div className="slide2 slide2_2">
              <div className="slide-content2">
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
                      lineHeight: "normal",
                    }}
                  >
                    Work with recruiter to increase your chances of finding
                    talented athlete.
                  </Typography>
                </Stack>
              </div>
            </div>
            <div className="slide2 slide2_3">
              <div className="slide-content2">
                <Stack
                  direction="column"
                  alignItems="center"
                  sx={{ padding: "18px" }}
                >
                  <Stack direction="row" alignItems="center" spacing="10px">
                    <Stack direction="column" alignItems="center">
                      <Typography
                        fontSize="14px"
                        color="#603EBE"
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
                      lineHeight: "normal",
                    }}
                  >
                    Save your time, recruit proper athlets for your team.
                  </Typography>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="controls2">
        <label htmlFor="slide2_1"></label>
        <label htmlFor="slide2_2"></label>
        <label htmlFor="slide2_3"></label>
      </div>
      <div id="bullets2">
        <label htmlFor="slide2_1"></label>
        <label htmlFor="slide2_2"></label>
        <label htmlFor="slide2_3"></label>
      </div>
    </div>
  );
};

export default SecondSlide;

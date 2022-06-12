import React from "react";
import backImage from "./../assets/images/logo.png";
import { styled, Grid, CssBaseline } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, InputAdornment } from "@mui/material";
import TextField from "../components/core/TextField";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import PageLayout from "../components/layout/PageLayout";
import { useNavigate } from "react-router-dom";

const Heading = styled("div")(({ theme }) => ({
  margin: "0 auto",
  marginBottom: "24px",
  fontFamily: "Open Sans",
  fontWeight: "600",
  fontSize: "34px",
  lineHeight: "46px",
}));

const Root = styled(Grid)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  fontFamily: '"PT Sans", "sans-serif", "Poppins"',
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  backgroundColor: "#FDD833",
  backgroundImage: `url(${backImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "90%",
}));

const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: "20px 0",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

const Body = styled(Grid)(({ theme }) => ({
  maxWidth: "432px",
  width: "100%",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
}));

export default function Search({ getValue, errorMsg }) {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    const { docname, hospitalname, specialist } = values;
    // console.log(docname, hospitalname, specialist);
    navigate(
      `/searchResult/?docname=${docname}&hospitalname=${hospitalname}&specialist=${specialist}`
    );
  };
  return (
    <PageLayout>
      <Root container component="main">
        <CssBaseline />
        <ImageContainer />
        <Grid
          item
          sm={12}
          md={6}
          elevation={0}
          sx={{ width: "100%", backgroundColor: "#ffffff" }}
        >
          <Container>
            <Body>
              <Box
                display="flex"
                width="100%"
                height="100%"
                flexDirection="column"
                justifyContent="center"
              >
                <Heading>Channel Your Doctor</Heading>
                <Formik
                  initialValues={{
                    docname: "",
                    hospitalname: "",
                    specialist: "",
                  }}
                  validationSchema={Yup.object().shape({
                    specialist: Yup.string()
                      .max(255)
                      .required("Specialistation is required!"),
                  })}
                  onSubmit={onSubmit}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        error={Boolean(touched.docname && errors.docname)}
                        fullWidth
                        helperText={touched.docname && errors.docname}
                        margin="normal"
                        name="docname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.docname}
                        variant="outlined"
                        placeholder="Doctor Name"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        error={Boolean(
                          touched.hospitalname && errors.hospitalname
                        )}
                        fullWidth
                        helperText={touched.hospitalname && errors.hospitalname}
                        margin="normal"
                        name="hospitalname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.hospitalname}
                        variant="outlined"
                        placeholder="Hospital"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocalHospitalOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <TextField
                        error={Boolean(touched.specialist && errors.specialist)}
                        fullWidth
                        helperText={touched.specialist && errors.specialist}
                        margin="normal"
                        name="specialist"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.specialist}
                        variant="outlined"
                        placeholder="Specialist"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MedicalServicesOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <Box>
                        {errorMsg && (
                          <div>
                            <p style={{ color: "red" }}>{errorMsg}</p>
                          </div>
                        )}
                      </Box>

                      <Box mt="32px">
                        <Button
                          disableElevation
                          disableRipple
                          style={{
                            borderRadius: "50px",
                          }}
                          onClick={handleSubmit}
                          //   disabled={isSubmitting}
                          variant="contained"
                          type="submit"
                          fullWidth
                        >
                          Channel Your Doctor
                        </Button>
                      </Box>
                    </form>
                  )}
                </Formik>
              </Box>
            </Body>
          </Container>
        </Grid>
      </Root>
    </PageLayout>
  );
}

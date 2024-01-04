import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="manefest"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Us
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
              Manefest is an online men's fashion store that started in 2019. We take pride in serving over 20,000 customers through various online platforms and social media channels. At Manefest, we are dedicated to providing high-quality fashion products, and we are excited to introduce our own line of products under the distinctive brand name "Manefest."

Explore our curated collection of men's clothing, footwear, and accessories designed to elevate your style. Join the Manefest community and discover the latest trends and timeless classics that suit your unique taste.

Welcome to Manefest – where style meets individuality.
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
              Manefest was founded by Shameer and Juraij, two visionary entrepreneurs deeply passionate about men's fashion. Fueled by their shared love for style and individuality, Shameer and Juraij set out on a journey to curate a distinctive collection of clothing and accessories. Their vision is to provide a diverse range of fashion-forward products that resonate with individuals seeking quality and trendsetting designs.

Having gained substantial recognition, Shameer and Juraij's dedication has led Manefest to serve over 20,000 customers to date. As they continue to grow, the focus is on reaching an international audience. With the launch of their dedicated website, they aim to introduce new and authentic fashion products at competitive prices, making Manefest a global destination for men's style.

Join them on this fashion-forward journey, and experience the essence of individual expression with Manefest.

              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          Manefest is committed to delivering premium men's fashion and accessories to individuals worldwide. Our mission is to empower men with the finest style essentials, enhancing their confidence and expression. With a dedication to innovation, craftsmanship, and customer satisfaction, we have earned the trust of a growing community of individuals who appreciate quality fashion.

At Manefest, we curate collections that blend timeless elegance with contemporary trends. Our focus on providing exceptional products has established us as a trusted brand in the world of men's fashion. Whether you seek classic sophistication or the latest fashion-forward pieces, Manefest is here to elevate your style.

Experience the intersection of quality and style with Manefest, where fashion meets individuality.

          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          Since our establishment in 2019, Manefest has cultivated a robust community of customers while diversifying our product range to meet the distinct needs of individuals at every style level. We take pride in presenting authentic fashion products meticulously curated and tested for quality and trendsetting performance.

At Manefest, our team of experts collaborates closely with manufacturers to guarantee that our customers receive fashion-forward products of the highest caliber. We are dedicated to staying at the forefront of style innovation, ensuring that each item in our collection reflects the essence of contemporary fashion.

Join us on our journey at Manefest, where we continue to redefine and elevate men's style since our inception.

          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          At Manefest, we are dedicated to cultivating enduring connections with our valued customers. Our commitment to excellent customer service drives us to consistently exceed expectations at every touchpoint. We are unwavering in our pursuit of delivering a seamless online shopping experience and ensuring unparalleled customer satisfaction.

Embark on this exhilarating journey with us as we navigate the realms of men's fashion. Together, let's witness the growth and expansion of Manefest, as we strive to extend our reach and influence in the world of style.

Join us and experience the difference at Manefest – where relationships are cherished, and style knows no bounds.

          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          At Manefest, our mission is fueled by the commitment to deliver top-notch men's fashion and accessories at accessible prices. We strive to make exceptional style accessible to individuals worldwide, supporting their unique expressions through fashion. Our goal is to present a diverse range of clothing and accessories, including shirts, pants, footwear, and more, all crafted to meet the highest standards of quality and trendsetting performance.

Join us in our mission to redefine and democratize men's style. At Manefest, we believe that everyone deserves access to exceptional fashion without compromise.

Experience the fusion of affordability and impeccable style at Manefest – where fashion meets accessibility.

          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          At Manefest, we are unwavering in our commitment to constant innovation and enhancement of our product range to cater to the evolving needs of individuals seeking standout style. Our dedicated team of experts collaborates closely with manufacturers, conducting meticulous quality testing to guarantee that every product we offer not only meets but exceeds the expectations of exceptional performance.

We believe that every individual deserves access to the finest tools to amplify their personal style and achieve their unique fashion goals. At Manefest, we are driven by the belief that style should be both dynamic and empowering.

Join us in our pursuit of style innovation at Manefest – where every individual's fashion journey is empowered and elevated.

          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
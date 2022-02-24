import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../../components/ui/Button arrow";
import customSoftware from "../../assets/Custom Software Icon.svg";
import theme from "../../components/ui/theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mobileIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import { makeStyles } from "@material-ui/core/styles";


import revolutionBackground from "../../assets/repeatingBackground.svg";
import infoBackground from "../../assets/infoBackground.svg";
import homeImage from "../../assets/background.jpg";

const useStyleS =makeStyles(theme=>({
        container :{
          background: "linear-gradient(135deg, #00dbde 10%, #fc00ff 100%)" 
        },
          titles:{
            color:"white"
        }
}))

export const useStyle = makeStyles((theme) => ({
    learnMore: {
      borderRadius: "50px",
      padding: "2px 5px",
      margin: "10px",
    },
    home: {
      height: "50em",
      padding: "5em",
      backgroundImage: `url(${homeImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgoundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      [theme.breakpoints.down("xs")]: {
        height: "17em",
        width: "100%",
        padding: "0.5em",
        backgroundSize: "21.5em 17em",
      },
    },
  
    homeText: {
      textAlign: "left",
      fontFamily: "pacifico",
      fontWeight: 700,
      fontSize: "5rem",
      color: "white",
  
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    span: {
      fontFamily: "pacifico",
      color: "white",
      fontSize: "1.2rem",
      fontWeight: 400,
    },
  
    customItem: {
      textAlign: "center",
    },
    image: {
      marginLeft: "2rem",
      [theme.breakpoints.down("xs")]: {
        margin: "0.5em",
      },
    },
    item: {
      marginBottom: "5em",
      margin: "2em",
  
      [theme.breakpoints.down("xs")]: {
        marginBottom: "3em",
        margin: "0",
      },
    },
    divImage: {
      marginLeft: "2.5em",
    },
    homeImage: {
      width: "100%",
    },
  
    revolutionBackground: {
      height: "100em",
      backgroundImage: `url(${revolutionBackground})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgoundRepeat: "no-repeat",
      [theme.breakpoints.down("sm")]: {
        height: "50em",
        width: "99%",
      },
    },
    revolutionCard: {
      boxShadow: theme.shadows[10],
      borderRadius: 15,
      padding: "10em",
      [theme.breakpoints.down("sm")]: {
        padding: "1em",
      },
    },
    revolutionText: {
      fontFamily: "pacifico",
      marginBottom: "3em",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "1em",
      },
    },
    informations: {
      padding: "5em",
      height: "80em",
      backgroundImage: `url(${infoBackground})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgoundRepeat: "no-repeat",
      [theme.breakpoints.down("xs")]: {
        padding: "3em",
        height: "40em",
      },
    },
    infotext: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    infoBlock: {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        marginBottom: "3em",
      },
    },
    infoBlock2: {
      textAlign: "right",
      marginLeft: "2em",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        marginLeft: 0,
      },
    },
  }));

const Services = () => {
  const classeS =useStyleS()
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matcheXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classeS.container}>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item style={{ margin: " 4em auto" }}>
            <Typography
              variant={matches ? "h5" : "h4"}
              style={{fontFamily:"pacifico",color:theme.palette.secondary.main}}
            
            >
              {" "}
              <u>Our Services @ AirBnB</u>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={[matches && classes.customItem, classes.item]}>
        <Grid container direction="row">
          <Grid item>
            <Typography variant={matches ? "h5" : "h4"} className={classeS.titles}>
              {" "}
              Exclusive VIP Resting Room Rent
            </Typography>
            <Typography variant="subtitle1" className={classeS.titles}>save Time.save your Money</Typography>
            <Typography variant="subtitle1" className={classeS.titles}>
              complete degital solutions from {matcheXS && <br />}degital
              vacatio and trips holiday <span className={classes.span}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ margin: 10 }} className={classes.span}>
                Learn More
              </span>
              <ButtonArrow
                width={15}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <div className={matcheXS && classes.divImage}>
              <img
                src={customSoftware}
                alt="custom software"
                className={classes.image}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={[matches && classes.customItem, classes.item]}>
        <Grid container direction="row" justify="flex-end">
          <Grid item>
            <Typography variant={matches ? "h5" : "h4"} className={classeS.titles}>
              {" "}
               Beautifull Tent for Couples vacation
            </Typography>
            <Typography variant="subtitle1"className={classeS.titles}>
              pay anywhere using your phone tablet or through your laptop.{matcheXS && <br />} extend Access.
              {matcheXS && <br />}Increase Engagement
            </Typography>
            <Typography variant="subtitle1"className={classeS.titles}>
              integrate your mobile experience {matcheXS && <br />}with either{" "}
              <span className={classes.span}>  on a lovely vacation </span>
            </Typography>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ margin: 10 }} className={classes.span}>
                Learn More
              </span>
              <ButtonArrow
                width={15}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={mobileIcon}
              alt="android apps"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={[matches && classes.customItem, classes.item]}>
        <Grid container direction="row">
          <Grid item>
            <Typography variant={matches ? "h5" : "h4"} className={classeS.titles}>
              {" "}
                24/7 Toll Free Customer Service
            </Typography>
            <Typography variant="subtitle1" className={classeS.titles}>
              Reach More.{matcheXS && <br />} Dicover More.
              {matcheXS && <br />} Travel More
            </Typography>
            <Typography variant="subtitle1" className={classeS.titles}>
              Our Website Optimized for search engines {matcheXS && <br />}Built for{" "}
              <span className={classes.span}>Speed</span>
            </Typography>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ margin: 10 }} className={classes.span}>
                Learn More
              </span>
              <ButtonArrow
                width={15}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <div className={matcheXS && classes.divImage}>
              <img src={websiteIcon} alt="websites" className={classes.image} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
import React from 'react';
import Card from '../../Card'
import SearchBarDesign from '../../SearchBarDesign'
import { makeStyles } from "@material-ui/core/styles"
import {Button , Box , Container} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import BgPicture from "../../assets/background.jpg"

import BannerPic from "../../assets/bannerpic.jpeg"
import Pic1 from "../../assets/picture.jpeg"
import AirbnbGistPic from "../../assets/airbnbGift.jpg"

import TripLeft from "../../assets/image.jpeg"
import TripRight from "../../assets/image2.jpeg"

import {Destinations} from "../../DataAsset/DestinationCountries"

import Discover from "../../components/Discover"
import Card2 from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme)=> ({
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
   homeSection: {
        display: "flex",
        padding: "30px"
   },

   homeBanner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "620px",
    width: "100vw",
    backgroundColor: "black"
   }, 

   ExpPicture: {
       width: "400px"
   },
   tripsSuggestion:{
       display: "flex",
       flexDirection: "column",
       width: "90vw"
   },
   
qsnHosting: {
    width: "100vw",
    height: "80vh",
    paddingLeft: "90px",
    paddingTop: "40px",
    color: "white",
    fontSize: "30px",
    backgroundImage: ` url(${Pic1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
},
AskButton: {
    backgroundColor: "blue",
    color: "white",
    marginLeft: "90px",
    marginTop: "120px",
    curser: "pointer"
} ,
airbnbShopGiftsLeft: {
    backgroundColor: "white",
    width: "100px",
    flexGrow: "1",
    height: "50vh",
    paddingLeft: "45px",
    color: "black",
    fontSize: "25px"
},

airbnbShopGiftsRight: {
    backgroundImage: `url(${AirbnbGistPic})`,    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100px",
    flexGrow: "3",
    height: "70vh"
},
airbnbShopGifts: {
    marginTop: "120px",
    width: "90vw",
    display: "flex", 
    height: "90vh"
},

GiftButton: {
    backgroundColor: "black",
    color: "white",
    curser: "pointer",
    marginTop: "20px",
    width: "130px",
    height: "50px"
},

tripsExperience:{
    display: "flex",
    justifyContent: "center",
    width: "90vw",
    height: "100vh"
},

Experience1: {
    backgroundColor: "red",
    borderRadius: "15px",
    width: "550px",
    height: "76vh",
    backgroundImage: `url(${TripLeft})`,    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
},
Experience2: {
    marginLeft: "5px",
    backgroundColor: "blue",
    borderRadius: "15px",
    width: "550px",
    height: "76vh",
    backgroundImage: `url(${TripRight})`,    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

},
expHeadingText: {
    color: "white",
    fontSize: "35px",
    margin: "0px 20px",
},
ExpButton: {
    margin: "0px 20px",
    backgroundColor: "white",
    color: "black",
    curser: "pointer",
    marginTop: "20px",
    width: "180px",
    height: "55px",
    borderRadius: "10px"
},
services: {
    display: "flex",
    flexDirection: "column"
},




dialog: {
    marginTop: "6em",
  },
  dialogform: {
    margin: "3em ",
    [theme.breakpoints.down("sm")]: {
      margin: "0.5em",
    },
  },
  cancelButton: {
    color: "white",
    fontFamily: "Raleway",
    fontWeight: 600,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "#DC143C",
    },
    [theme.breakpoints.down("sm")]: {},
  },
  confirmButton: {
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",

    color: "white",
    fontFamily: "Raleway",
    fontWeight: 600,
  },


}));

function Services(){
    const classes = useStyles();
    return (
        <Container className={classes.mainContainer}>
  
            <Box className={classes.tripsExperience}>
                    <Box className={classes.Experience1}>
                                    <h1 className={classes.expHeadingText}>Things to do <br /> on your trip</h1>
                                    <Button className={classes.ExpButton}>
                                        Experiences
                                    </Button>  
            </Box>
                    
                <Box className={classes.Experience2}>
                                    <h1 className={classes.expHeadingText}>Things to do <br /> from home</h1> 
                                    <Button className={classes.ExpButton}>
                                        Online Experiences
                                    </Button>  
                </Box>
            </Box>
              
           <Box className={classes.airbnbShopGifts}>
                <Box className={classes.airbnbShopGiftsLeft}>
                    <h1> Shop Airbnb <br /> gift cards</h1>
                    <Button className={classes.GiftButton}>
                        Learn More
                    </Button>
                </Box>
                <Box className={classes.airbnbShopGiftsRight}>
                </Box>
           </Box>
           
           <Box className={classes.qsnHosting}>
               <h1>Questions <br /> about <br />hosting?</h1>
               <Button className={classes.AskButton}>
                  Ask a SuperHost
               </Button>

           </Box>

           <Box className={classes.tripsSuggestion}>
                <h2 className={classes.headerText1}>Inspiration for your next trip</h2>
                <Grid Container className={classes.homeSection} spacing={2} >

                   <Grid item xs={12} sm={6} md={4} >
                       <Card
                            src={BgPicture}
                            title="Renting a Single Private House "
                            description="9 Killo Meters away from you! ."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card
                            src={BgPicture}
                            title="Renting Guest House"
                            description="234Killo Meters away from You!."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                       <Card2 sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Exclusive VIP Renting
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </CardContent>
                        <CardActions alignItems="cneter">
                            <Button size="small" variant="contained" color="blue">CheckOut</Button>
                            <Button size="small" variant="contained">Learn More</Button>
                        </CardActions>
                        </Card2>
                    </Grid>
                </Grid> 
            </Box>

            <Box className={classes.services}>
              <Discover />
            </Box>
            

            <Dialog open="true" className={classes.dialog}>
        <DialogTitle>
          <Typography variant="h5">Confirm Informations</Typography>
        </DialogTitle>
        <Grid
          item
          direction="column"
          className={classes.dialogform}
          spacing={3}
        >
          <Grid item>
            <Typography>Name</Typography>
            <Typography variant="subtitle1">name</Typography>
          </Grid>
          <Grid item>
            <Typography>Email</Typography>
            <Typography variant="subtitle1">email</Typography>
          </Grid>
          <Grid item>
            <Typography>Phone</Typography>
            <Typography variant="subtitle1">phone</Typography>
          </Grid>
          <Grid item>
            <Typography>Your inquiry</Typography>
            <Typography variant="subtitle1">message</Typography>
          </Grid>
          <Grid item container spacing={2} className={classes.buttonContainer}>
            <Grid item md>
              <Button
                className={classes.cancelButton}
                variant="contained"
                onClick=""
              >
                cancel
              </Button>
            </Grid>
            <Grid item md>
              <Button
                variant="contained"
                className={classes.confirmButton}
                onClick=""
              >
                { true ? <CircularProgress size={30} /> : " Confirm >"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
        </Container>
    )
}

export default Services
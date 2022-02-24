import {React , useState} from 'react';
import Card from './Card'
import SearchBarDesign from './SearchBarDesign'
import { makeStyles } from "@material-ui/core/styles"
import {Button , Box , Container , Grid , Slider} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import BgPicture from "./assets/background.jpg"

import BannerPic from "./assets/bannerpic.jpeg"
import Pic1 from "./assets/picture.jpeg"
import AirbnbGistPic from "./assets/airbnbGift.jpg"

import TripLeft from "./assets/image.jpeg"
import TripRight from "./assets/image2.jpeg"

import {Destinations} from "./DataAsset/DestinationCountries"

import MouseParticles from 'react-mouse-particles'


import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';



import PicAfar from "./assets/afar.jpg"
import PicHarer from "./assets/harer.jpg"
import Pich from "./assets/hh.jpg"
import PicEmir from "./assets/emir.jpg"

const AutoplaySlider = withAutoplay(AwesomeSlider);

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
   headerText: {
      color: "white",
      paddingTop: "260px"
   },

   footerSectionAbout: {
    display: "flex",
    padding: "30px",
    marginLeft: "55px"
   },

   footerSectionHosting: {
    display: "flex",
    padding: "30px",
    marginLeft: "55px"
   },

   footerSectionCommunity: {
    display: "flex",
    padding: "30px",
    marginLeft: "55px"
    },

   footerSectionSupport: {
    display: "flex",
    padding: "30px",
    marginLeft: "55px"
   },

   find: {
    marginTop: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "120vh",
    backgroundImage: `url(${BannerPic})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexDirection: "column",
    width: "95%",
    borderRadius: "30px"
   }, 

   imflexiblebtn: {
        display: "inline-block",
        backgroundColor: "white",
        border: "none",
        color: "#A2018A",
        textAlign: "center",
        fontSize: "18px",
        padding: "5px",
        width: "180px",
        height: "35px",
        cursor: "pointer",
        margin: "5px",
        borderRadius: "20px",
        curser: "pointer"
   },
   headerText1: {
       marginTop: "130px",
       fontSize: "35px",
       color: "black",
       marginBottom: "20px"
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
    width: "100vw",
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

textSlider: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "160px",
    fontSize: "35px",
    color: "white",
},
slidingText: {

    fontSize: "25px",
    color: "white",
}
}));




function MyHome(){
    const classes = useStyles();
    const [bgColor , setBgColor] = useState("yellow");
    const [navbar , setNavbar] = useState("false");
    const [sliderText , setText] = useState("The City of Marvelious Spiritual Heritages")
    const [bgImage , setBgImage] = useState(`url(${PicHarer})`)
    const [sliderHeader , setSliderHeader] = useState("Gonder");


    const homeBannerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "620px",
        width: "100vw",
        backgroundColor: "black"
    }
    const appStyle = {
        backgroundImage: bgImage,        
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        spacing: "10px",
        flexDirection: "column",
        
    };

    const btnStyle = {
        marginLeft: "10px"
    };

    const changeBackground = ()=> {
        console.log(window.scrollY)        
    }
    window.addEventListener('scroll' , changeBackground);
        return (
            <>
        <Container className={classes.mainContainer}>
            <Box style={homeBannerStyle}>
                
                <SearchBarDesign className={classes.SearchBar} />
                <Box className={classes.find}>
                    <h2 className={classes.headerText} fontSize="30px">Not sure where to go? Perfect.</h2>
                    <Button  className={classes.imflexiblebtn} variant="contained" href="#" color="primary">I'm Flexible</Button>
                </Box>  
            </Box>
            
            
            

            
            
            <h2 className={classes.headerText1}>Discover Airbnb Experiences</h2>                
                
           <Box className={classes.tripsExperience}>
                    <Box className={classes.Experience1}>
                                    <h1 className={classes.expHeadingText}>Things to do <br /> on your trip</h1>
                                    <Button className={classes.ExpButton} variant="contained" href="#" color="primary">
                                        Experiences
                                    </Button>  
                    </Box>
                    
                    <Box className={classes.Experience2}>
                                    <h1 className={classes.expHeadingText}>Things to do <br /> from home</h1> 
                                    <Button className={classes.ExpButton} variant="contained" href="#" color="primary">
                                        Online Experiences
                                    </Button>  
                    </Box>
            </Box>
              
           <Box className={classes.airbnbShopGifts}>
                <Box className={classes.airbnbShopGiftsLeft}>
                    <h1> Shop Airbnb <br /> gift cards</h1>
                    <Button className={classes.GiftButton} variant="contained" href="#" color="primary">
                        Learn More
                    </Button>
                </Box>
                <Box className={classes.airbnbShopGiftsRight}>

                </Box>
           </Box>
           
           <Box className={classes.qsnHosting}>
               <h1>Questions <br /> about <br />hosting?</h1>
               <Button className={classes.AskButton} variant="contained" href="#" color="primary">
                  Ask a SuperHost
               </Button>
           </Box>

           <Box className={classes.tripsSuggestion}>
                <h2 className={classes.headerText1}>Inspiration for your next trip</h2>
                <Grid Container className={classes.homeSection} spacing={2} >

                   <Grid item xs={12} sm={6} md={3} >
                       <Card
                            src={BgPicture}
                            title="Addis Abeba "
                            description="9 Killo Meters away from you! ."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Card
                            src={BgPicture}
                            title="Lalibela"
                            description="234Killo Meters away from You!."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Card
                            src={BgPicture}
                            title="Gonder"
                            description="400Killo Meters away from you!."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Card
                            src={BgPicture}
                            title="Axum"
                            description="600 Killo Meters away from you!."
                        />
                    </Grid>
                </Grid> 
            </Box>

            <Box style={appStyle}>
                 <h2 className={classes.textSlider}>{sliderHeader}</h2>
                 <p className={classes.slidingText}>{sliderText}</p>

                <Box className={classes.textSlider}>                 

                

                <Button variant="contained" href="" color="primary" 
                    onMouseEnter={() => {
                        setBgImage(`url(${PicEmir})`)
                        setSliderHeader("Harer")                        
                        setText("Lovely Community")
                    }}
                    onMouseLeave={() => {
                        setBgImage(`url(${PicHarer})`)
                        setSliderHeader("Gonder")                        
                        setText("The City of Marvelious Spiritual Heritages")
                    }}>
                        Hareri
               </Button>
               <Button style={btnStyle} variant="contained" href="" color="primary" onMouseEnter={() => {
                        setBgImage(`url(${PicAfar})`)
                        setSliderHeader("Afar")                        
                        setText("Cradle of Human Kind")
                    }}
                    onMouseLeave={() => {
                        setBgImage(`url(${PicHarer})`)
                        setSliderHeader("Gonder")                        
                        setText("The City of Marvelious Spiritual Heritages")
                    }}>
                    Afar
               </Button >

        <Button style={btnStyle} variant="contained" href="" color="primary" 
               onMouseEnter={() => {
                        setBgImage(`url(${Pich})`)
                        setSliderHeader("Hamer")                        
                        setText("Hamer Peoples ")
                    }}
                    onMouseLeave={() => {
                        setBgImage(`url(${PicHarer})`)
                        setSliderHeader("Gonder")                        
                        setText("The City of Marvelious Spiritual Heritages")
                    }}>
                   Hamer
               </Button>

               <Button style={btnStyle} variant="contained" href="" color="primary" onMouseEnter={() => {
                             setBgImage(`url(${PicHarer})`)
                             setSliderHeader("Gonder")                        
                             setText("The City of Marvelious Spiritual Heritages")
                         }}
                         onMouseLeave={() => {
                             setBgImage(`url(${PicHarer})`)
                             setSliderHeader("Gonder")                        
                             setText("The City of Marvelious Spiritual Heritages")
                         }}>
                   Gonder
               </Button>

               
               </Box>
            </Box>

           <h2 className={classes.headerText1}></h2>

           <h2 className={classes.headerText1}>Inspiration for future getaways</h2>

           <Box className="DestinationSwitchingButtons">

               <Button variant="contained" href="/search" color="primary">
                   Destination Art & Culture
               </Button>
               <Button style={btnStyle} variant="contained" href="/search" color="primary">
                   Destination OutDoor Adventure
               </Button >

               <Button style={btnStyle} variant="contained" href="/search" color="primary">
                   Mountain Cabins
               </Button>

               <Button style={btnStyle} variant="contained" href="/search" color="primary">
                   Beach Destinations
               </Button>
               <Button style={btnStyle} variant="contained" href="/search" color="primary" margin="5px">
                   Popular Destinations
               </Button>
               <hr color="blue" />

           </Box>

           <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src="https://th.bing.com/th/id/R.b1f3b542205798840c34770fce9e4044?rik=CIi3AsQiY0mvRQ&pid=ImgRaw&r=0" />
                <div data-src="https://th.bing.com/th/id/OIF.F61vKtpBaURS0iIcPoGHnA?pid=ImgDet&rs=1" />
                <div data-src="https://th.bing.com/th/id/OIP.ziJPiBCYNJaOEd9QO8g-gQHaEx?pid=ImgDet&w=930&h=600&rs=1" />
            </AutoplaySlider>
        </Container>
        <MouseParticles g={1} radius="10" color="random" cull="col,image-wrapper"/>
        </>
    )
}

export default MyHome
import React from 'react';
import './aboutus.css'

import { makeStyles } from "@material-ui/core/styles"

import AddIcon from '@material-ui/icons/Add';
import TopImage from '../../assets/beautiful_view.jpg'
import {Fab , Box , Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    topcontents: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "50px",
        alignItems: "center",
        marginTop: "140px",
        width: "90vw",
        height: "60vh",
        backgroundImage: `url(${TopImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginLeft: "0px",
        color: "white",
        fontSize: "45px"
     } , 
    }));

function AboutUs() {
    const styles = {
        padding: "0px",
        margin: "0px",
        width: "100%",
        height: "55vh"
    };
    const classes = useStyles();
  return(
     <Container className={classes.mainContainer}>
             <Box className={classes.topcontents}>
                   <p>About Us</p>
                   <Button 
                   variant="contained"
                   marginTop="200px"
                   >
                       Contact Us
                   </Button>

                   <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
             </Box>
     </Container> 
      
  );
}

export default AboutUs;
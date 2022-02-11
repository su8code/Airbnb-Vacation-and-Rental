import React from 'react';
import './Card.css'

import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

function Card({ src, title, description, price }) {

       const [open, setOpen] = React.useState(false);
  
        const handleToClose = (event, reason) => {
            if ("clickaway" === reason) return;
            setOpen(false);
        };
  
            const handleClickEvent = () => {
                setOpen(true);
            };

    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
            <Button className="" onClick={handleClickEvent}>
              CheckOut
            </Button>
            <Snackbar 
                anchorOrigin={{
                horizontal: "left",
                vertical: "bottom",
                }}
                open={open}
                autoHideDuration={2000}
                message="Internet Connection Not Available"
                onClose={handleToClose}
                action={
                <React.Fragment>
                    <IconButton
                    size="small"
                    aria-label="close"
                    color="red"
                    onClick={handleToClose}
                    >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }/>
        </div>
    )
}

export default Card
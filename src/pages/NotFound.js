import React from 'react'
import './NotFound.css'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    notFound: {
        backgroundColor: "lightblue",
        color: "red",
        height: "100vh",
        display: "flex",
        fontSize: "35px",
        justifyContent: "center",
        alignItems: "center"

    }
}));
function NotFound() {
    const classes = useStyles();
    return (
        <div className={classes.notFound}>
            <h1>404 - Not Found</h1>
        </div>
    )
}

export default NotFound

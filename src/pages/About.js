import React from 'react';

import{makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>({
    root:{
        background:theme.palette.secondary.main,
        color:theme.palette.secondary.contrastText,
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            About
        </div>
    );
};

export default About;
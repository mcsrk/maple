import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Layout} from "antd";

const {Header} = Layout;

const useStyles = makeStyles((theme)=> ({
    header:{
        backgroundColor:"#15f624",
    }
}));

const CustomHeader = () => {
    const classes = useStyles();
    return (
        <Header className={classes.header}>
            Header
        </Header>        
    );
};

export default CustomHeader;
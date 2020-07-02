import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout, Menu } from "antd";
import theme from "../../misc/AppTheme";
const { Sider } = Layout;

const useStyles = makeStyles ((theme) => ({
  sider: {
    backgroundColor:"#7514f4",
  },
}));

const CustomSider = (props) => {
  const classes = useStyles();

  const toHome = () =>{
    props.setOption(1);
  };
  const toAbout = () =>{
    props.setOption(2);
  };

  return (
    <Sider className={classes.sider}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["home"]}
        style={{ height: "100%", position: "fixed" }}
      >
          <Menu.Item key= "home" onClick={toHome}>
              Home
          </Menu.Item>
          <Menu.Item key= "about" onClick={toAbout}>
              About
          </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default CustomSider;

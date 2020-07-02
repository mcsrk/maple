import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Layout } from "antd";
import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Theme from "./misc/AppTheme";
import MySider from "./components/sider/CustomSider";
import MyHeader from "./components/header/CustomHeader";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const {Content} = Layout;

const useStyles = makeStyles((theme) =>({
content:{
  width: "100%",
        zIndex: 0,
        paddingBlockStart: "4%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems:"flex-end",
        backgroundSize: "cover",
        background: "#fafafa",
}
}));

const App = () => {
  const[option, setOption] = useState(1);
  return (
    <div className="App">
      <Layout>
        <MyHeader/>
        <MySider setOption={setOption}/>
        <Content>
          {option===1 && <Home/>}
          {option===2 && <About/>}
        </Content>
      </Layout>
    </div>
  );
};

export default App;

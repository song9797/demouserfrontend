import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "./components/app-bar/AppBar";
import EmptyPage from "./components/empty-pages/EmptyPage";
import OrderList from "./components/main-pages/order-list/OrderList";
import SignInPage from "./components/signin-pages/SignInPage";
import SignUpPageBuyer from "./components/signup-pages/SignUpPageBuyer";
import SignUpPageSeller from "./components/signup-pages/SignUpPageSeller";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // 전체 테마 메인색상 설정
      main: "#fff",
    },
    secondary: {
      main: "#111",
    },
  },
  typography: {
    fontFamily: ["AppleSDGothicNeo"].join(","),
    h6: {
      fontFamily: "SangSangShinb",
    },
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar />
        <Switch>
          <Route path="/order/:key" component={OrderList} />
          <Route path="/signin" component={SignInPage}/>
          <Route path="/signup-seller" component={SignUpPageSeller}/>
          <Route path="/signup-buyer" component={SignUpPageBuyer}/>
          {/* 
        <Route path="/menu" component={MenuPage} />
        <Route path="/mypage" component={MyPage} />
        */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

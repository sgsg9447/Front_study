import React from "react";
import { BrowserRouter, Redirect, Route, Routes, Switch } from "react-router-dom";
import Result from './pages/Result';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import './App.css';
import AppStateProvider from "./providers/AppStateProvider";

const App = () => {
  return (
    <>
      <AppStateProvider>
        <BrowserRouter>
          <Route path="/" exact={true} component={Home} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/result" component={Result} />
          <Route path="/notfound" component={NotFound} />
        </BrowserRouter>
      </AppStateProvider>
    </>
  ) ;
};

export default App;

import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Index from "./components/index/index";
import BuyTicket from "./components/buy-ticket/BuyTicket";
import Market from "./components/market/market";
import News from "./components/news/news";
import App from "./App";
import IndexDetail from "./components/index/index-detail/IndexDetail";
import ZIndex from "./components/loop/z-index/ZIndex";
import Level from "./components/loop/level/Level";


// 声明路由
const router = (
    <HashRouter>
        <App>
            <Switch>
                {/* <Route path="/index" render ={ ()=>
                    <Index>
                        <Switch>
                            <Route path="/index/detail" component = { IndexDetail }/>
                            <Redirect to="/"/>
                        </Switch>
                    </Index>
                }
                /> */}
                <Route path="/index" component={ Index }/>
                <Route path="/index/detail" component={ IndexDetail }/>
                <Route path="/buy-ticket" component={ BuyTicket }/>
                <Route path="/market" component={ Market }/>
                <Route path="/new" component={ News }/>
                <Route path="/loop" render={()=>
                    <ZIndex>
                        <Route path="/level" component={ Level }/>
                    </ZIndex>
                }/>
                <Redirect from="*" to="/index"/>
            </Switch>
        </App>
    </HashRouter>
)

export default router;
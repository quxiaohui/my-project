import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import {withRouter} from "react-router-dom";

class Header extends React.Component {

    // 渲染页面
    render () {
        return (
            <div className="header">
                <div><NavLink to="/index" className="active">首页</NavLink></div>
                <div><NavLink to="/buy-ticket" >购票</NavLink></div>
                <div><NavLink to="/market">购物车</NavLink></div>
                <div><NavLink to="/new">轮播</NavLink></div>
                <div><NavLink to="/loop">直播</NavLink></div>
                <div><NavLink to="/index">发现</NavLink></div>
                <div><NavLink to="/index">社区</NavLink></div>
                <div><NavLink to="/index">会员</NavLink></div>
            </div>
        )
    }
}

export default withRouter(Header);
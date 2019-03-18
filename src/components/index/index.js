import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./index.scss"
import store from "../../store/store";

class Index extends React.Component {

  constructor(){
    super();
    // 定义状态
    this.state = {
      list: ["111","222","333","444","555","666","777","888","999","000"],
      url: "llll"
    }
  }

  // 点击button
  onClick = () => {
    this.props.history.push(`/new`);
    console.log(this.props);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");

    store.dispatch({
      type: "indexTitle",
      payload: this.state.url
    })

     // 监听页面滚动
     window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
      const docHeight = document.documentElement.offsetHeight;
      const seeHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : window.innerHeight;

      console.log("scrollTop" + scrollTop);
      console.log("docHeight" + docHeight);
      console.log("seeHeight" + seeHeight);
      if(scrollTop + seeHeight >= docHeight) {
        this.setState({
          list: [...this.state.list, "xxx", "qqq", "lll"]
        })
      }

      if(scrollTop > 200 ){
        document.querySelector(".to-top").style.display = "block";
      } else {
        document.querySelector(".to-top").style.display = "none";
      }
    }

  }

  // 去顶部
  onToTop = () => {
    const speed = 20;
    var id = setInterval(()=>{
      var scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
      if(document.documentElement.scrollTop === 0){
        clearInterval(id);
      }
      document.documentElement.scrollTop = scrollTop - speed;
    }, 20)

  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  

  render() {
    console.log("render");
    return (
      <div>
        <Link to={ {pathname: "market", search: "111"} }>index</Link> 
        {
          this.state.list.map((item,index)=>
          <div onClick={ this.onClick } className="list" key={ index }>{ item }</div>
          )
        }

        <div className="to-top" onClick={ this.onToTop }></div>
      </div>
    )
  }
}

export default withRouter(Index);

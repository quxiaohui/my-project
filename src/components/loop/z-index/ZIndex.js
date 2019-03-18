import React from "react";

import "./zindex.scss";

// 声明当前是第几张图片
var currentIndex = 0;
var id;
class ZIndex extends React.Component {

  componentDidMount() {
    // 自动轮播
    id = setInterval(this.onNext, 2000);
  }

  componentWillUnmount() {
    clearInterval(id);
  }

  // 下一张轮播
  onNext = () => {

    // 获取页面节点
    var img = document.querySelectorAll(".swiper-list li");

    // 一共有几张图片
    var len = img.length;

    // 切换到下一张
    currentIndex ++;
    
    // 如果到了最后一张将currentIndex改变成第一张0
    if( currentIndex === len) {
      currentIndex = 0;
    }

    // 将当前图片的zindex清除
    document.querySelector(".swiper-img").className = "";
    document.querySelector(".focus").className = "";

    // 将要显示的图片的zindex设置为1
    img[currentIndex].className = "swiper-img";
    document.querySelectorAll(".points div")[currentIndex].className = "focus"
  }

  // 上一张
  onPrev = () => {

    // 获取页面节点
    var img = document.querySelectorAll(".swiper-list li");

    // 一共有几张图片
    var len = img.length;

    // 切换到上一张
    currentIndex --;

    // 如果是第一张，就让currentIndex的值微最后一张图片的值
    if (currentIndex === -1){
      currentIndex = len - 1
    }

     // 将当前图片的zindex清除,改变小点点的焦点
     document.querySelector(".swiper-img").className = "";
     document.querySelector(".focus").className = "";

     // 将要显示的图片的zindex设置为1
     img[currentIndex].className = "swiper-img";
     document.querySelectorAll(".points div")[currentIndex].className = "focus"

  }

  // 鼠标移入图片
  onMouseMove = () => {
    clearInterval(id)
  }

  // 鼠标移出图片
  onMouseLeave = ()=> {
    // 自动轮播
    id = setInterval(this.onNext, 2000)
  }

  // 渲染页面
  render() {

    return (
      <div>
        <div className="swiper" onMouseMove = { this.onMouseMove } onMouseLeave = { this.onMouseLeave }>
          {/* 图片 */}
          <ul className="swiper-list">
            <li className="swiper-img"><img src="/images/001.jpg" alt=""/></li>
            <li><img src="/images/002.jpg" alt=""/></li>
            <li><img src="/images/003.jpg" alt=""/></li>
            <li><img src="/images/004.jpg" alt=""/></li>
            <li><img src="/images/005.jpg" alt=""/></li>
          </ul>
          {/* 上一张下一张 */}
          <div className="swiper-btn-prev" onClick={ this.onPrev }>上一张</div>
          <div className="swiper-btn-next" onClick={ this.onNext }>下一张</div>
          <div className="points">
            <div className="focus"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ZIndex;

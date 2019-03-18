import React from "react";
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import "./news.scss";

var current = 0;
var focusIndex = 1;

class News extends React.Component {

  // 定义状态
  constructor(){
    super();
    this.state = {
      current: 0
    }
  }
  
  // 页面加载完成
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: true
    });

    // setInterval(this.onToNext,2000)
  }

  // 上一张
  onToPrev = () => {
    current += 1;
    focusIndex--;
    const ul = document.querySelector(".slide-ul");

    const focus = document.querySelectorAll(".point-circle");
    const focuses = document.querySelector(".focus");
    focuses.className = "point-circle";
    
    if (current === 1){
      ul.style.transition = "none";
      current = -4;
    } else {
      ul.style.transition = 'left 2s';
    }

    // 判断子弹在第几位
    if( focusIndex === 0) {
      focusIndex = 5;
    }

    focus[focusIndex-1].className = "point-circle focus";

    const left = (300 * current) + "px";
    ul.style.left = left;
  }

  // 下一张
  onToNext = () => {
    current -= 1;
    focusIndex ++;
    const left = (300 * current) + "px";
    const ul = document.querySelector(".slide-ul");

    const focus = document.querySelectorAll(".point-circle");
    const focuses = document.querySelector(".focus");
    focuses.className = "point-circle";
    ul.style.left = left;

    // 如果最后一张图
    if (current === -5){
      ul.style.left = 0;
      current = 0;
      ul.style.transition = "none";
    } else {
      ul.style.transition = "left 2s";
    }

    // 判断子弹在第几位
    if( focusIndex === 6) {
      focusIndex = 1
    }
    
    focus[focusIndex-1].className = "point-circle focus";

  }

  render() {
    return (
      <div>
          {/* 插件 */}
         <div className="swiper-container" style={ {height:100, backgroundColor: "red"} }>
          <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
            <div className="swiper-slide">Slide 5</div>
            <div className="swiper-slide">Slide 6</div>
            <div className="swiper-slide">Slide 7</div>
            <div className="swiper-slide">Slide 8</div>
            <div className="swiper-slide">Slide 9</div>
            <div className="swiper-slide">Slide 10</div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>

        <br/><br/><br/><br/>

        {/* 原生 */}
        <div className="slide">
          <ul className="slide-ul">
            <li><img className="img" src="/images/001.jpg" alt="" /></li>
            <li><img className="img" src="/images/002.jpg" alt="" /></li>
            <li><img className="img" src="/images/003.jpg" alt="" /></li>
            <li><img className="img" src="/images/004.jpg" alt="" /></li>
            <li><img className="img" src="/images/005.jpg" alt="" /></li>
            <li><img className="img" src="/images/001.jpg" alt="" /></li>
          </ul>
          <div onClick={ this.onToPrev } className="slide-btn-pre">上一张</div>
          <div onClick={ this.onToNext } className="slide-btn-next">下一张</div>
        </div>
        {/* 小圆点 */}
        <div className="point">
          <div className="point-circle focus"></div>
          <div className="point-circle"></div>
          <div className="point-circle"></div>
          <div className="point-circle"></div>
          <div className="point-circle"></div>
        </div>
      </div>
    )
  }
}

export default News;

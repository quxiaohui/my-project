import React from "react";
import store from "../../store/store"

class BuyTicket extends React.Component {
  constructor(){
    super();
    this.state={
      title: store.getState(),
      file: "000",
      src: ""
    }
  }

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        title: store.getState()
      })
    })
  }

  onChange = (ev) => {
    const myFile = document.getElementById("file");
    console.log(myFile.files[0]);  // 文件名
    console.log(myFile.value);     // 文件扩展名
    this.setState({
      file: myFile.files[0].name,
      src: myFile.value
    })
  }

  onTextChange = () => {
    const text = document.getElementById("text");
    console.log(text.value.trim())
  }

  onRadioChange = () => {
    const radio = document.querySelector("#radio");
    console.log(radio.checked)
  }

  render() {
    return (
      <div>
        BuyTicket
        <div>
          { this.state.title }
        </div>

        <input type="file" id="file" onChange = { this.onChange } />

        <input type="text" id = "text" onChange = { this.onTextChange }/>

        <input type="checkbox" id="radio" onChange = { this.onRadioChange }/>

        { this.state.file }
        
      </div>
    )
  }
}

export default BuyTicket;

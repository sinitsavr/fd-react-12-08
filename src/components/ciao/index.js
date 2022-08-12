import { Component } from "react";

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  handlerSwitch = ()=>{
    this.setState({isHi: !this.state.isHi})
}
  render() {
    const {fname, sname} = this.props;
    const {isHi} = this.state;
    return (
      <>
        <h2>
          
          {isHi ? "Hello" : "Bye"}, {fname} {sname}
        </h2>
        <button onClick ={this.handlerSwitch}>switch isHi</button>
        ;
      </>
    );
  }
}
export default Ciao;


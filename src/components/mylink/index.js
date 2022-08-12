import { Component } from "react";

class Link extends Component {
  constructor(props){
  super(props)
  }
  render(){ 
    const {className, href}=this.props;
  return<>
  <a className={className} href={href}>wiki</a>
  <a className={className} href={href}>github</a>
  </>
  }
}
  export default Link
import { Component } from "react";
import IterationSample from "./IterationSample";
// import Counter from "./Counter"
// import EventPractice from "./EventPractice";
// import Say from "./Say";
import ScrollBox from "./ScrollBox";
// import VaildationSample from "./ValidationSample";

class App extends Component {
  render() {                                                                                                                                                                                                                                                                                                                                                                                              
    return( 
    <div>
      <IterationSample/>
      {/* <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
      <button onClick={()=>this.scrollBox.scrollToBottom()}>
        맨 밑으로
      </button> */}
    </div>
    );
  };
}  

export default App;                                   
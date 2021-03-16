import React from 'react'
//import {Component} from 'react'
//^this with alt class def below
import Greeting from './Greeting'

class App extends React.Component{
//class App extends Component{

  sendInfo(info) {
    console.log(info)
  }

  render() {
    const name = 'Dalia'

    //must have render method otherwise error
    return (
      //must return only 1 element

    <div className="App">
      <h1>Intro to React</h1>
      <Greeting name={name} callBackFn={this.sendInfo}/>
      {/* to embed another component in this one AND pass it props via a function
      so that it is bidirectionally available */}
      {/* <Greeting name={name}/> */}
      {/* to embed another component into this one AND pass it props */}
      {/* <Greeting/> */}
      {/* to embed another component into this component */}
      {/* <h2>Hi {name}</h2> */}
      {/* to embed js into JSX */}
      {/* <Greeting/> */}
    </div>
  // this is JSX, and is NOT HTML. We can embed or interpolate js into in using curlies
  );
  }
}

export default App;

//events
//just like in vanilla js
//the event takes a function that would be
//invoked when the event happens
//* we do not include the curlies when we 
//pass it in because we are referencing it, not invoking it
//can either pass the func (no invocation), or, if you are 
//passing an argument, like event, you can define a function 
//as the arg of the event handler and pass it through there (e.g. (event) => this.handleClick(event))

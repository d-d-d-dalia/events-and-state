import React from 'react'
import Chance from 'chance'
let chance = new Chance()

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {names: []};
    }

    handleDelete(){
        this.setState({
            names: this.state.names.slice(0, -1)
        })
    }

    handleClick(arg){
        console.log('handle click')
        console.log(arg)

        this.setState({
            names: [...this.state.names, chance.first()]
        })

        // this.setState((state) => ({names:[...state.names, "jenn"]}))

        // this.setState((state)=>{
        //     return {names: [...state.names, 'jenn']}
        // })
    }

    render(){
        return (
            <div>
                <h1>Greeting Component!</h1>
                <h3>Hi, {this.props.name}, a name passed as props!</h3>
                {/* <h2>{this.props.callBackFn("sending info from child to parent as props!")}</h2> */}
                {/* <button onClick={this.props.callBackFn("sending info from child to parent as props!")}>Click to send information back to parent! </button> */}
                {/* will this work? */}
                {/* no, because it is invoking it automatically, (in order to send the argument) */}
                <h3> {this.props.callBackFn("sending info from child to parent as props!")}</h3>
                <button onClick={()=> this.props.callBackFn('sending info from child to parent as props with an event handler')} >click this to use an event</button>
                {/* instead, we need to pass a function as the argument, which when clicked
                will execute the function in it's body */}
                
                <br></br>
                <button onClick={()=> this.handleClick('console.logging handleClick')} >click this to use an event and trigger an instance method on the class</button>
                <br></br>
                <button onClick={()=> this.handleDelete('console.logging info as a result of an event triggering an instance method on the class (handleDelete)')}>delete a name</button>
                
                {this.state.names.map((name)=> <p>{name}</p>)}
            </div>
        )
    }
}

export default Greeting
import React from 'react';

/* example of class  component */
class Message extends React.Component{

    constructor()
    {
        super();
        this.state={
            message:"Hello Visitor"
        }
    }

    changeMessage()
    {
        this.setState({
            message:"Thank You for Subscribing"
        })
    }

    render(){

        //when user clicks on 'Subscribe' button,state changes to 'Thank You for Subscribing'
        return (
        
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>

        );
    }
}


export default Message;
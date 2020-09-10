import React from 'react';

/* reference : './components/props.txt','./components/state.txt' */
/* example of class  component */
class Welcome extends React.Component{

    render(){

        //this keyword is available in class component
        return (
        
            <div>
                <h1>Greeting from Class Component</h1>
                <h2>{this.props.name} a.k.a {this.props.heroName}</h2>
            </div>

        );
    }
}


export default Welcome;
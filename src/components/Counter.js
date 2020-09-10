import React, { Component } from 'react'

 /* reference:'./components/state.txt' */

 class Counter extends Component {

    constructor()
    {
        super();
        this.state={ count:0 }
    }

    increment()
    {
        /* PART 1
        modifying the 'count' state directly 

        this.state.count=this.state.count+1;
        console.log(this.state.count);
        */

        /* PART 2 
        this.setState({ count:this.state.count+1},()=>{console.log(this.state.count);})
        */



        /* PART 3
        when you need to act on previous state's value, USE BELOW:
        <though value of 'props' is not used,you can depending upon requirements> */
        this.setState(
            (prevState,props)=>({count:prevState.count+1}),
            ()=>{ console.log(this.state.count);}
        );

    }


    incrementByFive()
    {
        /* THIS WAY OF INCREMENTING DOES NOT WORK IF PART 2 IMPEMENTS 'increment()' FUNCTION

        React combines all 'increment()' statements as one
        and executes in one go.In this way,each state does not act on previous state's count value
        and hence count=1 in UI and console.log() prints 1 ,five times when initial counter value=0

        SO,WHENEVER YOU NEED TO ACT ON PREVIOUS STATE'S VALUE,USE PART 3 OF 'increment()' IMPLEMENTATION

        */

        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
         
        

        
        
        
    }


    render() {
        return (
            <div>
                <h2>
                    count - {this.state.count}
                </h2>
                <button onClick={()=>{ this.increment()}}>Increment</button>
                <button onClick={()=>{ this.incrementByFive( )}}>Increment by 5</button>
            </div>
        )
    }
}

export default Counter

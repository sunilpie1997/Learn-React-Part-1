import React from 'react';

/* we will impement without usinf=g JSX */
const HelloWithoutJsx=()=>{

    /*  Here,second parameter to 'createElement' is null,
        but we can add any property to 'div' tag we want.
        check out below examples    */

    //Example 1

    /*
    return React.createElement('div',null,"Hello Sunil (Without JSX)");  
    */

    
    //Example 2

    /*
    return React.createElement(
    'div',

    {id:"hello_id",className:"hello_class"},

    "<h1>Hello Sunil (Without JSX)</h1>");
    
    */
    
    // with 'h1' tag as child of 'div' tag


    //Example 3

    return React.createElement(
        
    'div',

    {id:"hello_id",className:"hello_class"},

    React.createElement('h1',null,"Hello Sunil (Without JSX) ")
    
    );

}

export default HelloWithoutJsx;

//NOW WE UNDERSTOOD,WHY WE IMPORT 'React' EVENT THOUGH WE DON'T USE THAT KEYWORD
//BECAUSE INTERNALLY,EVERY JSX IS CONVERTED TO React.createElement().
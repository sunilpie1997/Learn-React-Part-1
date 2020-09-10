/* needed when using JSX,even though 'React' keyword is not used below */
import React from 'react';

/* example of functional  component */

const Greet=(props)=>
{

return (

<div>

    <h1>Greetings from Functional Component</h1>

    <div>
        <h2>This is {props.name} a.k.a {props.heroName}</h2>
        <h3>{props.children}</h3>
    </div>

</div>

);

}
/* defult export:means we can give any name to it when importing in other component */
export default Greet;
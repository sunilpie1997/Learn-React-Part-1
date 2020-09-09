/* needed when using JSX,even though 'React' keyword is not used below */
import React from 'react';

/* example of functional (stateless) component */

const Greet=()=><h1>Greetings from Functional Component</h1>

/* defult export:means we can give any name to it when importing in other component */
export default Greet;
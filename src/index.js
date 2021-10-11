import React from 'react'
import ReactDom from 'react-dom'

import './index.css';
import App from './App';

// function Greeting(){
//   return (
//     <div>
//       <Person/>
//       <Message/>

//     </div>
//   );
// }

// const Person = ()=> <h2>John Doe</h2>
// const Message = () => {
//   return <p>This is my message. Thank you very much</p>
// }

ReactDom.render(<App/>, document.getElementById('root'))
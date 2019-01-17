import React from 'react'
import PropTypes from 'prop-types';


const Greeting = (props) => {
    Greeting.propTypes = {
        name: React.PropTypes.string,
        age: React.PropTypes.number
      }
 
    const {name , age} = props;
    return <p>{name} your {age}react is awesome and your learning it</p>
   
    
}



export default Greeting;
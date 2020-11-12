import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Dashboard from './Dashboard'


const Home = (props) => {
const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }
return (
   
    <div className="auth">
      <br></br>
      { 
        props.loggedInStatus ? null : <Link to='/signup'>Sign Up</Link>
      }
      <br></br>
      { 
        props.loggedInStatus ? <button class="rux-button"><Link style={{color: "white"}} to='/logout' onClick={handleClick}>Log Out</Link></button> : <Link to='/login'>Log In</Link>
      }
      { 
        props.loggedInStatus ? <Dashboard /> : null
      }

    </div>
  );
};
export default Home;
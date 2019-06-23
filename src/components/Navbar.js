import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{

  render(){
    return(
      <div className="nav">
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/posts/new'>New Post</Link></div>
        <div><Link to='/friends'>Friends</Link></div>
      </div>
    )
  }
}

export default Navbar
import React, { Component } from 'react'

import StarfieldAnimation from 'react-starfield-animation'

class Starfield extends Component {
  render () {
    return (
        <div>
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <h1 className= "title">Welcome to the Astro App! Please log in or sign up to view your Dashboard.</h1>
      </div>

    )
  }
}

export default Starfield;
import React from 'react'

import Schedule from 'pages/Schedule'
import Streams from 'pages/Streams'

import 'styles/index.sass'


class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <Schedule />
        <Streams />
      </div>
    )
  }
}

export default App

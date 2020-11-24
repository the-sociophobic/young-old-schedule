import React from 'react'

import Schedule from './Schedule'
import Streams from './Streams'

import './index.sass'


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

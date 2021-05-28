import React from 'react'

import Schedule from 'pages/Schedule'
import Streams from 'pages/Streams'
import Videos2021 from 'pages/Videos2021'

import 'styles/index.sass'


class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        {/* <Schedule /> */}
        <Streams />
        <Videos2021 />
      </div>
    )
  }
}

export default App

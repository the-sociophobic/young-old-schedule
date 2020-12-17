import React from 'react'


class Video extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }

    this.iframeRef = React.createRef()
  }

  // componentDidMount = () =>
  //   this.props.cover && (
  //     this.checkContentsInterval = setInterval(() => {
  //       const imgElem = this.iframeRef && this.iframeRef.current &&
  //         this.iframeRef.current.contentWindow.document.getElementsByClassName('vid-card_img')

  //       // console.log(imgElem)
  //       if (imgElem && imgElem[0]) {
  //         clearInterval(this.checkContentsInterval)
  //         this.checkContentsInterval = -1
  //         imgElem[0].src = this.props.cover
  //       }
  //     }, 500))

  // componentWillUnmount = () =>
  //   this.checkContentsInterval && this.checkContentsInterval !== -1 &&
  //     clearInterval(this.checkContentsInterval)

  render = () =>
    <>
      <iframe
        ref={this.iframeRef}
        src={this.props.src}
        className="App__video"
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
        title={this.props.title}
      />

      {this.props.cover && !this.state.clicked &&
        <div
          className="App__video__cover"
          onClick={() => this.setState({ clicked: true })}
        >
          <img
            className="App__video__cover__img"
            src={this.props.cover}
          />
          <div class="App__video__cover__play">
            <svg class="svg-ic svg-ico_media_play_16 svg-ic48 vid_play-ic" viewBox="0 0 16 16">
              <path d="M5 4.072a.7.7 0 0 1 1.122-.559l5.204 3.928a.699.699 0 0 1 0 1.118l-5.204 3.928A.7.7 0 0 1 5 11.928V4.072z" fill-rule="evenodd" fill="white"></path>
            </svg>
          </div>
        </div>
      }
    </>

} 

export default Video
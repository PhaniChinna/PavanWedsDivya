import {Component} from 'react'

import {Howl} from 'howler'

import {withRouter} from 'react-router-dom'

// import TypingText from '../TypingHeading/typing'
import './HomePage.css'

const ImagesList = [
  'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709316255/PavanDivya_11_dcbswn.png',
  'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709316255/PavanDivya_14_iatxw5.png',
  'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709316256/PavanDivya_12_ajynor.png',
  'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709316256/PavanDivya_13_jwkos4.png',
]

const audioClips = [
  {
    id: 1,
    sound:
      'https://res.cloudinary.com/dkwof0tuj/video/upload/v1709732788/iSongs_mp3cut.net_wcfcoz.mp3',
    label: 'View',
  },

  // Add more audio clips as needed
]

class HomePageData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      useImageContainer: 0,
      audioPlayer: null,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        useImageContainer:
          prevState.useImageContainer === ImagesList.length - 1
            ? 0
            : prevState.useImageContainer + 1,
      }))
    }, 4000)

    // this.weddingTimeout = setTimeout(() => {
    //   this.setState({showWeddingInvitation: true})
    // }, 6000)

    // this.buttonTimeout = setTimeout(() => {
    //   this.setState({showButton: true})
    // }, 12000)

    // Initialize audio player
    this.audioPlayer = new Howl({
      src: [audioClips[0].sound],
      html5: true,
      loop: true,
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    clearTimeout(this.weddingTimeout)
    clearTimeout(this.buttonTimeout)
    // Stop audio player
    if (this.audioPlayer) {
      this.audioPlayer.stop()
    }
  }

  SoundPlay = src => {
    // Stop previously playing audio, if any
    const {audioPlayer} = this.state
    if (audioPlayer) {
      audioPlayer.stop()
    }
    // Initialize new Howl instance with the provided src
    const newAudioPlayer = new Howl({
      src: [src],
      html5: true,
      loop: true,
    })
    // Play the sound
    newAudioPlayer.play()
    // Update state with the new audio player instance
    this.setState({audioPlayer: newAudioPlayer})
  }

  handleClickNavigation = () => {
    const {history} = this.props
    history.push('/Pavan-Divya-Images')
    this.SoundPlay(audioClips[0].sound) // Play the MP3 on navigation
  }

  render() {
    const {useImageContainer} = this.state

    return (
      <div className="MainPageContainer">
        <div>
          <img
            className="PavanDivyaImages"
            src={ImagesList[useImageContainer]}
            alt="SlideShow"
            srcSet={`${ImagesList[useImageContainer]} 1x, ${ImagesList[useImageContainer]} 2x`}
          />
        </div>
        <div style={{color: 'blue'}}>
          {/* <TypingText text="Yarram's" speed={200} style={{color: 'blue'}} /> */}
          <h1 className="YarramFamily">Yarram's</h1>
        </div>
        <div className="WeddingText">
          <div>
            {/* <TypingText text="Wedding Invitation" speed={200} /> */}
            <h1 className="Wedding">Wedding Invitation</h1>
          </div>
        </div>
        <div className="ButtonContainer">
          {audioClips.map(clip => (
            <button
              type="button"
              className="ButtonText"
              key={clip.id}
              onClick={
                (() => this.SoundPlay(clip.sound), this.handleClickNavigation)
              }
            >
              {clip.label}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(HomePageData)

// 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

import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePageData from './components/HomePage/HomePage'
import PhotosData from './components/PhotosPage/Photos'
import OurJourney from './components/OurJourney/journey'
import WeddingInvitationData from './components/WeddingInvitation/Wedding'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageData} />
          <Route path="/Pavan-Divya-Images" component={PhotosData} />
          <Route path="/Pavan-Divya-journey" component={OurJourney} />

          <Route path="/wedding-invitation" component={WeddingInvitationData} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

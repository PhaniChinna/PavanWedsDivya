import ViewHHeaderList from '../HeaderPage/HeaderPage'
import MyTimeline from '../ReactChono/ReactChono'

import './journey.css'

function OurJourney() {
  return (
    <>
      <div>
        <ViewHHeaderList />
      </div>
      <div className="JourneyLaptop">
        <MyTimeline />
      </div>
      <div className="JourneyMobile">
        <MyTimeline />
      </div>
    </>
  )
}

export default OurJourney

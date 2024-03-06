import {Link} from 'react-router-dom'

import './HeaderPage.css'

import {IoMdPhotos} from 'react-icons/io'
import {GiJourney} from 'react-icons/gi'
import {MdOutlineInsertInvitation} from 'react-icons/md'

function ViewHHeaderList() {
  return (
    <>
      <div className="ViewHeadingContainer">
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1709365355/Pavan_Divya_mhzojv.png"
              alt="PavanDivya"
              className="PavanDivya"
            />
          </Link>
        </div>
        <div>
          <ul className="UnOrderList">
            <Link to="/Pavan-Divya-Images">
              <li className="PhotosData">
                <IoMdPhotos className="IoPhoto" />
                Photos
              </li>
            </Link>
            <Link to="/Pavan-Divya-journey">
              <li className="OurJourney">
                <GiJourney className="GiJourney" />
                Our Journey
              </li>
            </Link>
            <Link to="/wedding-invitation">
              <li className="invitation">
                <MdOutlineInsertInvitation className="Invitation" /> Invitation
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="MobileContainer">
        <div className="MobileViewContainer">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1709535654/download_15_c9iiz0.png"
              alt="PavanDivya"
              className="MobileLogoContainer"
            />
          </Link>
          <div className="ListContainerData">
            <ul className="UnOrderListCardContainer">
              <Link to="/Pavan-Divya-Images">
                <li className="ListCardPhotos">
                  <IoMdPhotos className="MdPhotos" />
                  Photos
                </li>
              </Link>
              <Link to="/Pavan-Divya-journey">
                <li className="ListCardJourney">
                  <GiJourney className="ListCardJourneyIcon" />
                  Our Journey
                </li>
              </Link>
              <Link to="/wedding-invitation">
                <li className="ListCardInvitation">
                  <MdOutlineInsertInvitation className="MdOutlineCard" />
                  Invitation
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewHHeaderList

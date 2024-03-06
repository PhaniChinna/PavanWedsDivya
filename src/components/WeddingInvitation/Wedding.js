import ViewHHeaderList from '../HeaderPage/HeaderPage'
import './wedding.css'

function WeddingInvitationData() {
  return (
    <>
      <div>
        <ViewHHeaderList />
      </div>
      <div className="WeddingDataLap">
        <div>
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1709486146/With_the_blessings_of_Lord_Ganesha_and_together_with_their_families_atf1k7.png"
            alt="Invitation"
            className="weddingImagesCont"
          />
        </div>
      </div>
      <div className="MobileData">
        <div>
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1709486146/With_the_blessings_of_Lord_Ganesha_and_together_with_their_families_atf1k7.png"
            alt="Invitation"
            className="MobileWeddingInvitation"
          />
        </div>
      </div>
    </>
  )
}

export default WeddingInvitationData

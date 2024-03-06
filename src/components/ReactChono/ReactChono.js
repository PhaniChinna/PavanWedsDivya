import {Chrono} from 'react-chrono'

const events = [
  {
    title: 'Event 1',
    cardTitle: 'Pelli Choopulu',
    key: '',
    cardSubtitle: 'On December 21',
    media: {
      type: 'IMAGE',
      source: {
        url:
          'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709703945/download_17_d289pg.png',
        style: {
          height: '200px',
          width: '200px',
        },
      },
    },
  },
  {
    title: 'Event 2',
    cardTitle: 'Acceptance',
    key: '',
    cardSubtitle: 'on December 27',
    media: {
      type: 'IMAGE',
      source: {
        url:
          'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709701706/image-150x150_upiaxq.png',
        style: {
          height: '200px',
          width: '200px',
        },
      },
    },
  },
  {
    title: 'Event 3',
    cardTitle: 'Vindhu',
    key: '',
    cardSubtitle: 'on January 8',
    media: {
      type: 'IMAGE',
      source: {
        url:
          'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709704286/vindhuP_j946mv.png',
      },
    },
  },
  {
    title: 'Event 4',
    cardTitle: 'Spoken In Mobile at First Time ',
    cardSubtitle: 'on January 15',
    key: '',
    media: {
      type: 'IMAGE',
      source: {
        url:
          'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709704349/Call_FirstTimep_pvql5n.png',
      },
    },
  },
  {
    title: 'Event 5',
    key: '',
    cardTitle: 'Lagnaalu',
    cardSubtitle: 'on February 25',
    media: {
      type: 'IMAGE',
      source: {
        url:
          'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709704501/PLagnalu-removebg-preview_he45wg.png',
      },
    },
  },
  {
    title: 'Event 6',
    cardTitle: 'Marriage',
    key: '',
    cardSubtitle: 'on March 27',
    media: {
      type: 'IMAGE',
      source: {
        url:
          'https://res.cloudinary.com/dkwof0tuj/image/upload/v1709702489/pngwing.com_ff7qvw.png',
      },
    },
  },
]

function MyTimeline() {
  return <Chrono key="" items={events} mode="VERTICAL_ALTERNATING" />
}

export default MyTimeline

import AboutPicture from '../assets/img/about.jpg';
import CommercialsPicture from '../assets/img/commercials.jpg';
import MusicsPicture from '../assets/img/musics.jpg';
import ReviewsPicture from '../assets/img/reviews.jpg';

const constant = [
  { 
    type: 'about',
    path: AboutPicture,
    data:'',
    showAbout: true,
    showListItems: false,
    showReviews: false
  },
  { 
    type: 'commercials',
    path: CommercialsPicture,
    data: [
      // {
      //   url: 'boucheron',
      //   name: 'Boucheron', 
      //   src: "https://player.vimeo.com/video/243651301?autoplay=0&amp;byline=0&amp;portrait=0",
      //   text: 'Boucheron (2017)',
      // },
      // {
      //   url: 'st&sat',
      //   name: 'ST&SAT', 
      //   src:"https://player.vimeo.com/video/233518989?autoplay=0&amp;byline=0&amp;portrait=0",
      //   text: 'ST&SAT (2017)',
      // },
      // {
      //   url: 'horizons',
      //   name: 'Horizons',  
      //   src:"https://player.vimeo.com/video/145041941?autoplay=0&amp;byline=0&amp;portrait=0",
      //   text: 'Horizons /  Ground Zero (2016)',
      // },
      {
        url: 'emirates',
        name: 'Emirates',  
        src:"https://player.vimeo.com/video/218551569?autoplay=0&amp;byline=0&amp;portrait=0",
        text: 'Emirates (2017)',
      },
      {
        url: 'nike',
        name: 'Nike',  
        src:'https://player.vimeo.com/video/214241623?autoplay=0&amp;byline=0&amp;portrait=0',
        text: 'Nike (2016) /// Production Phillip Kay',
      },
      {
        url: 'omega',
        name: 'Omega',  
        src:'https://player.vimeo.com/video/199724010?autoplay=0&amp;byline=0&amp;portrait=0',
        text:'Omega (2014)',
      },
      {
        url: 'dulux',
        name: 'Dulux',  
        src:'https://player.vimeo.com/video/199723961?autoplay=0&amp;byline=0&amp;portrait=0',
        text: 'Dulux (2013)',
      },
      {
        url: 'nissan',
        name: 'Nissan',  
        src:'https://player.vimeo.com/video/199724048?autoplay=0&amp;byline=0&amp;portrait=0',
        text: 'Nissan (2011)',
      }
    ],
    showAbout: false,
    showListItems: true,
    showReviews: false
  }
  ,
  {
    type: 'music',
    path: MusicsPicture,
    data: [
      {
        url: 'secret-things',
        name: 'Secret Things', 
        src: 'https://player.vimeo.com/video/96418427?autoplay=0&byline=0&portrait=0',
        text: '\'Secret Things\' from the Motorifik album \'Secret Things\''
      },
      {
        url: 'flames-on-the-ocean',
        name: 'Flames on the ocean', 
        src: 'https://player.vimeo.com/video/199722140?autoplay=0&byline=0&portrait=0',
        text: '\'Flames On The Ocean\' from the Motorifik album \'Secret Things\''
      },
      {
        url: 'nameless-color',
        name: 'Nameless Color', 
        src: 'https://player.vimeo.com/video/199722323?autoplay=0&byline=0&portrait=0',
        text: '\'Nameless Color\' from the Motorifik album \'Secret Things\''
      },
    ],
    showAbout: false,
    showListItems: true,
    showReviews: false
  }
  ,
  {
    type: 'reviews',
    path: ReviewsPicture,
    data: [
      {
        name: 'The Independant', 
        firstParagraph: 'If Anglo-Gallic psych-pop duo Motorifik had been around in the 1990s, they would probably have been on Creation Records, so perfectly do they embody that aesthetic, with churning slo-mo guitar grooves and great, anthemic choruses hovering on the edge of legibility.', 
        secondParagraph: 'The title-track opener here exemplifies their qualities, its Spectorised-indie sound blended from tom-toms, tambourine and massively reverbed vocals, with tiny glockenspiel details glittering atop the dense fuzz of noise. Think Jesus and Mary Chain and early Primal Scream. Elsewhere, \'The Cause\' features psychedelic tack-piano and voodoo stomp-beat bound up with tendrils of wiry guitar, and the acoustic \'Nameless Colour\' oozes pastoral calm, while \'A Vision\' and \'Used Angel\' recall Clinic and The Zombies respectively. A gorgeous noise.',
        autor: ''
      },
      {
        name: 'Les Inrocks',
        firstParagraph: 'Parti à Manchester, un Français revient avec un album magnifique. Il a importé une certaine volupté – de la grandeur d’Air aux extases de Phoenix- mais déformée, défoncée dans ce labyrinthe sonique qui évoque aussi souvent le shoegazing, pour son romantisme et son urgence, que des songwriters nettement plus flamboyants, comme Love ou Cardinal.',
        secondParagraph: '',
        autor: 'JD Beauvallet'
      },
    ],
    showAbout: false,
    showListItems: false,
    showReviews: true 
  } 
]
  
export default constant;
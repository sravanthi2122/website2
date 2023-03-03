import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,faPhone,faMapMarker,faPaperPlane,  faIndianRupeeSign,faDesktop, faDiamond, faEnvelope,  faHeart,  faThList,   faUserFriends,faTh,faCamera, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import pic from './Images/black-background-04-coolbackgrounds.png';
import pic1 from './Images/Design.webp';
import pic2 from'./Images/Team/Person1.jpg';
import pic3 from './Images/Team/Person2.jpg';
import pic4 from './Images/Team/Person3.jpg';
import pic5 from './Images/Team/Person4.jpg';
import pic6 from './Images/Works/pic3.jpg';
import pic7 from './Images/Works/elephant-1822636_960_720.jpg';
import pic8 from './Images/Works/pic5.png';
import pic9 from './Images/Works/pic6.png';
import pic10 from './Images/Works/pic7.png';
import pic11 from'./Images/Works/lens-3046269__340.jpg';
import pic12 from'./Images/Works/pic9.png';
import pic13 from'./Images/Works/water-2943518_960_720.jpg';
import pic14 from './Images/Works/20191009140007-GettyImages-1053962188.jpeg';
import pic15 from'./Images/Works/pic4.png';
import pic16 from './Images/Works/pic8.jpg';
import pic17 from'./Images/Works/onions-1239423__340.jpg';
import ModalImage from './Components/ModalImages/ModalImages';
import { faFacebook,  faGooglePlus, faLinkedinIn, faTwitter,  faYoutube } from '@fortawesome/free-brands-svg-icons';




function App() {
  
  return (
    
   
    <div>
 <div className="top">
    <div className="bar white card" id="myNavbar">
   <a href="#home" className="bar-item button wide">SP</a>

     <div className="right hide-small">
        <a href="#about" className="bar-item button">About</a>
        <a href="#team" className="bar-item button"> <FontAwesomeIcon icon={faUserFriends} />Team</a>
        <a href="#work" className="bar-item button"> <FontAwesomeIcon icon={faThList} /> Work</a>
        <a href="#pricing" className="bar-item button"> <FontAwesomeIcon icon={faIndianRupeeSign} /> Pricing</a>
        <a href="#contact" className="bar-item button"> <FontAwesomeIcon icon={faEnvelope} /> Contact</a>
      </div> 
    </div>
  </div>

  <header className=" display-container grayscale-min" id="home">
  <img src={pic} style={{ backgroundPosition: "center",backgroundSize: "cover",minHeight: "50%", width:"100%"}} alt="img"/>
  <div className="display-left text-white" style={{padding:"48px"}}>
    <span className="jumbo hide-small">Start something that matters</span><br></br>
    <span className="xxlarge hide-large hide-medium">Start something that matters</span><br></br>
    <span className="large">Stop wasting valuable time with projects that just isn't you.</span>
    <p><a href="#about" className="button white padding-large large margin-top opacity hover-opacity-off">About The Company</a></p>
  </div> 
  
</header>
 
<div className="container" style={{padding:"128px 16px"}} id="about">
  <h3 className="center">ABOUT THE COMPANY</h3>
  <p className="center large">Key features of our company</p>
  <div className="row-padding center" style={{marginTop:"64px"}}>
    <div className="quarter">
      <i className=" margin-bottom jumbo center"><FontAwesomeIcon icon={faDesktop}/></i>
      <p className="large">Responsive</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div className="quarter">
      <i className=" margin-bottom jumbo"><FontAwesomeIcon icon={faHeart}/></i>
      <p className="large">Passion</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div className="quarter">
      <i className=" margin-bottom jumbo"><FontAwesomeIcon icon={faDiamond}/></i>
      <p className="large">Design</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div className="quarter">
      <i className=" margin-bottom jumbo"><FontAwesomeIcon icon={faCog}/></i>
      <p className="large">Support</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    
  </div>
</div>
<div className="container light-grey" style={{padding:"128px 16px"}}>
  <div className="row-padding">
    <div className="col m6">
      <h3>We know design.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>tempor incididunt ut labore et dolore.</p>
      <p><a href="#work" className="button black"> <FontAwesomeIcon icon={faTh}/>View Our Works</a></p>
    </div>
    <div className="col m3">
      <img  src={pic1} alt="Buildings" style={{width:700, height:400}} />
    </div>
  </div>
</div>
<div className="container" style={{padding:"128px 16px"}} id="team">
  <h3 className="center">THE TEAM</h3>
  <p className="center large">The ones who runs this company</p>
  <div className="row-padding grayscale" style={{marginTop:"64px"}}>
    <div className="col l3 m3 margin-bottom">
      <div className="card">
        <img src={pic2} alt="John" style={{width:"90%"}} />
        <div className="container">
          <h3>John Doe</h3>
          <p className="opacity">CEO & Founder</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="button light-grey block" ><FontAwesomeIcon icon={faEnvelope}/> Contact</button></p>
        </div>
      </div>
    </div>
    <div className="col l3 m3 margin-bottom">
      <div className="card">
        <img src={pic3} alt="Jane" style={{width:"100%"}}/>
        <div className="container">
          <h3>Anja Doe</h3>
          <p className="opacity">Art Director</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="button light-grey block"><FontAwesomeIcon icon={faEnvelope}/> Contact</button></p>
        </div>
      </div>
    </div>
    <div className="col l3 m3 margin-bottom">
      <div className="card">
        <img src={pic4} alt="Mike" style={{width:"100%"}} />
        <div className="container">
          <h3>Mike Ross</h3>
          <p className="opacity">Web Designer</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="button light-grey block"><FontAwesomeIcon icon={faEnvelope}/> Contact</button></p>
        </div>
      </div>
    </div>
    <div className="col l3 m3 margin-bottom">
      <div className="card">
        <img src={pic5} alt="Dan" style={{width:"90%"}} />
        <div className="container">
          <h3>Dan Star</h3>
          <p className="opacity">Designer</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="button light-grey block"><FontAwesomeIcon icon={faEnvelope}/> Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container row center dark-grey padding-64">
  <div className="quarter">
    <span className="xxlarge">14+</span>
    <br></br>Partners
  </div>
  <div className="quarter">
    <span className="xxlarge">55+</span>
    <br></br>Projects Done
  </div>
  <div className="quarter">
    <span className="xxlarge">89+</span>
    <br></br>Happy Clients
  </div>
  <div className="quarter">
    <span className="xxlarge">150+</span>
    <br></br>Meetings
  </div>
</div>
<div className="container" style={{padding:"128px 16px"}} id="work">
  <h3 className="center">OUR WORK</h3>
  <p className="center large">What we've done for people</p>

  <div className="row-padding" style={{marginTop:"64px"}}>
    <div className="col l3 m6">
      <ModalImage src={pic6} alt={`web1`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic7} alt={`web2`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic8} alt={`web3`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic9} alt={`web4`} ratio={`3:2`} />
    </div>
  </div>
<div className="row-padding section">
    <div className="col l3 m6">
    <ModalImage src={pic10} alt={`web5`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic11} alt={`web6`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic12} alt={`web7`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic13} alt={`web8`} ratio={`3:2`} />
    </div>
  </div>
  <div className="row-padding section">
    <div className="col l3 m6">
    <ModalImage src={pic14} alt={`web5`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic15} alt={`web6`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic16} alt={`web7`} ratio={`3:2`} />
    </div>
    <div className="col l3 m6">
    <ModalImage src={pic17} alt={`web8`} ratio={`3:2`} />
    </div>
  </div>
</div>

<div className="container light-grey padding-64">
  <div className="row-padding">
    <div className="col m6">
      <h3>Our Skills.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
      tempor incididunt ut labore et dolore.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
      tempor incididunt ut labore et dolore.</p>
    </div>
    <div className="col m6">
      <p className="wide"><i className=" margin-right"><FontAwesomeIcon icon={faCamera}/></i>Photography</p>
      <div className="grey">
        <div className="container dark-grey center" style={{width:"90%"}}>90%</div>
      </div>
      <p className="wide"><i className=" margin-right"><FontAwesomeIcon icon={faDesktop}/></i>Web Design</p>
      <div className="grey">
        <div className="container dark-grey center" style={{width:"85%"}}>85%</div>
      </div>
      <p className="wide"><i className=" margin-right"><FontAwesomeIcon icon={faPhotoFilm}/></i>Photoshop</p>
      <div className="grey">
        <div className="container dark-grey center" style={{width:"75%"}}>75%</div>
      </div>
    </div>
  </div>
</div>
<div className="container center dark-grey" style={{padding:"128px 16px"}} id="pricing">
  <h3>PRICING</h3>
  <p className="large">Choose a pricing plan that fits your needs.</p>
  <div className="row-padding" style={{marginTop:"64px"}}>
    <div className="third section">
      <ul className="ul white hover-shadow">
        <li className="black xlarge padding-32">Basic</li>
        <li className="padding-16"><b>10GB</b> Storage</li>
        <li className="padding-16"><b>10</b> Emails</li>
        <li className="padding-16"><b>10</b> Domains</li>
        <li className="padding-16"><b>Endless</b> Support</li>
        <li className="padding-16">
          <h2 className="wide"><FontAwesomeIcon icon={faIndianRupeeSign} fontSize ="20"/>2000</h2>
          <span className="opacity">per month</span>
        </li>
        <li className="light-grey padding-24">
          <button className="button black padding-large">Sign Up</button>
        </li>
      </ul>
    </div>
    <div className="third ">
      <ul className="ul white hover-shadow">
        <li className="red xlarge padding-48">Pro</li>
        <li className="padding-16"><b>25GB</b> Storage</li>
        <li className="padding-16"><b>25</b> Emails</li>
        <li className="padding-16"><b>25</b> Domains</li>
        <li className="padding-16"><b>Endless</b> Support</li>
        <li className="padding-16">
          <h2 className="wide"><FontAwesomeIcon icon={faIndianRupeeSign} style={{color :"red" }} fontSize ="20"/>8000 </h2>
          <span className="opacity">per month</span>
        </li>
        <li className="light-grey padding-24">
          <button className="button  padding-large" style={{backgroundColor:"red",color:"white"}}>Sign Up</button>
        </li>
      </ul>
    </div>
    <div className="third section">
      <ul className="ul white hover-shadow">
        <li className="black xlarge padding-32">Premium</li>
        <li className="padding-16"><b>50GB</b> Storage</li>
        <li className="padding-16"><b>50</b> Emails</li>
        <li className="padding-16"><b>50</b> Domains</li>
        <li className="padding-16"><b>Endless</b> Support</li>
        <li className="padding-16">
          <h2 className="wide"><FontAwesomeIcon icon={faIndianRupeeSign} fontSize ="20"/>12000</h2>
          <span className="opacity">per month</span>
        </li>
        <li className="light-grey padding-24">
          <button className="button black padding-large">Sign Up</button>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="container light-grey" style={{padding:"128px 16px"}} id="contact">
  <div className="row-padding">
    <h3 className="center">CONTACT</h3>
  <p className="center large">Lets get in touch. Send us a message:</p>
  <div className="col m6">
  <div style={{marginTop:"48px"}}>
  <p><FontAwesomeIcon icon={faMapMarker}/> Visakhapatnam, India</p>
    <p><FontAwesomeIcon icon={faPhone}/> Phone: +91 8328577834</p>
    <p><FontAwesomeIcon icon={faEnvelope}/>  Email: company@mail.com</p>
   <br></br>
<form action="/action_page.php" target="_blank">
      <p><input className="input border" type="text" placeholder="Name" required name="Name" /></p>
      <p><input className="input border" type="text" placeholder="Email" required name="Email" /></p>
      <p><input className="input border" type="text" placeholder="Subject" required name="Subject" /></p>
      <p><input className="input border" type="text" placeholder="Message" required name="Message" /></p>
      <p>
        <button className="button black" type="submit">
        <FontAwesomeIcon icon={faPaperPlane}/> 
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
    </div>
    </div>
    <div className="col m6"> 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60778.77834330174!2d83.31518475820312!3d17.807028600000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395a5218edb067%3A0x5038eb17919dc6b!2sIT%20HILL%20NO.3!5e0!3m2!1sen!2sin!4v1676945804343!5m2!1sen!2sin"
     width="600" 
     height="450" 
     style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

</div>
    
    <footer  >
    <div className="footer-content">
    
     <h3> Web Developing</h3>
     <ul className="socials">
      <li><FontAwesomeIcon icon={faFacebook}/></li>
      <li><FontAwesomeIcon icon={faTwitter}/></li>
      <li><FontAwesomeIcon icon={faGooglePlus}/></li>
      <li><FontAwesomeIcon icon={faYoutube}/></li>
     <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
     </ul>
     
      </div>
  
      <div className="footer-bottom">
      <p>copyright &copy;2023 Web Developer  </p>
      </div>
  

</footer>

</div>
  );
}

export default App;
 




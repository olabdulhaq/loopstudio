import './sass/App.scss';
import logo from './image/logo.svg'
import interactive from './image/desktop/image-interactive.jpg'
import img1 from './image/desktop/image-deep-earth.jpg'
import img2 from './image/desktop/image-night-arcade.jpg'
import img3 from './image/desktop/image-soccer-team.jpg'
import img4 from './image/desktop/image-grid.jpg'
import img5 from './image/desktop/image-from-above.jpg'
import img6 from './image/desktop/image-pocket-borealis.jpg'
import img7 from './image/desktop/image-curiosity.jpg'
import img8 from './image/desktop/image-fisheye.jpg'
import img01 from './image/mobile/image-deep-earth.jpg'
import img02 from './image/mobile/image-night-arcade.jpg'
import img03 from './image/mobile/image-soccer-team.jpg'
import img04 from './image/mobile/image-grid.jpg'
import img05 from './image/mobile/image-from-above.jpg'
import img06 from './image/mobile/image-pocket-borealis.jpg'
import img07 from './image/mobile/image-curiosity.jpg'
import img08 from './image/mobile/image-fisheye.jpg'
import facebook from './image/icon-facebook.svg'
import twitter from './image/icon-twitter.svg'
import pinterest from './image/icon-pinterest.svg'
import instagram from './image/icon-instagram.svg'
import hamburger from './image/icon-hamburger.svg'
import close from './image/icon-close.svg'

import Media from 'react-media';
import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
    <header className={`header ${showNav ? "header--mobile" : "" }`}>
      <nav className="header__nav">
        <ul className="header__logo">
          <img src={logo} alt="logo" />
        </ul>
        <ul className={`header__item ${showNav ? "header__item--mobile" : ""}`}>
          <li className={`header__list ${showNav ? "header__list--mobile" : ""}`}>About</li>
          <li className={`header__list ${showNav ? "header__list--mobile" : ""}`}>Careers</li>
          <li className={`header__list ${showNav ? "header__list--mobile" : ""}`}>Events</li>
          <li className={`header__list ${showNav ? "header__list--mobile" : ""}`}>Products</li>
          <li className={`header__list ${showNav ? "header__item--mobile" : ""}`}>Support</li>
        </ul>
        <i className="header__toggle" onClick={handleShowNav}>
          {/* {`{<img src={hamburger} alt="" />} ${showNav ? <img src={close} alt="" /> : ""}`} */}
          
          {showNav ? <img src={close} alt="" className="header__close" />
          : <img src={hamburger} alt="" className="header__hamburger" /> }
        </i>
      </nav>
      <div className={`header__text-box ${showNav ? "header__text-box--mobile" : ""}`}>
        <h1 className="header__text">Immersive experiences that deliver</h1>
      </div>
    </header>

    <section className="interactive">
      <div className="interactive__img-box">
        <img src={interactive} alt="interactive VR" className="interactive__img" />
      </div>
      <div className="interactive__text-box">
        <h2 className="interactive__text-header">The leader in interactive VR</h2>
        <p className="interactive__text">Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
        </p>
      </div> 
    </section>

    <section className="creations">
      <div className="creations__header">
        <h2 className="creations__title">Our creations</h2>
        <h4 className="creations__see-all">see all</h4>
      </div>
      <div className="creations__img-grid">
        <div className="creations__img-list">
          <Media query="(max-width: 56.25em)">
          {matches =>
            matches ? (
              <img src={img01} alt="" className="creations__img"/>
            ) : (
              <img src={img1} alt="" className="creations__img"/>
            )
          }
        </Media>
          <h4 className="creations__img-caption">Deep earth</h4>
        </div>
        <div className="creations__img-list">
          <Media query="(max-width: 56.25em)">
          {matches =>
            matches ? (
              <img src={img02} alt="" className="creations__img"/>
            ) : (
              <img src={img2} alt="" className="creations__img"/>
            )
          }
        </Media>
          <h4 className="creations__img-caption">Night arcade</h4>
        </div>
        <div className="creations__img-list">
          <Media query="(max-width: 56.25em)">
          {matches =>
            matches ? (
              <img src={img03} alt="" className="creations__img"/>
            ) : (
              <img src={img3} alt="" className="creations__img"/>
            )
          }
        </Media>
          <h4 className="creations__img-caption">Soccer team VR</h4>
        </div>
        <div className="creations__img-list">
          <Media query="(max-width: 56.25em)">
          {matches =>
            matches ? (
              <img src={img04} alt="" className="creations__img"/>
            ) : (
              <img src={img4} alt="" className="creations__img"/>
            )
          }
        </Media>
          <h4 className="creations__img-caption">The grid</h4>
        </div>
        <div className="creations__img-list">
          <Media query="(max-width: 56.25em)">
          {matches =>
            matches ? (
              <img src={img05} alt="" className="creations__img"/>
            ) : (
              <img src={img5} alt="" className="creations__img"/>
            )
          }
        </Media>
          <h4 className="creations__img-caption">From up above VR</h4>
        </div>
        <div className="creations__img-list">
          <Media query="(max-width: 56.25em)">
          {matches =>
            matches ? (
              <img src={img06} alt="" className="creations__img"/>
            ) : (
              <img src={img6} alt="" className="creations__img"/>
            )
          }
        </Media>
          <h4 className="creations__img-caption">Pocket borealis</h4>
        </div>
        <div className="creations__img-list">
          <Media query="(max-width: 56.25em)">
          {matches =>
            matches ? (
              <img src={img07} alt="" className="creations__img"/>
            ) : (
              <img src={img7} alt="" className="creations__img"/>
            )
          }
        </Media>
          <h4 className="creations__img-caption">The curiosity</h4>
        </div>
        <div className="creations__img-list">
          <Media query="(max-width: 56.25em)">
          {matches =>
            matches ? (
              <img src={img08} alt="" className="creations__img"/>
            ) : (
              <img src={img8} alt="" className="creations__img"/>
            )
          }
        </Media>
          <h4 className="creations__img-caption">Make it fisheye</h4>
        </div>
      </div>
    </section>

    <footer className="footer">
    <nav className="footer__nav">
        <ul className="footer__logo-box">
          <img src={logo} alt="logo" className="footer__logo" />
        </ul>
        <ul className="footer__item">
          <img src={facebook}  alt="" className="footer__list" />
          <img src={twitter}   alt="" className="footer__list" />
          <img src={pinterest} alt=""   className="footer__list" />
          <img src={instagram} alt=""   className="footer__list" />
        </ul>
      </nav>
      
      <nav className="footer__nav footer__nav--2">
      <ul className="footer__item--2">
          <li className="footer__list--2">About</li>
          <li className="footer__list--2">Careers</li>
          <li className="footer__list--2">Events</li>
          <li className="footer__list--2">Products</li>
          <li className="footer__list--2">Support</li>
      </ul>
      <ul>
        <p className="footer__copyright">&copy; 2021 Loopstudios. All rights reserved</p>
      </ul>
      </nav>
    </footer>
    </>
  );
}

export default App;

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { RiFacebookBoxFill } from '@react-icons/all-files/ri/RiFacebookBoxFill'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiGithubFill } from '@react-icons/all-files/ri/RiGithubFill'
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill'

const Main = props => {
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <div ref={props.setWrapperRef} id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <Link to="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
          <h2 className="major">Intro</h2>
        </Link>
        <span className="image main">
          <Link to="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/pic01.jpg" alt="Intro" />
          </Link>
        </span>
        <p>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue.
          Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi
          nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
          porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
          Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
          aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
          vehicula.
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <Link to="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">
          <h2 className="major">Work</h2>
        </Link>
        <span className="image main">
          <Link to="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/pic02.jpg" alt="Work" />
          </Link>
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
          erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec
          lorem luctus ultrices.
        </p>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
          rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel
          lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <Link to="https://publiuslogic.com" rel="noopener noreferrer" target="_blank" area-label="PubliusLogic">
          <h2 className="major">About</h2>
        </Link>
        <span className="image main">
          <Link to="https://publiuslogic.com" rel="noopener noreferrer" target="_blank" area-label="PubliusLogic">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/pic03.jpg" alt="About" />
          </Link>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend
          sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis
          in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact Form</h2>
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <Link
              to="https://twitter.com/donboulton"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <RiTwitterFill
                alt="Twitter"
                style={{
                  fontSize: '2rem',
                  color: 'gray',
                }}
              />
              <span className="label">Twitter</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://facebook.com/donboulton"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <RiFacebookBoxFill
                alt="Facebook"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">Facebook</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/boulton3662/"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <RiInstagramFill
                alt="Instagram"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">Instagram</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://gihub.com/donaldboulton/donboulton.com"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <RiGithubFill
                alt="Github"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              to="https://youtube.com/donboulton/"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <RiYoutubeFill
                alt="Youtube"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">Youtube</span>
            </Link>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

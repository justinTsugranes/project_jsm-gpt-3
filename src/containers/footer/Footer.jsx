import './footer.css'
import { logo } from '../../assets'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='logo' />
          <p>2022 misfitDodo Media. All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Legal</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>555 Laurel Canyon Drive, Los Angeles, CA</p>
          <p>555-555-5555</p>
          <p>info@email.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2022 misfitDodo Media. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

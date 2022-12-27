import './header.css'
import { people, ai } from '../../assets'

const Header = () => (
  <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
      <h1 className='gradient__text'>
        Let&apos;s Build Something Amazing with GPT-3 OpenAI
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nobis eum
        eligendi. Inventore consectetur ipsam id sed eaque iste error incidunt
        reiciendis voluptatum, nemo voluptates!
      </p>

      <div className='gpt3__header-content__input'>
        <input type='email' placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
      </div>

      <div className='gpt3__header-content__people'>
        <img src={people} alt='people' />
        <p>1,600 people have requested access in last 24 hours</p>
      </div>
    </div>

    <div className='gpt3__header-image'>
      <img src={ai} alt='ai' />
    </div>
  </div>
)

export default Header
